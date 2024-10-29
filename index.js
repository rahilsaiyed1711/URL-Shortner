const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8001;
const URL = require('./models/url');
const { connectToMongo } = require('./connect');
const {restrictToLoggedinUserOnly, checkAuth} = require('./middlewares/auth')
const cookieParser = require('cookie-parser')
//routes
const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const userRoute = require('./routes/user')
// Connect to MongoDB
connectToMongo("mongodb://localhost:27017/short-url")
    .then(() => console.log("connected to mongodb"))
    .catch(err => console.error('MongoDB connection error:', err));

// Set EJS as the view engine and configure views folder
app.set("view engine", "ejs");
app.set("views", path.resolve('./views'));


// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
// Route to handle URLs
app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);
app.use('/', checkAuth, staticRoute);

// Route for URL redirection based on shortId
app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    try {
        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now(),
                    },
                },
            },
            { new: true } // Returns the updated document
        );

        if (!entry) {
            return res.status(404).send('URL not found');
        }

        res.redirect(entry.redirectUrl);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server error');
    }
});

// Route to render 'home' view with list of all URLs
app.get('/test', async (req, res) => {
    console.log("Test route hit");
    try {
        const allUrls = await URL.find({});
        return res.render('home', { urls: allUrls });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log('App running on port ' + PORT);
});

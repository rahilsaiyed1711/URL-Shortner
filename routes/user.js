const express = require('express');
const {hangleUserSignup, hangleUserLogin} = require('../controllers/user')

const router = express.Router();

router.post("/", hangleUserSignup);
router.post("/login", hangleUserLogin);



module.exports = router;
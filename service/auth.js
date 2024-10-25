const jwt = require('jsonwebtoken');
const secret = 'Rahil$1711@$';

function setUser(user) {
    return jwt.sign({
      _id: user._id,
      email: user.email, 
    }, secret);
}

function getUser(token) {
  if (!token) {
    console.error('Token is missing');
    return null;
  }
  
  try {
    return jwt.verify(token, secret); 
  } catch (err) {
    console.error('Token verification failed:', err.message);  // Logs the exact error message
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};

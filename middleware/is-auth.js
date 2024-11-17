const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const authHeader = req.get("Authorization");
  
  // If the Authorization header is missing
  if (!authHeader) {
    req.isAuth = false;
    return next();  // Stop further execution and move to the next middleware
  }

  // Split the token from the Authorization header
  const token = authHeader.split(' ')[1];  // 'Bearer zdsbdghbdjshb'
  
  // If token is missing or empty
  if (!token || token === '') {
    req.isAuth = false;
    return next();  // Stop further execution and move to the next middleware
  }

  let decodedToken;
  
  try {
    decodedToken = jwt.verify(token, 'zahraPrivateKey');  // Verify the token
  } catch (err) {
    req.isAuth = false;
    return next();  // Stop further execution and move to the next middleware
  }

  // If token verification fails or is invalid
  if (!decodedToken) {
    req.isAuth = false;
    return next();  // Stop further execution and move to the next middleware
  }

  // If everything is correct, set authentication status
  req.isAuth = true;
  req.userId = decodedToken.userId;
  next();  // Continue to the next middleware
};

'use strict';
const AuthController = require('../controllers/auth/authController');

module.exports = function authMiddleware(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({
      code: 'Unauthorized',
      message: 'Unauthorized'
    })
  }

  req.user = AuthController.validateToken(token);

  next();
};
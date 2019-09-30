module.exports = {
  PORT: process.env.PORT || 5001,
  cookieSecret: process.env.COOKIE_SECRET || 'qwerty',
  jwtSecret: process.env.JWT_SECRET || 'qwerty',
  
  facebook: {
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callback: 'http://localhost:5001/api/auth/facebook/callback',
    scopes: ['email', 'public_profile'],
  },

  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callback: 'http://localhost:5001/api/auth/google/callback',
    scopes: ['email', 'profile'],
  },
  
};

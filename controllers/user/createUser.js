const UsersModel = require('../../models/usersModel.js');

const createUser = async (req, res) => {
  const newUserData = req.body;

  try {
    const newUser = await new UsersModel(newUserData);

    newUser.save( (err, result) => {
      res.json({
        status: "OK",
        user: result
      })
    });
    
  } catch (error) {
    res.status(400).json({
      status: "BAD",
      error: error,
      message: error.message
    })
  }
};

module.exports = createUser;
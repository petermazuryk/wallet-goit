const UsersModel = require('../../models/usersModel.js');

const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const updatedData = req.body;

  try {
    const updateUser = await UsersModel.findByIdAndUpdate(userId, { $push: updatedData });
    res.json({
      status: "OK",
      user: updateUser
    })
  } catch (error) {
    res.status(400).json({
      status: "BAD",
      error: error,
      message: error.message
    })
  }
};

module.exports = updateUser;
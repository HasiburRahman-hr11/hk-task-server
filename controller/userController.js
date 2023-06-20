const User = require("../model/User");

exports.createNewUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.getSingleUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    if (user) {
      res.status(200).json(user);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.updateUser = async (req, res) => {
    const userId = req.params.userId;
  try {
    const user = await User.findById(userId);

    if (user) {
      const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
        new: true,
      });
      res.status(201).json(updatedUser);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

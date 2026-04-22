const User = require("../models/User");

// Register
exports.register = async (req, res) => {
  const { username, password, role } = req.body;

  const user = new User({ username, password, role });
  await user.save();

  res.json(user);
};

// Login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (!user) return res.status(400).json({ msg: "Invalid" });

  res.json(user);
};
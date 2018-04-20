const User = require("../models/userModels");
const bcrypt = require("bcrypt");

const createUser = (req, res) => {
	const { username, password } = req.body;
	const newUser = new User({ username, password });

	newUser.save((err, user) => {
    if (err) return res.send(err);
    res.json({
      success: `You're in the abyss`,
      user
    });
  });
};

module.exports = {
	createUser
};

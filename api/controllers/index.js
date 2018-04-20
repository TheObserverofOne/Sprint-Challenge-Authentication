const { getAllJokes } = require('./jokes');
const { signin } = require('./login');
const { createUser } = require('./user');

module.exports = {
  getAllJokes,
  signin,
  createUser
};

const { authenticate } = require('../utils/middlewares');

const { getAllJokes, createUser, signin } = require('../controllers');

module.exports = server => {
  server.get('/api/jokes', authenticate, getAllJokes);
  server.route('/api/users').post(createUser);
  server.route('/api/signin').post(signin);
};

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

UserSchema.pre('save', function(next) {

  bcrypt.hash(this.password, SALT_ROUNDS)
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(err => {
      next(err);
    });
});

UserSchema.methods.checkPassword = function(plainTextPW, callBack) {
  bcrypt.compare(plainTextPW, this.password)
    .then(good => {
    callBack(null, good);
  });
};

module.exports = mongoose.model('User', UserSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
      },
    email: {
        type: String,
        validate: {
          validator: function(v) {
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
          },
          message: props => `${props.value} is not a valid Email Id`
        },
        required: [true, 'Email Id required']
    },
    password: {
        type: String,
        minLength: [6, 'Must be at least 6, got {VALUE}'],
        required: true
      },
    token: String
  });
  
  exports.User = mongoose.model('User', userSchema);
  
  
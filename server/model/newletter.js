const mongoose = require('mongoose');

const newsletterSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function (value) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
          },
          message: "Invalid email format"
        }
      }

});

module.exports = mongoose.model('newletter',newsletterSchema);
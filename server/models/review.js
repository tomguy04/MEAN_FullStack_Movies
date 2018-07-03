const mongoose = require('mongoose');
const { Schema } = mongoose;
//const uniqueValidator = require('mongoose-unique-validator');

const reviewSchema = new Schema({
  //user_id: {type: String}
    name: {
      type: String,
      trim: true,
      required: [true, 'your name is required'],
      minlength: [3, 'You must provide your name'],
      //unique: true
    },
    stars: {
      type: Number,
      trim: true,
      required: [true, 'You must provide a number of stars'],
    },
    review:{
      type: String,
      trim: true,
      minlength: [3, 'You review must be at least 3 chararacters'],
      required: [true, 'You must provide a review'],
    },

    _movie: {type: Schema.Types.ObjectId, ref: 'Movie'},
    

  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Review', reviewSchema);


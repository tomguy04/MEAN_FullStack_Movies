const uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema(
 
    {
      title: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: [3, 'Movie must have a title'],
      },
      name: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'Movie/Review must have a name'],
      },
      stars: {
        type: Number,
        required: true,
        trim: true,
        minlength: [1, 'Movie/review must have a stars'],
      },
      review: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'Movie/review must be at least 3 chars'],
      },

      reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    },
    {
      timestamps: true
    }
  )

//use this middleware
movieSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });


module.exports = mongoose.model('Movie', movieSchema);
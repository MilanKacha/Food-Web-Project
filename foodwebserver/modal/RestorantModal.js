const mongoose = require("mongoose");
const { Schema } = mongoose;

const RestorantSchema = new Schema({
  restorantname: {
    type: String,
    required: [true, "A product must have a restorantname"],
    minlength: 1, // Minimum length of 5 characters
    maxlength: 100, // Maximum length of 50 characters
  },
  images: [String],
  desc: {
    type: String,
    minlength: 1, // Minimum length of 5 characters
    maxlength: 300, // Maximum length of 50 characters
    trim: true,
    required: false,
  },
  brand: {
    type: String,
  },
  opentime: {
    type: String,
    required: true,
  },
  expecteddeliverytime: {
    type: String,
  },
  category: {
    type: String,
    required: [true, "A restorant should have type"],
    enum: {
      values: ["orderonline", "dining", "nightlife&club"],
      message: "Category is either orderonline, dining or nightlife&club",
    },
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, "rating must be above 1.0"],
    max: [5, "rating must be below 5.0"],
    set: (val) => Math.round(val),
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  city: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
});

module.exports = mongoose.model("Restorant", RestorantSchema);

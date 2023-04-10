const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema({
    reckey:{
        type: Number
    },
    title: {
        type: String
      },
    ingredent: {
        type: [String]
    },
    img: {
        type: String
    },
    recipe: {
        type: String
    },
  });
  
  exports.Recipe = mongoose.model('Recipe', recipeSchema);
  
  
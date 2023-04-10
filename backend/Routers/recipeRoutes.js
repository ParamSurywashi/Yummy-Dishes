const express = require('express');
const recipeController = require('../Controller/recipeController');
const router = express.Router();

router.get('/',recipeController.getAllRecipes);
router.post('/addrecipes', recipeController.addRecipe);
//router.get('/:data',recipeController.searchRecipe);
router.get('/getsize',recipeController.getSizeList);

exports.recipeRoutes=router;

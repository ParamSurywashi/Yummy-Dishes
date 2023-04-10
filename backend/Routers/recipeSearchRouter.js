const express = require('express');
const recipeController = require('../Controller/recipeController');
const router = express.Router();


router.get('/:data',recipeController.searchRecipe);

exports.recipeSearchRoutes=router;

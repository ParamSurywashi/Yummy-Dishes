
const model = require('../Model/Recipe');
const Recipe = model.Recipe;

exports.addRecipe = async (req,res)=>{
    try{
      const recipe = new Recipe(req.body);
      recipe.save();
      res.status(201).json({"success" : true});
    }catch(e){
        res.status(400);
    }
}

exports.getAllRecipes = async (req,res)=>{
    res.setHeader('Content-Type','application/json');
    const query = Recipe.find();  
    const recipes =  await query;
     res.status(201).json(recipes);
   
}

exports.searchRecipe = async (req,res)=>{
    res.setHeader('Content-Type','application/json');
   // const search = req.body;
   console.log(req.param)
   const search = req.params.data;
    console.log(search);
    const searchData = new RegExp(search, "i");
     const recipes =  await Recipe.find({ $or: [{ title: { $regex: searchData }}, {recipe: { $regex: searchData  }}] });
     
     res.status(201).json(recipes);

}

exports.getSizeList = async(req,res)=>{
    res.setHeader('Content-Type','application/json');
    const query = Recipe.find().count();  
    const count =  await query;
     res.status(201).json(count);
}
const Recipes = require('../models/recipe'); //importing recipe model

const getRecipes = async (req, res) => {
    const recipe=await Recipes.find()
    return res.json(recipe)
    
}

const getRecipe = async (req, res) => {
    const recipe=await Recipes.findById(req.params.id)
    return res.json(recipe)
}

const addRecipe =async (req, res) => {
    const {title,ingredients,instructions,imageCover}=req.body

    if(!title || !ingredients || !instructions){
        return res.status(400).json({message:"Please fill all the fields"})
    }

    const newRecipe=new Recipes({
        title,ingredients,instructions,coverImage:imageCover
    })
    await newRecipe.save()
    return res.json(newRecipe)

}

const editRecipe = async (req, res) => {
    const {title,ingredients,instructions,imageCover}=req.body
    let recipe=await Recipes.findById(req.params.id)
    try{
    if(recipe){

       const updatedRecipe = await Recipes.findByIdAndUpdate(req.params.id, 
                 { title, ingredients, instructions, imageCover }, 
                 { new: true } );
       res.json(updatedRecipe);
    } else {
        res.status(404).json({ message: "Recipe not found" });
    }
    }catch(error){

    res.status(500).json({message:error.message})
    
}
}

const deleteRecipe = (req, res) => {
    const { id } = req.params;
    Recipes.findByIdAndDelete(id)
    .then(() => res.json({ message: "Recipe deleted successfully" }))
    .catch((error) => res.status(500).json({ message: error.message }));
}

module.exports={getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe}
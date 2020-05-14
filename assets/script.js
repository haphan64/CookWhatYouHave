var apiId = "6d15138b427645f68ff32030ae3cb1cc";
// var apiId ="b229212145ae4030923cb4146500d590";
// var apiId ="023b6d102d964dadb8821194c30016d7";
var ingredients = "apples";
var recipe = "";
// var RecipeStore= JSON.parse(localStorage.getItem('recipe'));

if (!recipe) {
    recipe = [];
}
// getting the value from the searchbtn input
$("#searchBtn").on("click", function () {
    ingredients = $("#ingredients").val();
    searchRecipes(ingredients);
})
function searchRecipes(ingredients) {
    var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredients + "&apiKey=" + apiId;
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // aray of recipes
        getRecipe(response[0].id);
        //  loop for listing the used ingredients 
        // for recipe id.
        $("#show").empty()
        for (i = 0; i < response.length; i++) {
            // console.log(response[i].title)
            var recipeCard = '<div class="card col-3" style="width: 18rem;"><img src=' + response[i].image + ' class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + response[i].title + '</h5><p class="card-text">.</p><a href="#" class="btn btn-primary viewRecipe" recipe= ' + response[i].id + '>View Recipe</a></div></div>'

            $("#show").append(recipeCard)
            // console.log(response[i].image);
            // console.log(response[i].usedIngredients[0].name);
            // console.log(response[i].missedIngredients[0].name);
            //  console.log(response[i].id);
            //  getRecipe(response[i].id);
        }
        $(".viewRecipe").on("click", function () {
            console.log(this)
            let id = $(this).attr("recipe")
            getRecipe(id);
        })
    });
};

searchRecipes(ingredients);

function getRecipe(id) {
    var queryURL = "https://api.spoonacular.com/recipes/" + id + "/information?includeNutrition=false" + "&apiKey=" + apiId;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log("show recipe");
        // console.log (response.title)
        // console.log(response.image)
        // console.log(response.sourceUrl)
        console.log(response.instructions)
        //  console.log(response.ingredients)
        //  go to a detail page with the recipe info         
        /*  1-title and image
            1-ingredients
            1-instructions  */
        // console.log(response.analyzedInstructions[0].steps[0].ingredients)
        console.log(response.extendedIngredients)

        for (i = 0; i < response.extendedIngredients.length; i++) {
            console.log(response.extendedIngredients[i].original)
        }
    });
}



// function showRecipe(id){
//     var 
// }
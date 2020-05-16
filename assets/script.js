// Generate background image

var url = "https://api.pexels.com/v1/search?query=ingredients&per_page=20";

// apiKey = "563492ad6f91700001000001f7844e1ee34b4bf79ebd70bc8a98a19f"
apiKey = "563492ad6f917000010000011fa50223f942403d9e2d4ddbe035b3e7"

var settings = {
    "url": url,
    "method": "GET",
    "headers": {
        "Authorization": apiKey
    }
}

$.ajax(settings).done(function (response) {

    console.log(response);
    console.log(response.total_results);


    var p = Math.floor(Math.random() * parseInt(response.photos.length)) + 1;

    console.log(p);

    console.log(response.photos[p].src.original);

    console.log(response.photos[p].url);

    $('.hero-section').css('background-image', 'url(' + response.photos[p].src.landscape + ')');

    console.log(response.photos[p].photographer);
    console.log(response.photos[p].photographer_url);

    $("#credits").text(response.photos[p].photographer);


});


// Fetch recipes from ingredients

// var apiId = "6d15138b427645f68ff32030ae3cb1cc"; 
var apiId = "b229212145ae4030923cb4146500d590";
// var apiId ="023b6d102d964dadb8821194c30016d7";

// var ingredients = "apples"; 

var recipe = "";
// var RecipeStore= JSON.parse(localStorage.getItem('recipe'));

//  2nd end point; Get Recipe Information: https://api.spoonacular.com/recipes/716429/information?includeNutrition=false

if (!recipe) {
    recipe = [];
}

$("#search").submit(function (event) {

    event.preventDefault();

    console.log("ingredients");
    var ingredients = $("#ingredients").val();
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
        }
    });
}
function searchRecipes(ingredients) {

    var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredients + "&apiKey=" + apiId;
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        getRecipe(response[0].id);

        $("#show").empty()
        for (i = 0; i < response.length; i++) {
            console.log(response[i].title)

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

            $("#show").empty()

            getRecipe(id);
        })
        // another renderResult function within the for loop 
        //  create cards/html elements to put the recipe informations. 
        // clean up each part before . 
        // appending all the results to html. 
        // getRecipe function. 
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
        $("#show").append("<h3>" + response.title + "</h3>");

        console.log(response.image);
        $("#show").append('<img src=' + response.image + ">");

        // console.log(response.extendedIngredients)
        var ingredients = $("<div>");

        ingredients.append("<p>" + "Ingredients" + "</p>");

        for (i = 0; i < response.extendedIngredients.length; i++) {

            // console.log(response.extendedIngredients[i].original)
            var ingredient = $("<p>");
            ingredient.text(response.extendedIngredients[i].original);
            ingredients.append(ingredient);
        }

        $("#show").append(ingredients)

        //  console.log(response.ingredients)
        //  go to a detail page with the recipe info         
        /*  1-title and image
            1-ingredients
            1-instructions  */
        // console.log(response.analyzedInstructions[0].steps[0].ingredients)

        /*1-title and image
        1-ingredients
        1-instructions*/

        // console.log(response.instructions)
        var instructions = $("<div>");

        instructions.append("<p>" + "Instructions" + "</p>");
        instructions.append("<p>" + response.instructions + "</p>");

        $("#show").append(instructions);


    });
}

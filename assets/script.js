var apiId = "6d15138b427645f68ff32030ae3cb1cc"; 
// var apiId ="b229212145ae4030923cb4146500d590";
// var apiId ="023b6d102d964dadb8821194c30016d7";

var ingredients = "apples"; 
var recipe ="";
// var RecipeStore= JSON.parse(localStorage.getItem('recipe'));
//  2nd end point; Get Recipe Information: https://api.spoonacular.com/recipes/716429/information?includeNutrition=false

if (!recipe){
    recipe =[]; 
}


function searchRecipes (ingredients){  

  var queryURL= "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredients + "&apiKey=" + apiId;
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
for (i=0; i<response.length; i++){
    console.log(response[i].title)

    var recipeCard='<div class="card col-3" style="width: 18rem;"><img src='+ response[i].image +  ' class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' +response[i].title  +'</h5><p class="card-text">.</p><a href="#" class="btn btn-primary viewRecipe" recipe= '+response[i].id + '>View Recipe</a></div></div>'
// ${}
// var ..
// append
// add a style to the class
  
// var cardRecipe='<div>'
// cardRecipe.addClass=""
// var img ="<img>"
// img.attr("src", respons[i).image
//     var title

    $("#show").append(recipeCard)
   // console.log(response[i].image);
    // console.log(response[i].usedIngredients[0].name);
    // console.log(response[i].missedIngredients[0].name);
  //  console.log(response[i].id);
    
  //  getRecipe(response[i].id);
}
$(".viewRecipe").on ("click", function(){
    console.log(this)
    let id = $(this).attr("recipe")

    getRecipe(id);
})
// another renderResult function within the for loop 
//  create cards/html elements to put the recipe informations. 
// clean up each part before . 
// appending all the results to html. 
// getRecipe function. 
  });
};

searchRecipes (ingredients);

function getRecipe(id){
    var queryURL="https://api.spoonacular.com/recipes/" +id + "/information?includeNutrition=false" + "&apiKey=" + apiId;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log (response);
        // console.log (response.title)
        // console.log(response.image)
        // console.log(response.sourceUrl)
         console.log(response.instructions)

         // go to a detail page or open a modal with the detail info
        // console.log(response.analyzedInstructions[0].steps[0].ingredients)
    });   
}

// only when we click we can the id. We need another function. When we click on the result. 


var apiId = "6d15138b427645f68ff32030ae3cb1cc"; 
// var apiId ="b229212145ae4030923cb4146500d590";
// var apiId ="023b6d102d964dadb8821194c30016d7";

var ingredients = "apples"; 
var recipe ="";
// var RecipeStore= JSON.parse(localStorage.getItem('recipe'));
//  2nd end poi8nt; Get Recipe Information: https://api.spoonacular.com/recipes/716429/information?includeNutrition=false


function searchRecipes (ingredients){  

  // Server Interaction
  var queryURL= "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredients + "&apiKey=" + apiId;
  console.log(queryURL)
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {
     console.log(response);   
     

     getRecipe(response[0].id);
     
    //  loop for 
    // listing the used ing
for (i=0; i<response.length; i++){
    console.log(response[i].title)
    console.log(response[i].image);
    // console.log(response[i].usedIngredients[0].name);
    // console.log(response[i].missedIngredients[0].name);
    console.log(response[i].id);
}
// another renderResult function within the for loop 
//  create cards/html elements to put the recipe informations. 
// clean up each part before . 
// appending all the results to html. 
// getRecipe function. 
  });
};

searchRecipes (ingredients);

function getRecipe(id){
    var queryURL="https://api.spoonacular.com/recipes/" +id + "/information?includeNutrition=false"+ ingredients + "&apiKey=" + apiId;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log (response);
        console.log (response.title)
        console.log(response.image)
        console.log(response.sourceUrl)
        console.log(response.instructions)
        console.log(response.analyzedInstructions[0].steps[0].ingredients)
    });
    
}

// only when we click we can the id. We need another function. When we click on the result. 


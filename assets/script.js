var apiId = "e511eb05b61dbc2e4319bdd390f1a012"; 
var ingredient = ""; 
var recipe =""



function searchRecipes (ingredient){  

  // Server Interaction
      var queryURL= `https://api.edamam.com/search?q=chicken&app_id=${e511eb05b61dbc2e4319bdd390f1a012}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
      console.log(queryURL)
      $.ajax({
          url: queryURL,
          method: "GET"
      }).then(function (response) {
         console.log(response);
  
         response(ingredient);
      });
  }
  searchRecipes (ingredient);

  

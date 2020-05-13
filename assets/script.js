var queryURL = "https://api.pexels.com/v1/search?query=ingredients&per_page=20";

apiKey = "563492ad6f91700001000001f7844e1ee34b4bf79ebd70bc8a98a19f"

// apiKey = "563492ad6f917000010000011fa50223f942403d9e2d4ddbe035b3e7"

var settings = {            
"url": queryURL,
"method": "GET",
"headers": {                
    "Authorization": apiKey
}
}

$.ajax(settings).done(function (response) {

console.log(response);
console.log(response.total_results);
           

var i = Math.floor(Math.random() * parseInt(response.photos.length)) + 1;

  console.log(i);
  
  console.log(response.photos[i].src.original);

  console.log(response.photos[i].url);            
  
  $('#background').css('background-image', 'url(' + response.photos[i].src.landscape + ')');

  console.log(response.photos[i].photographer);
  console.log(response.photos[i].photographer_url);

  $("#credits").text(response.photos[i].photographer);


});

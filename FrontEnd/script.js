$( document ).ready(function() {
    // this refers to window.document
   //console.log('Hey Its Ready!');

   var queryURL = "https://api.pexels.com/v1/search?query=ingredients&per_page=80";
        
        var settings = {            
            "url": queryURL,
            "method": "GET",
            "headers": {                
                "Authorization": "563492ad6f917000010000011fa50223f942403d9e2d4ddbe035b3e7"
            }
        }

        $.ajax(settings).done(function (response) {

            console.log(response);
            console.log(response.total_results);
            
            var page = Math.floor (Math.random() * Math.floor(response.total_results / 80));

            console.log(page);

            fetchBackground (page);
        });


        function fetchBackground (page) {

          var settings = {
            // "async": true,
            // "crossDomain": true,
            "url": queryURL + "&page=" + page,
            "method": "GET",
            "headers": {                
                "Authorization": "563492ad6f917000010000011fa50223f942403d9e2d4ddbe035b3e7"
            }
          }

          $.ajax(settings).done(function (response) {

              console.log(queryURL + "&page=" + page);

              var i = Math.floor(Math.random() * parseInt(response.photos.length)) + 1;

              console.log(i);
              
              console.log(response.photos[i].src.original);

              console.log(response.photos[i].url);            
              
              $('.hero-section').css('background-image', 'url(' + response.photos[i].src.landscape + ')');

              console.log(response.photos[i].photographer);
              console.log(response.photos[i].photographer_url);
              
          });

        }
        

  });
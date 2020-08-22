// //get mars Rover photos...

// var searchButton = $("#run-search");
// var rovers = ["Curiosity", "Opportunity", "Spirit"]
// //queryMarsRoverUrlByDate = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=" + nasaApiKey

// //function displayRoverInfo() {
    
//     var nasaApiKey = "h2ElaeW9thH3j4eYaQySO8pbLQCzsK6aeiYYd3sU"
//     var rover = $(this).attr("data-name");
//     queryMarsRoverUrlByDate = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=" + nasaApiKey
//     //queryMarsRoverUrlByDate = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?earth_date=2015-6-3&api_key=" + nasaApiKey

//prevent future dates being selected
// var $j=jQuery.noConflict()
// $j("#year").datepicker({
//     endDate: new Date()
// });

////////////////////////
//event listner...
$("#run-search").on("click", function(event) {
    event.preventDefault();
    //refers to the button that was clicked
    var rover = $(this).attr("data-name");
    //APIkey
    var nasaApiKey = "h2ElaeW9thH3j4eYaQySO8pbLQCzsK6aeiYYd3sU"
    //URL to search nasa

    var roverName = $("#rover").val()
    var roverCamera = $("#rovercamera").val()
    var earthDay = $("#year").val()

    //query by date
    queryMarsRoverUrlByDate = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + roverName + "/photos?earth_date=" + earthDay + "&camera=" + roverCamera + "&api_key=" + nasaApiKey
    //+manifest 
    queryMarsRoverManifest = "https://api.nasa.gov/mars-photos/api/v1/manifests/" + roverName + "?&api_key=" + nasaApiKey
    //query sol=100
    queryMarsRoverUrlBySol = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + roverName + "/photos?sol=100&camera=" + roverCamera + "&api_key=" + nasaApiKey
    console.log(queryMarsRoverUrlByDate);
    console.log("------------------------------------");
    console.log(queryMarsRoverManifest);
    console.log("------------------------------------");
    console.log(queryMarsRoverUrlBySol);

    //perform the ajax request
    $.ajax({
        url: queryMarsRoverUrlBySol,
        method: "GET"
        })
            //data returned from api
            .then(function(response) {
            console.log(response);
            
            //filter function
            function checkCamera(photo) {
                return photo.camera.name == roverCamera;
            }

            response.photos.filter(checkCamera);

            $("#photos").html("<img src=" + response.photos[0].img_src + ">");
            console.log(response.photos[0].img_src);
            var photosDiv = $("<div id='#photos'>");

            // Retrieving the URL for the image
            var imgURL = response.photos[0].img_src;

            // Creating an element to hold the image
            var image = $("<img>").attr("src", imgURL);
        
            // Appending the image
            photosDiv.append(image);

    });

});




//pulls back all photos available, but would need to limit photos displayed...
// $("#run-search").on("click", function(event) {
//     event.preventDefault();
//     //refers to the button that was clicked
//     var rover = $(this).attr("data-name");
//     //APIkey
//     var nasaApiKey = "h2ElaeW9thH3j4eYaQySO8pbLQCzsK6aeiYYd3sU";
//     var date = document.querySelector('input[type="date"]').value;
//     var rover = document.getElementById('rover').value;;
//     queryMarsRoverUrlByDate = "https://api.nasa.gov/mars-photos/api/v1/rovers/"+rover+"/photos?earth_date="+date+"&api_key=" + nasaApiKey
//     //perform the ajax request
//     $.ajax({
//         url: queryMarsRoverUrlByDate,
//         method: "GET"
//         })
//             //data returned from api
//             .then(function(response) {
//             console.log(response);
//             for (var i = 0; i < response.photos.length; i++) {
//                 var mealDiv = $("#photos");
//                 var imgURL = response.photos[i].img_src;
//                 var image = $("<img>").attr("src", imgURL);
//                 mealDiv.append(image);
//             };
//     });
// });
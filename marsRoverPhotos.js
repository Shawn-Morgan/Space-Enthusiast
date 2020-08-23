//event listner rover PHOTOS
$("#run-search").on("click", function(event) {
    event.preventDefault();
    //refers to the button that was clicked
    //var rover = $(this).attr("data-name");
    //APIkey
    var nasaApiKey = "h2ElaeW9thH3j4eYaQySO8pbLQCzsK6aeiYYd3sU"
    var roverName = $("#rover").val()
    var roverCamera = $("#rovercamera").val()
    //var earthDay = $("#year").val()

    //URL to search nasa
    //query by date
    //queryMarsRoverUrlByDate = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + roverName + "/photos?earth_date=" + earthDay + "&camera=" + roverCamera + "&api_key=" + nasaApiKey
    //+manifest 
    //queryMarsRoverManifest = "https://api.nasa.gov/mars-photos/api/v1/manifests/" + roverName + "?&api_key=" + nasaApiKey
    //query sol=100
    queryMarsRoverUrlBySol = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + roverName + "/photos?sol=100&camera=" + roverCamera + "&api_key=" + nasaApiKey
    
    //console.log(queryMarsRoverUrlByDate);
    console.log("------------------------------------");
    //console.log(queryMarsRoverManifest);
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

//event listner for mission MANIFEST
$("#run-manifest").on("click", function(event) {
    event.preventDefault();
    //refers to the button that was clicked
    var manifest = $(this).attr("data-name");
    //APIkey
    var nasaApiKey = "h2ElaeW9thH3j4eYaQySO8pbLQCzsK6aeiYYd3sU"
    var roverName = $("#rovermanifest").val()

    //URL to search nasa
    //query by date
    //queryMarsRoverUrlByDate = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + roverName + "/photos?earth_date=" + earthDay + "&camera=" + roverCamera + "&api_key=" + nasaApiKey
    //+manifest 
    queryMarsRoverManifest = "https://api.nasa.gov/mars-photos/api/v1/manifests/" + roverName + "?&api_key=" + nasaApiKey
    //query sol=100
    //queryMarsRoverUrlBySol = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + roverName + "/photos?sol=100&camera=" + roverCamera + "&api_key=" + nasaApiKey
    
    //console.log(queryMarsRoverUrlByDate);
    console.log("------------------------------------");
    console.log(queryMarsRoverManifest);
    console.log("------------------------------------");
    //console.log(queryMarsRoverUrlBySol);

    //perform the ajax request
    $.ajax({
        url: queryMarsRoverManifest,
        method: "GET"
        })
            //data returned from api
            .then(function(response) {
            console.log(response);

            //transfer content to HTML
            $(".name").text("Rover Name: " + response.photo_manifest.name);
            $(".status").text("Rover Status: " + response.photo_manifest.status);
            $(".launch_date").text("Rover Launch Date: " + response.photo_manifest.launch_date);
            $(".landing_date").text("Rover Landing Date: " + response.photo_manifest.landing_date);
            $(".max_date").text("Interesting Fact: the most recent Earth Date from which photos exist was: " + response.photo_manifest.max_date);

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
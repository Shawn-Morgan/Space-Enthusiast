


//Page Load ISS Location 
$(document).ready(function(){
  return getCurrentLocation(); 

}); 

// On Click Update Current Coordinates
$("#issCurrent").on("click", function() {
return getCurrentLocation();

});




// Current Location of ISS
function getCurrentLocation(){

    var queryCurrent = "https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-now.json"
    var queryAstronaut = "http://api.open-notify.org/astros.json"
    
    
    

    //Coord Current Location
    $.ajax({
      url: queryCurrent,
      method: "GET"
    }).then(function(data) {
      
        var Current = results(data)
        $("#currentLocation").html(Current);



        //Astronaut Onboard Info
        $.ajax({
          url: queryAstronaut,
          method: "GET"
        }).then(function(astro) {
          
          var astronaut = astroResults(astro)
          $("#astronaut").html(astronaut);
               });

   });
          

        
          function results(data){
                return "<h4> Lat: " + data['iss_position']['latitude'] + ", Long: " +  data['iss_position']['longitude'] +"</h4>" 
                     }
               
                      setTimeout(getCurrentLocation,5000)

            
          function astroResults(astro){
            return  "<h3> Astronauts Onboard:"+"</h3>" + "<a href = 'https://www.nasa.gov/astronauts/biographies/christopher-j-cassidy/biography'>" + astro.people[0].name + "</a>" + ", " + "<a href = 'https://en.wikipedia.org/wiki/Anatoli_Ivanishin'>" + astro.people[1].name + "</a> " + ", " + "<a href = 'https://en.wikipedia.org/wiki/Ivan_Vagner'>" + astro.people[2].name + "</a>"
                    
                  }
    
  }





// ISS Future Position - Need Geolocation

$("#issPass").on("click", function() {
return getFutureLocation();

});


function getFutureLocation(){

    var city = $("#passCity").val();

var queryCity = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=6b4758acdbe25a3b3e8b792b8978ee96" 

 // Used to get city coordinates
   $.ajax({
     url: queryCity, 
     method: "GET",
   }).then(function(city){
    

  var queryFuture = "https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=" + city.coord.lat + "&lon=" + city.coord.lon

  $.ajax({
    url: queryFuture,
    method: "GET"
  }).then(function(Future) {
    
    var future = futureResults(Future); 
    $("#passLocation").html(future);
     });

      
      }); 

          
      function futureResults(Future){
          var utcSeconds = Future.response[0].risetime
          var flyOver = new Date(utcSeconds*1000);
          return "<h2> DateTime: " + flyOver + "</h2>" 
              }



}


//Page Load ISS Location 
$(document).ready(function(){
return getCurrentVelocity(); 

}); 

function getCurrentVelocity(){

var queryVeloctiy = "https://api.wheretheiss.at/v1/satellites/25544"

$.ajax({
 url: queryVeloctiy,
 method: "GET"
}).then(function(velocity) {

 var currentVelocity = currVelocity(velocity); 
   $("#velocity").html(currentVelocity);
  });

  function currVelocity(velocity){
    return "<p> Alt: " + velocity.altitude + " km " + "<br> " + " Vel: " + velocity.velocity + " km/h "+ "<br>" + " Visibility: " + velocity.visibility + "</P>"

}

}
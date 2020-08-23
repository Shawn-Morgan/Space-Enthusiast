

//Page Load ISS Location 
$(document).ready(function(){
    return getCurrentMarsWeather(); 

}); 


// Current Location of ISS
function getCurrentMarsWeather(){

  var queryMarsCurrentWeather = "https://cors-anywhere.herokuapp.com/https://api.mars.spacexcompanion.app/v1/weather/latest"
// var queryMarsCurrentWeather = "https://cors-anywhere.herokuapp.com/https://api.mars.spacexcompanion.app/v1/weather"


//Space News API
$.ajax({
url: queryMarsCurrentWeather,
method: "GET"
}).then(function(marsCurrent) {
          console.log(marsCurrent)
  var marsCurrentWeather = weatherCurrentMars(marsCurrent)
  $("#marsCurrentWeather").html(marsCurrentWeather);

           });

  
           

  function weatherCurrentMars(marsCurrent) {

      
      return "<h2>Current Sol: " + marsCurrent.sol + "<h2>"+ "<p class='marsW'> Season: " + marsCurrent.season  + "<p class='marsW'> Avg Temp: " + marsCurrent.air.temperature.average + " C</P>" + "<p class='marsW'> Avg Pressure: " + marsCurrent.air.pressure.average + " Pa</P>" + "<p class='marsW'> Avg Wind Speed: " + marsCurrent.wind.speed.average + " m/s</P>"
      
      
      
      
    }

}




// Click to get Mars Weather from Certain Date

$("#marsUpdateWeather").on("click", function() {
  return getMarsWeather();

  });


// Current Location of ISS
function getMarsWeather(){

  var monthSelect = $("#month").val();
  var daySelect = $("#day").val();
  var yearSelect = $("#year").val();

  console.log(monthSelect)
  console.log(daySelect)
  console.log(yearSelect)





    var queryMarsWeather = "https://cors-anywhere.herokuapp.com/https://api.mars.spacexcompanion.app/v1/weather?month=" + monthSelect + "&year=2020&day=" + daySelect + "&range=day"
    
    
    //Space News API
    $.ajax({
      url: queryMarsWeather,
      method: "GET"
    }).then(function(mars) {
                console.log(mars)
        var marsWeather = weatherMars(mars)
        $("#marsWeatherSearch").html(marsWeather);

                 });

        
                 

        function weatherMars(mars) {

            
            return "<h2>Sol: " + mars[0].sol + "<h2>" + "<p>Season: " + mars[0].season + "</p>" +  "<p class='marsW'> Avg Temp: " + mars[0].air.temperature.average + " C</P>" + "<p class='marsW'> Avg Pressure: " + mars[0].air.pressure.average + " Pa</P>" + "<p class='marsW'> Avg Wind Speed: " + mars[0].wind.speed.average + " m/s</P>"
            
            
            
            
          }

}


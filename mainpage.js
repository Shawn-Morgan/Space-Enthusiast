

//Page Load ISS Location 
$(document).ready(function(){
    return getCurrentNews(); 

}); 


// Current Location of ISS
function getCurrentNews(){

    var querypicOfDay = 'https://api.nasa.gov/planetary/apod?api_key=h2ElaeW9thH3j4eYaQySO8pbLQCzsK6aeiYYd3sU'
    var queryFlightNews = "https://spaceflightnewsapi.net/api/v1/articles"
    // var querySpaceX = "https://api.spacexdata.com/v4/launches/latest"
    
    
    //Space News API
    $.ajax({
        url: querypicOfDay,
        method: "GET"
      }).then(function(pic) {
  
          var dailyPic = resultPic(pic)
          $("#dailypic").html(dailyPic);
                   
  
  
          

    //Space News API
    $.ajax({
      url: queryFlightNews,
      method: "GET"
    }).then(function(news) {

        var flightNews = resultsFlight(news)
        $("#flightNews").html(flightNews);
                 });


            });

        function resultPic(pic) {
            return "<h1 class='randompic'><img src="  + pic.url + ">" + "<embed width='800' height='400' src=" + pic.url  + "></embed>"   + "</h1>" + "<h2> Title: " + pic.title + ", "+ "Date: " + pic.date + "<h2>" + "<p>Explanation: " + "<br>"  + pic.explanation + "</p>"
                    
            }


    
}






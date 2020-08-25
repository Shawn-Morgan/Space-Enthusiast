



//Creating Map Object
var map = new L.map('mapid'),
    ft = true,
    path = [], 
    markers = new L.FeatureGroup();

map.setView([0,0], 3);
map.setMaxBounds([[-85, -180.0],[85,180.0]]);

//Create Layer Object
var leafLet_ = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

}).addTo(map);

map.addLayer(markers); 



function moveISS () {


    


    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://api.wheretheiss.at/v1/satellites/25544',
        dataType: 'json',
        success: function(data){
           
        

    var lat = data.latitude
    var lon = data.longitude
   
            console.log(lat)

    //Icon Options
        var iconOptions = {
            iconUrl: 'img/iss2.png',
            iconSize: [35, 35]
        }
    
    //Creating Custom Icon
    var customIcon = L.icon(iconOptions);


    //Create Marker Options
        var markerOptions = {
            title: "Click ISS For Live Feed",
            clickable: false,
            draggable: false,
            icon: customIcon
        }


        var currLatLng = L.latLng(lat, lon);
        path.push(currLatLng);

        var polyline = L.polyline(path, {color: 'red', weight: 2, opacity: 1, dashArray: [3,6]});
        markers.clearLayers();



       //Creating marker
       var marker = L.marker(currLatLng, markerOptions);
            marker.url = 'https://www.ustream.tv/channel/live-iss-stream'
           
            
            marker.on('click', function(){
                window.location = (this.url);
                });
            
                

        
       //Add Icon and Tracking Line to Map
        markers.addLayer(marker);
        markers.addLayer(polyline);
                    
        // Pan to in real time
        if(ft){   
            map.panTo([lat, lon]);
            ft = false;
           }
        }
        
        });


    setTimeout("moveISS()", 5000); 

}

moveISS(); 



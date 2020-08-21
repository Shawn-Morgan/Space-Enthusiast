
$(document).ready(function(){
        return moveISS(); 
    
    }); 



function moveISS () {




    
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {

        var lat = data['iss_position']['latitude'];
        var lon = data['iss_position']['longitude'];
        // console.log(lat)
        // console.log(lon)

        //Create Map Options
        var mapOptions = {
                center: [lat, lon],
                zoom: 2
        } 

        //Creating Map Object
        var map = new L.map('mapid', mapOptions);
        

        //Create Layer Object
        var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

        //Adding Layer to map
        map.addLayer(layer); 

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

           //Creating marker
           var marker = L.marker([lat, lon], markerOptions);
                marker.url = 'https://www.ustream.tv/channel/live-iss-stream'

                
                marker.on('click', function(){
                    window.location = (this.url);
                    });
                
                
           //Add Icon to Map
           marker.addTo(map);


                
        // See leaflet docs for setting up icons and map layers
        // The update to the map is done here:
             marker.setLatLng([lat, lon]);
            // isscirc.setLatLng([lat, lon]);
            map.panTo([lat, lon], animate=true);
            
            
           
    });
        setTimeout(moveISS, 5000); 
    

}






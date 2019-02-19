$(document).ready(function(){
        mapboxgl.accessToken = 'pk.eyJ1IjoibWFyeXVzMzMiLCJhIjoiY2pzNGxpbGZrMDVzOTN5cGZ0Z3BxcTBlMSJ9.28m4YEQTF9M9I0hmCf2fyg';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v9',
            center: [4.835659, 45.764043],
            zoom:10,
        });



$.ajax({
        type:"GET",
        //dataType: "JSON",
        /* url: "https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=4973fe89374e80a37465d2d1ae8a190883fa3497",*/
        url : "https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=18125dec00ffb281d822ceefb633311dc8ba4d7d",
        success: function(data){
            console.log(data);
            data.forEach(function(marker) {
                // create a DOM element for the marker
                var el = document.createElement('div');
                el.id = 'marker';

            
                var popup = new mapboxgl.Popup({ offset: 25 })
                .setText(`${marker.address} \n  ${marker.status}`);
            // el.addEventListener('click', function() {
            // window.alert(marker.properties.message);
            // });
            
            // add marker to map
            new mapboxgl.Marker(el)
                .setLngLat(marker.position)
                .setPopup(popup)
                .addTo(map);
            });

            if(data.error){
                console.log("Erreur de connexion");
            }else{
                // Afficher la map
                $("#map").show();
            }
        },
        error: function(data){
            console.error();
        }
    })
})
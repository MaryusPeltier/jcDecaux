mapboxgl.accessToken = 'pk.eyJ1IjoibWFyeXVzMzMiLCJhIjoiY2pzNGxpbGZrMDVzOTN5cGZ0Z3BxcTBlMSJ9.28m4YEQTF9M9I0hmCf2fyg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [4.8320114, 45.7578137],
    zoom: 1
});

$.ajax({
    type: "GET",
    //dataType: "JSON",
    url: "https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=746c2436efd2e5b5f11781719551f0ae0f420594",

    success: function(data){
        console.log(data);
        data.forEach(function(marker) {
            // create a DOM element for the marker
            var el = document.createElement('div');
            el.id = 'marker';

            // create the popup
            var popup = new mapboxgl.Popup({ offset: 25 })
            .setText(`${marker.address} \n  ${marker.status}`);


            // el.addEventListener('click', function() {
            //     window.alert(marker.properties.message);
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

            // Supprimer le formulaire
            $("#form").hide();
        }
    },
    error: function(data){
        console.error();

    }

})



$("#formLogin").on("submit", function(event){
    event.preventDefault();
    const serializeFormLogin = $(this).serialize();
    // Ajax request (checkUser.php)
    $.ajax({
        type: "post",
        url: `${urlAPI}/checkUser.php`,
        data: serializeFormLogin,
        success: function(data){
            console.log(data);
            data = JSON.parse(data);
            console.log(data);

            if(data.username){
                $("#formLogin").hide();
                $("#map").show();
                
                var mapDiv = $("#map");
                var canvasMap = $(".mapboxgl-canvas");
    
                mapDiv.css("width", "100%");
                canvasMap.css("width", "100%");
                map.resize();
            }

        }
    })
})
mapboxgl.accessToken = 'pk.eyJ1IjoibWFyeXVzMzMiLCJhIjoiY2pzNGxpbGZrMDVzOTN5cGZ0Z3BxcTBlMSJ9.28m4YEQTF9M9I0hmCf2fyg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [4.8320114, 45.7578137],
    zoom: 15,
});
var urlAPI = "http://localhost/projects/Talis-front/jcdecaux/api" ;

$.ajax({
    type: "GET",
    //dataType: "JSON",
    url: "https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=746c2436efd2e5b5f11781719551f0ae0f420594",

    success: function(data){
        data.forEach(function(marker) {
            // create a DOM element for the marker
            var el = document.createElement('div');
            el.id = 'marker';

            var popup = new mapboxgl.Popup(
                {
                   anchor: 'top',   // To show popup on bottom
                }
            ).setHTML(`
            <div class="container">
             <div class="row">
                 <div class="col-6">
                    <div class="imageVelo"></div>
                 </div>
                 <div class="col-6">
                     <h2>${marker.number}</h2>
                     <p>${marker.available_bikes} / ${marker.bike_stands}</p>
                 </div>
             </div>
                 <input class="reserveButton" type="submit" value="RESERVER">
            </div>
            `)
            
            // add marker to map
            new mapboxgl.Marker(el)
                .setLngLat(marker.position)
                .setPopup(popup)
                .addTo(map); 
        });
    },
    error: function(data){
        console.error();

    }

})
function formSubmitPopup(event){
    event.preventDefault();
    // AJAX request
    $.ajax({
        type: "POST",
        url: `${urlAPI}/index.php`,
        data: "test",
        success: function(data){
            console.log(data);
        },
    })
}

$( "span" ).click(function() {
    $( "#mySidenav" ).toggleClass( "moveSidenav" );
    $("#main").toggleClass("moveMain");
    $(".mapboxgl-popup").toggleClass("movePopup");
  });

$("button").click(function(){
    $("#formLogin").toggleClass("moveFormLogin");
    $("#formSignup").toggleClass("moveFormSignup");
});




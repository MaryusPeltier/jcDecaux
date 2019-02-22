mapboxgl.accessToken = 'pk.eyJ1IjoibWFyeXVzMzMiLCJhIjoiY2pzNGxpbGZrMDVzOTN5cGZ0Z3BxcTBlMSJ9.28m4YEQTF9M9I0hmCf2fyg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [4.8320114, 45.7578137],
    zoom: 12,
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
            <h2>${marker.number}</h2>
            <p>${marker.address}</p>
            <input type="submit" value="RESERVER">
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
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
    document.getElementsByClassName("mapboxgl-popup-content").style.marginLeft = "250px";
  }
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  




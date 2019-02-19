$(document).ready(function(){
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFyeXVzMzMiLCJhIjoiY2pzNGxpbGZrMDVzOTN5cGZ0Z3BxcTBlMSJ9.28m4YEQTF9M9I0hmCf2fyg';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v9',
            center: [4.835659, 45.764043],
        });

    $.ajax({
        
        type:"GET",
        url: "https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=4973fe89374e80a37465d2d1ae8a190883fa3497",
        
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
        },
        error: function(data){
            console.log("error");
        }
    })
})
$("#form").on("submit", function(event){
    event.preventDefault();
    // Récupérer pseudo du formulaire
    pseudo = $("input[name=pseudo]").val();
    
    // Récupérer password du formulaire
    password = $("input[type=password]").val();
    
    // Stocker dans un tableau les deux valeurs
    tabForm = [pseudo, password];
    //console.log(tabForm);
    
    // Stocker dans un objet les deux valeurs
    objForm = {
        "pseudo": pseudo,
        "password": password
    }
    // console.log(objForm);
    // console.log(objForm.pseudo); // Select attribut pseudo

    serializeForm = $(this).serialize();
    // console.log(serializeForm);
    
    $.ajax({
        type:"get",
        url: "script.php",
        data: serializeForm,
        success: function(data){
            console.log(data);
            data = JSON.parse(data);

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
            console.log("error");
        }
    })

})
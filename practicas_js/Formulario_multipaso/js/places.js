import { API_KEY } from "./api.js";

// Obtén el elemento head
var body = document.body || document.getElementsByTagName('body')[0];

// Crea un nuevo elemento script
var script = document.createElement('script');

// Asigna la fuente del script con la clave API
script.async = true;
script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=initAutocomplete`;


// Agrega el script al head
body.appendChild(script);

let autocomplete;
let details;

window.initAutocomplete = function() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById("input-autocomplete"),
        {
            types: ['address'],
            fields: ['formatted_address']
        });
    
        autocomplete.addListener('place_changed' , onPlaceChanged);
};


function onPlaceChanged() {
    let place = autocomplete.getPlace();

    if(!place.geometry){
        document.getElementById('input-autocomplete').placeholder = 'Calle Violeta Parra'
    } else {
        details = place.name;
        console.log(details);
    }
}




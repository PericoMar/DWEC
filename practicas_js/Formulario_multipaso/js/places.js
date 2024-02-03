
import { paises, updateInputState, validateDirection } from "./main.js";
 let pais;
const inputPais = document.getElementById("input-pais");

inputPais.addEventListener("input", () => {
    pais = inputPais.value;
    if (pais in paises) {
        // Obtén el elemento body
        var body = document.body || document.getElementsByTagName('body')[0];

        // Crea un nuevo elemento script
        var script = document.createElement('script');

        // Asigna la fuente del script con la clave API
        script.async = true;
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=initAutocomplete`;


        // Agrega el script al body
        body.appendChild(script);

        let autocomplete;
        let details;

        window.initAutocomplete = function () {
            autocomplete = new google.maps.places.Autocomplete(
                document.getElementById("input-autocomplete"),
                {
                    types: ['address'],
                    componentRestrictions: { country: paises.pais.iso },
                    fields: ['formatted_address']
                });

            autocomplete.addListener('place_changed', onPlaceChanged);
        };
        function onPlaceChanged() {
            let place = autocomplete.getPlace();

            if (!place.geometry) {
                document.getElementById('input-autocomplete').placeholder = 'Calle Violeta Parra'
            } else {
                details = place.name;
            }
        }
        
    }
    updateInputState(inputPais , pais in paises);
    validateDirection();
})











var strait_cbx = document.createElement('input');
var ui_search = document.createElement('ui');

var top_left_container = document.getElementById('top-left-container');
ui_search.id ="searchResults"
// console.log(top_left_container);


var element = document.createElement('div');
element.className = 'ol-control-panel ol-unselectable ol-control search-layer';
element.innerHTML="<b>ค้นหา</b>"
element.appendChild(strait_cbx);
element.appendChild(ui_search);
top_left_container.appendChild(element);
const data = json_RIDBENCHMARK_1
const propertiesArray = data.features.map(feature => feature.properties);
// console.log(propertiesArray);


        // Function to render search results
function renderResults(results) {
    ui_search.innerHTML = ''; // Clear previous results


            if (results.length === 0) {
                ui_search.innerHTML = '<li>No results found</li>';
                return;
            }

            results.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item["ชื่อ"]} `;
                li.className = "li_point"
                li.id = item["latitude"]+"_"+item["longitude"]+"_"+item["ชื่อ"]
                ui_search.appendChild(li);
            });
        }




strait_cbx.addEventListener('input', (event) => {


    const searchTerm = event.target.value.replace(/\s+/, "").toLowerCase(); // Get input value
    const filteredData = propertiesArray.filter(item =>
        item['ชื่อ'].replace(/\s+/, "").toLowerCase().includes(searchTerm) // Search by name (case-insensitive)
    );
    // console.log(searchTerm);
    if (searchTerm != ""){
        renderResults(filteredData); // Update the UI
    }
    else{
        ui_search.innerHTML = '';
    }




});



ui_search.addEventListener('click', (event) => {
    // Ensure the clicked element is an <li>
    if (event.target.tagName === 'LI') {
        const id = event.target.id; // Get the id attribute
        const myArray = id.split("_");
        lat = myArray[0];
        lon = myArray[1];
        if (lat){
            zoomToPoint(lat,lon);
            ui_search.innerHTML = '';
            strait_cbx.value = myArray[2];
    
        }

        
    }
});

function zoomToPoint(lat,lon) {

    const view = map.getView();
    const coordinates = ol.proj.fromLonLat([lon, lat]); // Convert to map projection
    view.animate({
        center: coordinates,
        zoom: 14, // Target zoom level
        duration: 750, // Animation duration in milliseconds
    });
}


/**
 * This is a container element which holds input elements which are controls for the map
 * You can add as many as you want depending upon use.
 * The element is a div which would act like a panel to add controls on map like toggling visibility of the layers
 */
// var element = document.createElement('div');
// element.className = 'ol-control-panel ol-unselectable ol-control';
// element.innerHTML="<b>Straits</b>"
// element.appendChild(strait_cbx);

// /*A custom control which has container holding input elements etc*/
// var controlPanel = new ol.control.Control({
//     element: element,
//     positioning: 'top-left-container',
// });
// map.addControl(controlPanel);
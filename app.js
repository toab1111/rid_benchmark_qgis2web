
var radio_check = document.createElement('div');
var strait_cbx = document.createElement('input');
var ui_search = document.createElement('ui');
var count = document.createElement('div');

var top_left_container = document.getElementById('top-left-container');
var radio_control = "name_bm"
ui_search.id ="searchResults"
// console.log(top_left_container);

radio_check.innerHTML='<input type="radio" id="name_bm" name="radio_check" value="name_bm" checked /><label for="name_bm">ชื่อ</label> <input type="radio" id="changwat" name="radio_check" value="changwat"  /><label for="changwat">จังหวัด</label><input type="radio" id="amphoe" name="radio_check" value="amphoe"  /><label for="amphoe">อำเภอ</label> '
var element = document.createElement('div');
element.className = 'ol-control-panel ol-unselectable ol-control search-layer';
element.innerHTML="<b>ค้นหา</b>"
element.appendChild(count);
element.appendChild(radio_check);
element.appendChild(strait_cbx);
element.appendChild(ui_search);
top_left_container.appendChild(element);
const data = json_RIDBENCHMARK_1
const propertiesArray = data.features.map(feature => feature.properties);
// console.log(propertiesArray);


        // Function to render search results
function renderResults(results) {
    ui_search.innerHTML = ''; // Clear previous results
    count.innerHTML="<b> ค้นพบ "+results.length+" รายการ</b>";
    if (results.length === 0) {
                ui_search.innerHTML = '<li>No results found</li>';
                return;
            }

            results.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item["ชื่อ"]} `+"|"+`${item["จังหวัด"]} `;
                li.className = "li_point"
                li.id = item["latitude"]+"_"+item["longitude"]+"_"+item["ชื่อ"]
                ui_search.appendChild(li);
            });
        }
        // Function to render search results
function renderResults_amphoe(results) {
            ui_search.innerHTML = ''; // Clear previous results
            count.innerHTML="<b> ค้นพบ "+results.length+" รายการ</b>";
                    if (results.length === 0) {
                        ui_search.innerHTML = '<li>No results found</li>';
                        return;
                    }
        
                    results.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = `${item["ชื่อ"]} `+"|"+`${item["จังหวัด"]} `+"|"+`${item["อำเภอ"]} `;
                        li.className = "li_point"
                        li.id = item["latitude"]+"_"+item["longitude"]+"_"+item["ชื่อ"]
                        ui_search.appendChild(li);
                    });
                }
        

strait_cbx.className = 'strait_cbx';
strait_cbx.addEventListener('input', (event) => {
    if (radio_control == "name_bm") {

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
            count.innerHTML="";

        }
        
    }
    else if (radio_control == "changwat") {
        
        const searchTerm = event.target.value.replace(/\s+/, "").toLowerCase(); // Get input value
        const filteredData = propertiesArray.filter(item =>
            item['จังหวัด'].replace(/\s+/, "").toLowerCase().includes(searchTerm) // Search by name (case-insensitive)
        );
        // console.log(searchTerm);
        if (searchTerm != ""){
            renderResults(filteredData); // Update the UI
        }
        else{
            ui_search.innerHTML = '';
            count.innerHTML="";

        }
    }
    else{

        const searchTerm = event.target.value; // Get input value
        if (searchTerm.length > 3) {
            const filteredData = propertiesArray.filter( item =>
                item['อำเภอ'].replace(/\s+/, "").toLowerCase().includes(searchTerm) )
            if (searchTerm != ""){
                renderResults_amphoe(filteredData); // Update the UI
            }
            else{
                ui_search.innerHTML = '';
                count.innerHTML="";
            count.innerHTML="";

            }
        }



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


radio_check.addEventListener('change', (event) => {
    const selectedValue = document.querySelector('input[name="radio_check"]:checked').value;
    radio_control = selectedValue
    console.log(selectedValue);
    

    
})

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


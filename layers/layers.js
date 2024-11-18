var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RIDBENCHMARK_1 = new ol.format.GeoJSON();
var features_RIDBENCHMARK_1 = format_RIDBENCHMARK_1.readFeatures(json_RIDBENCHMARK_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RIDBENCHMARK_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIDBENCHMARK_1.addFeatures(features_RIDBENCHMARK_1);
var lyr_RIDBENCHMARK_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RIDBENCHMARK_1,
maxResolution:84.0133984567859,
 
                style: style_RIDBENCHMARK_1,
                popuplayertitle: "RID BENCHMARK",
                interactive: true,
    title: 'RID BENCHMARK<br />\
    <img src="styles/legend/RIDBENCHMARK_1_0.png" /> BM<br />\
    <img src="styles/legend/RIDBENCHMARK_1_1.png" /> GNSS<br />\
    <img src="styles/legend/RIDBENCHMARK_1_2.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_RIDBENCHMARK_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RIDBENCHMARK_1];
lyr_RIDBENCHMARK_1.set('fieldAliases', {'ประเภท': 'ประเภท', 'ชื่อ': 'ชื่อ', 'จังหวัด': 'จังหวัด', 'อำเภอ': 'อำเภอ', 'ตำบล': 'ตำบล', 'ปี': 'ปี', 'Northing': 'Northing', 'Easting': 'Easting', 'zone': 'zone', 'latitude': 'latitude', 'longitude': 'longitude', 'ความสูง รทก(เมตร)': 'ความสูง รทก(เมตร)', 'Description': 'Description', 'Google map Link': 'Google map Link', });
lyr_RIDBENCHMARK_1.set('fieldImages', {'ประเภท': 'TextEdit', 'ชื่อ': 'TextEdit', 'จังหวัด': 'TextEdit', 'อำเภอ': 'TextEdit', 'ตำบล': 'TextEdit', 'ปี': 'Range', 'Northing': 'TextEdit', 'Easting': 'TextEdit', 'zone': 'Range', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'ความสูง รทก(เมตร)': 'TextEdit', 'Description': 'TextEdit', 'Google map Link': 'TextEdit', });
lyr_RIDBENCHMARK_1.set('fieldLabels', {'ประเภท': 'inline label - always visible', 'ชื่อ': 'inline label - always visible', 'จังหวัด': 'inline label - always visible', 'อำเภอ': 'inline label - always visible', 'ตำบล': 'inline label - always visible', 'ปี': 'inline label - always visible', 'Northing': 'inline label - always visible', 'Easting': 'inline label - always visible', 'zone': 'inline label - always visible', 'latitude': 'inline label - always visible', 'longitude': 'inline label - always visible', 'ความสูง รทก(เมตร)': 'inline label - always visible', 'Description': 'inline label - always visible', 'Google map Link': 'inline label - always visible', });
lyr_RIDBENCHMARK_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
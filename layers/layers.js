var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Export_Output_1 = new ol.format.GeoJSON();
var features_Export_Output_1 = format_Export_Output_1.readFeatures(json_Export_Output_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_1.addFeatures(features_Export_Output_1);
var lyr_Export_Output_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Export_Output_1, 
                style: style_Export_Output_1,
                interactive: true,
                title: '<img src="styles/legend/Export_Output_1.png" /> Export_Output'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Export_Output_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Export_Output_1];
lyr_Export_Output_1.set('fieldAliases', {'DAS': 'DAS', 'COUNT': 'COUNT', 'LUAS_HA': 'LUAS_HA', });
lyr_Export_Output_1.set('fieldImages', {'DAS': '', 'COUNT': '', 'LUAS_HA': '', });
lyr_Export_Output_1.set('fieldLabels', {'DAS': 'no label', 'COUNT': 'no label', 'LUAS_HA': 'no label', });
lyr_Export_Output_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
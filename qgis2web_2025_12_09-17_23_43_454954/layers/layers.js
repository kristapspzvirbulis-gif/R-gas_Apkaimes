var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_apkaimes_1 = new ol.format.GeoJSON();
var features_apkaimes_1 = format_apkaimes_1.readFeatures(json_apkaimes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_apkaimes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_apkaimes_1.addFeatures(features_apkaimes_1);
var lyr_apkaimes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_apkaimes_1, 
                style: style_apkaimes_1,
                popuplayertitle: 'apkaimes',
                interactive: true,
                title: '<img src="styles/legend/apkaimes_1.png" /> apkaimes'
            });
var format_ielas_2 = new ol.format.GeoJSON();
var features_ielas_2 = format_ielas_2.readFeatures(json_ielas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ielas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ielas_2.addFeatures(features_ielas_2);
var lyr_ielas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ielas_2, 
                style: style_ielas_2,
                popuplayertitle: 'ielas',
                interactive: true,
                title: '<img src="styles/legend/ielas_2.png" /> ielas'
            });
var format_sabiedriska_transporta_pieturvietu_nojumes_izsoles_3 = new ol.format.GeoJSON();
var features_sabiedriska_transporta_pieturvietu_nojumes_izsoles_3 = format_sabiedriska_transporta_pieturvietu_nojumes_izsoles_3.readFeatures(json_sabiedriska_transporta_pieturvietu_nojumes_izsoles_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sabiedriska_transporta_pieturvietu_nojumes_izsoles_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sabiedriska_transporta_pieturvietu_nojumes_izsoles_3.addFeatures(features_sabiedriska_transporta_pieturvietu_nojumes_izsoles_3);
var lyr_sabiedriska_transporta_pieturvietu_nojumes_izsoles_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sabiedriska_transporta_pieturvietu_nojumes_izsoles_3, 
                style: style_sabiedriska_transporta_pieturvietu_nojumes_izsoles_3,
                popuplayertitle: 'sabiedriska_transporta_pieturvietu_nojumes_izsoles',
                interactive: true,
                title: '<img src="styles/legend/sabiedriska_transporta_pieturvietu_nojumes_izsoles_3.png" /> sabiedriska_transporta_pieturvietu_nojumes_izsoles'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_apkaimes_1.setVisible(true);lyr_ielas_2.setVisible(true);lyr_sabiedriska_transporta_pieturvietu_nojumes_izsoles_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_apkaimes_1,lyr_ielas_2,lyr_sabiedriska_transporta_pieturvietu_nojumes_izsoles_3];
lyr_apkaimes_1.set('fieldAliases', {'apkaime': 'apkaime', 'saite': 'saite', });
lyr_ielas_2.set('fieldAliases', {'nosaukums': 'nosaukums', 'lemuma_dat': 'lemuma_dat', 'lemuma_nr': 'lemuma_nr', 'lemuma_nos': 'lemuma_nos', 'darbiba': 'darbiba', 'piezimes': 'piezimes', });
lyr_sabiedriska_transporta_pieturvietu_nojumes_izsoles_3.set('fieldAliases', {'gid': 'gid', 'pikas_id': 'pikas_id', 'pietura': 'pietura', 'iela': 'iela', 'virziens': 'virziens', 'kategorija': 'kategorija', 'nomaszona': 'nomaszona', 'izsolesnr': 'izsolesnr', 'planmodel': 'planmodel', 'plannojsk': 'plannojsk', 'planreklsk': 'planreklsk', 'modifnew': 'modifnew', 'fotonew_ht': 'fotonew_ht', });
lyr_apkaimes_1.set('fieldImages', {'apkaime': '', 'saite': '', });
lyr_ielas_2.set('fieldImages', {'nosaukums': 'TextEdit', 'lemuma_dat': 'TextEdit', 'lemuma_nr': 'TextEdit', 'lemuma_nos': 'TextEdit', 'darbiba': 'TextEdit', 'piezimes': 'TextEdit', });
lyr_sabiedriska_transporta_pieturvietu_nojumes_izsoles_3.set('fieldImages', {'gid': '', 'pikas_id': '', 'pietura': '', 'iela': '', 'virziens': '', 'kategorija': '', 'nomaszona': '', 'izsolesnr': '', 'planmodel': '', 'plannojsk': '', 'planreklsk': '', 'modifnew': '', 'fotonew_ht': '', });
lyr_apkaimes_1.set('fieldLabels', {'apkaime': 'no label', 'saite': 'no label', });
lyr_ielas_2.set('fieldLabels', {'nosaukums': 'no label', 'lemuma_dat': 'no label', 'lemuma_nr': 'no label', 'lemuma_nos': 'no label', 'darbiba': 'no label', 'piezimes': 'no label', });
lyr_sabiedriska_transporta_pieturvietu_nojumes_izsoles_3.set('fieldLabels', {'gid': 'no label', 'pikas_id': 'no label', 'pietura': 'no label', 'iela': 'no label', 'virziens': 'no label', 'kategorija': 'no label', 'nomaszona': 'no label', 'izsolesnr': 'no label', 'planmodel': 'no label', 'plannojsk': 'no label', 'planreklsk': 'no label', 'modifnew': 'no label', 'fotonew_ht': 'no label', });
lyr_sabiedriska_transporta_pieturvietu_nojumes_izsoles_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_lotes_1 = new ol.format.GeoJSON();
var features_lotes_1 = format_lotes_1.readFeatures(json_lotes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lotes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lotes_1.addFeatures(features_lotes_1);
var lyr_lotes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lotes_1,
maxResolution:0.4990395868333081,
 
                style: style_lotes_1,
                popuplayertitle: "lotes",
                interactive: true,
                title: '<img src="styles/legend/lotes_1.png" /> lotes'
            });
var format_PUNTA_NEGRA_LIMA_150127_Manzanas_Poblacion_JuanPablo_SuyoPomalia_geogpsperu_931381206_2 = new ol.format.GeoJSON();
var features_PUNTA_NEGRA_LIMA_150127_Manzanas_Poblacion_JuanPablo_SuyoPomalia_geogpsperu_931381206_2 = format_PUNTA_NEGRA_LIMA_150127_Manzanas_Poblacion_JuanPablo_SuyoPomalia_geogpsperu_931381206_2.readFeatures(json_PUNTA_NEGRA_LIMA_150127_Manzanas_Poblacion_JuanPablo_SuyoPomalia_geogpsperu_931381206_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNTA_NEGRA_LIMA_150127_Manzanas_Poblacion_JuanPablo_SuyoPomalia_geogpsperu_931381206_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTA_NEGRA_LIMA_150127_Manzanas_Poblacion_JuanPablo_SuyoPomalia_geogpsperu_931381206_2.addFeatures(features_PUNTA_NEGRA_LIMA_150127_Manzanas_Poblacion_JuanPablo_SuyoPomalia_geogpsperu_931381206_2);
var lyr_PUNTA_NEGRA_LIMA_150127_Manzanas_Poblacion_JuanPablo_SuyoPomalia_geogpsperu_931381206_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUNTA_NEGRA_LIMA_150127_Manzanas_Poblacion_JuanPablo_SuyoPomalia_geogpsperu_931381206_2,
maxResolution:1.88470057204723,
 minResolution:0.47607592458845344,

                style: style_PUNTA_NEGRA_LIMA_150127_Manzanas_Poblacion_JuanPablo_SuyoPomalia_geogpsperu_931381206_2,
                popuplayertitle: "PUNTA_NEGRA_LIMA_150127_Manzanas_Poblacion_JuanPablo_SuyoPomalia_geogpsperu_931381206",
                interactive: true,
                title: '<img src="styles/legend/PUNTA_NEGRA_LIMA_150127_Manzanas_Poblacion_JuanPablo_SuyoPomalia_geogpsperu_931381206_2.png" /> PUNTA_NEGRA_LIMA_150127_Manzanas_Poblacion_JuanPablo_SuyoPomalia_geogpsperu_931381206'
            });
var format_mznombres_3 = new ol.format.GeoJSON();
var features_mznombres_3 = format_mznombres_3.readFeatures(json_mznombres_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mznombres_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mznombres_3.addFeatures(features_mznombres_3);
var lyr_mznombres_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mznombres_3,
maxResolution:1.88470057204723,
 minResolution:0.4710351206810463,

                style: style_mznombres_3,
                popuplayertitle: "mz nombres",
                interactive: true,
                title: 'mz nombres'
            });
var format_nomlotes_4 = new ol.format.GeoJSON();
var features_nomlotes_4 = format_nomlotes_4.readFeatures(json_nomlotes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nomlotes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nomlotes_4.addFeatures(features_nomlotes_4);
var lyr_nomlotes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nomlotes_4,
maxResolution:0.23803796229422672,
 
                style: style_nomlotes_4,
                popuplayertitle: "nom lotes",
                interactive: true,
                title: 'nom lotes'
            });
var format_SECTORPUNTO_5 = new ol.format.GeoJSON();
var features_SECTORPUNTO_5 = format_SECTORPUNTO_5.readFeatures(json_SECTORPUNTO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SECTORPUNTO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SECTORPUNTO_5.addFeatures(features_SECTORPUNTO_5);
var lyr_SECTORPUNTO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SECTORPUNTO_5,
maxResolution:7.539082332850444,
 minResolution:1.9127050381994921,

                style: style_SECTORPUNTO_5,
                popuplayertitle: "SECTOR PUNTO",
                interactive: true,
                title: '<img src="styles/legend/SECTORPUNTO_5.png" /> SECTOR PUNTO'
            });
var format_SECTORESCORRE_6 = new ol.format.GeoJSON();
var features_SECTORESCORRE_6 = format_SECTORESCORRE_6.readFeatures(json_SECTORESCORRE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SECTORESCORRE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SECTORESCORRE_6.addFeatures(features_SECTORESCORRE_6);
var lyr_SECTORESCORRE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SECTORESCORRE_6,
maxResolution:28.00446615226196,
 
                style: style_SECTORESCORRE_6,
                popuplayertitle: "SECTORES CORRE",
                interactive: true,
                title: '<img src="styles/legend/SECTORESCORRE_6.png" /> SECTORES CORRE'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_lotes_1.setVisible(true);lyr_PUNTA_NEGRA_LIMA_150127_Manzanas_Poblacion_JuanPablo_SuyoPomalia_geogpsperu_931381206_2.setVisible(true);lyr_mznombres_3.setVisible(true);lyr_nomlotes_4.setVisible(true);lyr_SECTORPUNTO_5.setVisible(true);lyr_SECTORESCORRE_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_lotes_1,lyr_PUNTA_NEGRA_LIMA_150127_Manzanas_Poblacion_JuanPablo_SuyoPomalia_geogpsperu_931381206_2,lyr_mznombres_3,lyr_nomlotes_4,lyr_SECTORPUNTO_5,lyr_SECTORESCORRE_6];
lyr_lotes_1.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', 'path': 'path', });
lyr_PUNTA_NEGRA_LIMA_150127_Manzanas_Poblacion_JuanPablo_SuyoPomalia_geogpsperu_931381206_2.set('fieldAliases', {'Mz': 'Mz', 'UBIGEO': 'UBIGEO', 'AREA': 'AREA', 'CODCCPP': 'CODCCPP', 'ZONA': 'ZONA', 'MANZANA_ID': 'MANZANA_ID', 'MANZANA_A': 'MANZANA_A', 'T_TOTAL': 'T_TOTAL', 'T_HOMBRES': 'T_HOMBRES', 'T_MUJERES': 'T_MUJERES', 'LLAVE_MZS': 'LLAVE_MZS', 'contacto': 'contacto', 'descargar': 'descargar', 'whatsapp': 'whatsapp', 'NOMBDEP': 'NOMBDEP', 'NOMBPROV': 'NOMBPROV', 'IDPROV': 'IDPROV', 'ARCHIVO': 'ARCHIVO', 'Nombre': 'Nombre', 'Apellido': 'Apellido', 'CCDD': 'CCDD', 'CCPP': 'CCPP', 'CCDI': 'CCDI', 'NOMBDIST': 'NOMBDIST', 'CAPITAL': 'CAPITAL', 'CODIGO': 'CODIGO', 'CNT_CCPP': 'CNT_CCPP', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_mznombres_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', 'path': 'path', });
lyr_nomlotes_4.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', 'path': 'path', });
lyr_SECTORPUNTO_5.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_SECTORESCORRE_6.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_lotes_1.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'ogr_style': 'TextEdit', 'font': 'TextEdit', 'angle': 'TextEdit', 'size': 'TextEdit', 'size_u': 'TextEdit', 'anchor': 'TextEdit', 'color': 'TextEdit', 'underline': 'Range', 'plaintext': 'TextEdit', 'fcolor': 'TextEdit', 'flnum': 'Range', 'bold': 'Range', 'italic': 'Range', 'dx': 'TextEdit', 'dx_u': 'TextEdit', 'dy': 'TextEdit', 'dy_u': 'TextEdit', 'path': 'TextEdit', });
lyr_PUNTA_NEGRA_LIMA_150127_Manzanas_Poblacion_JuanPablo_SuyoPomalia_geogpsperu_931381206_2.set('fieldImages', {'Mz': 'TextEdit', 'UBIGEO': 'TextEdit', 'AREA': 'TextEdit', 'CODCCPP': 'TextEdit', 'ZONA': 'TextEdit', 'MANZANA_ID': 'TextEdit', 'MANZANA_A': 'TextEdit', 'T_TOTAL': 'TextEdit', 'T_HOMBRES': 'TextEdit', 'T_MUJERES': 'TextEdit', 'LLAVE_MZS': 'TextEdit', 'contacto': 'TextEdit', 'descargar': 'TextEdit', 'whatsapp': 'TextEdit', 'NOMBDEP': 'TextEdit', 'NOMBPROV': 'TextEdit', 'IDPROV': 'TextEdit', 'ARCHIVO': 'TextEdit', 'Nombre': 'TextEdit', 'Apellido': 'TextEdit', 'CCDD': 'TextEdit', 'CCPP': 'TextEdit', 'CCDI': 'TextEdit', 'NOMBDIST': 'TextEdit', 'CAPITAL': 'TextEdit', 'CODIGO': 'TextEdit', 'CNT_CCPP': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_mznombres_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'ogr_style': 'TextEdit', 'font': 'TextEdit', 'angle': 'TextEdit', 'size': 'TextEdit', 'size_u': 'TextEdit', 'anchor': 'TextEdit', 'color': 'TextEdit', 'underline': 'Range', 'plaintext': 'TextEdit', 'fcolor': 'TextEdit', 'flnum': 'Range', 'bold': 'Range', 'italic': 'Range', 'dx': 'TextEdit', 'dx_u': 'TextEdit', 'dy': 'TextEdit', 'dy_u': 'TextEdit', 'path': 'TextEdit', });
lyr_nomlotes_4.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'ogr_style': 'TextEdit', 'font': 'TextEdit', 'angle': 'TextEdit', 'size': 'TextEdit', 'size_u': 'TextEdit', 'anchor': 'TextEdit', 'color': 'TextEdit', 'underline': 'Range', 'plaintext': 'TextEdit', 'fcolor': 'TextEdit', 'flnum': 'Range', 'bold': 'Range', 'italic': 'Range', 'dx': 'TextEdit', 'dx_u': 'TextEdit', 'dy': 'TextEdit', 'dy_u': 'TextEdit', 'path': 'TextEdit', });
lyr_SECTORPUNTO_5.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'ogr_style': 'TextEdit', 'font': 'TextEdit', 'angle': 'TextEdit', 'size': 'TextEdit', 'size_u': 'TextEdit', 'anchor': 'TextEdit', 'color': 'TextEdit', 'underline': 'Range', 'plaintext': 'TextEdit', 'fcolor': 'TextEdit', 'flnum': 'Range', 'bold': 'Range', 'italic': 'Range', 'dx': 'TextEdit', 'dx_u': 'TextEdit', 'dy': 'TextEdit', 'dy_u': 'TextEdit', });
lyr_SECTORESCORRE_6.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'ogr_style': 'TextEdit', 'font': 'TextEdit', 'angle': 'TextEdit', 'size': 'TextEdit', 'size_u': 'TextEdit', 'anchor': 'TextEdit', 'color': 'TextEdit', 'underline': 'Range', 'plaintext': 'TextEdit', 'fcolor': 'TextEdit', 'flnum': 'Range', 'bold': 'Range', 'italic': 'Range', 'dx': 'TextEdit', 'dx_u': 'TextEdit', 'dy': 'TextEdit', 'dy_u': 'TextEdit', });
lyr_lotes_1.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', 'path': 'no label', });
lyr_PUNTA_NEGRA_LIMA_150127_Manzanas_Poblacion_JuanPablo_SuyoPomalia_geogpsperu_931381206_2.set('fieldLabels', {'Mz': 'no label', 'UBIGEO': 'no label', 'AREA': 'no label', 'CODCCPP': 'no label', 'ZONA': 'no label', 'MANZANA_ID': 'no label', 'MANZANA_A': 'no label', 'T_TOTAL': 'no label', 'T_HOMBRES': 'no label', 'T_MUJERES': 'no label', 'LLAVE_MZS': 'no label', 'contacto': 'no label', 'descargar': 'no label', 'whatsapp': 'no label', 'NOMBDEP': 'no label', 'NOMBPROV': 'no label', 'IDPROV': 'no label', 'ARCHIVO': 'no label', 'Nombre': 'no label', 'Apellido': 'no label', 'CCDD': 'no label', 'CCPP': 'no label', 'CCDI': 'no label', 'NOMBDIST': 'no label', 'CAPITAL': 'no label', 'CODIGO': 'no label', 'CNT_CCPP': 'no label', 'DESCRIPCIO': 'no label', });
lyr_mznombres_3.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', 'path': 'no label', });
lyr_nomlotes_4.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', 'path': 'no label', });
lyr_SECTORPUNTO_5.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_SECTORESCORRE_6.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_SECTORESCORRE_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
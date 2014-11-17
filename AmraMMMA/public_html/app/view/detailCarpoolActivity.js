Ext.define("Lan.view.detailCarpoolActivity", {
    extend: 'Ext.form.Panel',
    xtype: 'detailcarpoolactivity',
    config: {
          layout: {
            type: 'vbox',
            align : 'stretch',
            pack  : 'start',
            },
          items: [
            {html: 'Nom de l\'organisateur : <br/>\n\
                    Lieu de rendez-vous : <br/>\n\
                    Lieu de départ : <br/>\n\
                    Lieu d\'arrivé : <br/>\n\
                    Prix : <br/>\n\
                    Heure du début de l\'activité : <br/>\n\
                    Heure de fin de l\'activité : <br/>\n\
                    Nombre maximal de personnes<br/>\n\
                    Nombre actuel de personnes<br/>\n\
                    ', flex:1},
            
            {html:'Description de l\évènement<br/><br/><br/>', height:150},
            
            {html:'Image de l\'évènement', flex:2}
          ]
        }
});
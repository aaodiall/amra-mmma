Ext.define("Lan.view.detailCarpoolActivity", {
    extend: 'Ext.form.Panel',
    xtype: 'detailcarpoolactivity',
    config: {
        title: 'Titre de l\'activité',
        id: 'idCarpoolDetail',
          layout: {
            type: 'vbox',
            align : 'stretch',
            pack  : 'start',
            animation: {
                type: 'slide',
                direction: 'right'
            }
            },

        items: [
         {
            maxDrag: 400,
            xtype: 'toolbar',
            docked: 'top',
            title: 'Détail de l\'activité',
            items:[{
                xtype: 'button',
                ui: 'round', 
                action: 'backToMyActivity',
                text: 'Revenir aux activités'
            }]
          },
            
            {
                html:'<b> Nom de l\'organisateur : </b>'
            },
            {
                xtype:'label',
                itemId:'iduser'
            },
            
            
            
            {
                html:'<br><b> Heure de debut de l\'activité : </b>'
            },
            {
                xtype:'label',
                itemId:'starttime'
            },
            
            
            
            {
                html:'<br><b> Heure de fin de l\'activité : </b>'
            },
            {
                xtype:'label',
                itemId:'stoptime'
            },
            
            
            
            {
                html:'<br><b> Lieu de l\'activité : </b>'
            },
            {
                xtype:'label',
                itemId:'location'
            },
            
            
            
            {
                html:'<br><b> Nombre max de personnes : </b>'
            },
            {
                xtype:'label',
                itemId:'maxnumber'
            },
            
            
            
            {
                html:'<br><b> Description de l\'activité : </b>'
            },
            {
                xtype:'label',
                itemId:'description'
            },
            
             {
                xtype: 'button',
                text: 'Rejoindre l\'activité',
                action: 'joinActivity',
                ui: 'action',
                height:60,
                width:300,
                margin: '50 10 0 100', //Haut, Bas, Droite, Gauche
                align: 'center'
            }
           
          ]
        },
        
         initialize: function(){
           this.callParent();

           //  record is visible
           console.log("ICI : "+this.config.record);
         }
});
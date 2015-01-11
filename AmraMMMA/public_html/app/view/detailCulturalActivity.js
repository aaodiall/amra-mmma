Ext.define("Lan.view.detailCulturalActivity", {
    extend: 'Ext.form.Panel',
    xtype: 'detailculturalactivity',
    config: {
        title: 'Titre de l\'activité',
        id: 'idCulturalDetail',
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
                text: '<'
            }]
          },
            /* {
                html:'<b> Nom de l\'organisateur : </b>'
            },*/
            {
                xtype:'textfield',
                label:'organisateur',
                itemId:'iduser',
                readOnly: true
                
            },
            {
                xtype: "spacer",
                height:2
            },
            
            
           /* {
                html:'<br><b> Heure de debut de l\'activité : </b>'
            },*/
            {
                xtype:'textfield',
                label:'Debut',
                itemId:'starttime',
                readOnly: true
                
            },
            
            {
                xtype: "spacer",
                height:2
            },
            
            
           /* {
                html:'<br><b> Heure de fin de l\'activité : </b>'
            },*/
            {
                xtype:'textfield',
                label:'Fin',
                itemId:'stoptime',
                readOnly: true
            },
            
            {
                xtype: "spacer",
                height:2
            },
            
            
           /* {
                html:'<br><b> Lieu de l\'activité : </b>'
            },*/
            {
                xtype:'textfield',
                label:'Lieu',
                itemId:'location',
                readOnly: true
            },
            
            {
                xtype: "spacer",
                height:2
            },
            
            
            /*{
                html:'<br><b> Nombre max de personnes : </b>'
            },*/
            {
               xtype:'textfield',
                label:'Places',
                itemId:'maxnumber',
                readOnly: true
            },
            
            {
                xtype: "spacer",
                height:2
            },
            
            
           /* {
                html:'<br><b> Description de l\'activité : </b>'
            },*/
            {
                xtype:'textfield',
                label:'Description',
                itemId:'description',
                readOnly: true
            },
            {
                xtype: "spacer",
                height:2
            },
            
             {
                 xtype: 'button',
                id:'culturalbtnjoin',
                text: 'Joindre l\'activité',
                /*iconCls: 'add',
                iconMask: true,*/
                action: 'joinActivity'
               /* ui: 'action',
                height:'10%',
                width:'15%',
                margin: '25 10 0 5', //Haut, Bas, Droite, Gauche
                align: 'center'*/
            }
           
          ]
        },
        
         initialize: function(){
           this.callParent();

           //  record is visible
           console.log("ICI : "+this.config.record);
         }
});
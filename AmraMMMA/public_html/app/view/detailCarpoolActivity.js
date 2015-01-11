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
                xtype: "spacer",
                height:2
            },
             {
                xtype: 'button',
                id:'carpoolbtnjoin',
                text: 'Joindre l\'activité',
                /*iconCls: 'add',
                iconMask: true,*/
                action: 'joinActivity'
              /*  ui: 'action',
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
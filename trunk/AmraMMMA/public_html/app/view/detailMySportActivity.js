Ext.define("Lan.view.detailMySportActivity", {
    extend: 'Ext.form.Panel',
    xtype: 'detailmysportactivity',
    config: {
        title: 'Titre de l\'activité',
        id: 'idMySportDetail',

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
                text: 'Retour'
            }]
          },
            
            {
                html:'<p style="border-style:double; border-color:#F5DA81; background:#F5ECCE">'+
                '<b> Nom de l\'organisateur : </b>'+
                '</p>'
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
                id:'mysportbtnleave',
                text: 'Quitter l\'activité',
                action: 'joinActivity',
                ui: 'action',
                height:60,
                width:300,
                margin: '50 10 0 100', //Haut, Bas, Droite, Gauche
                align: 'center'
            },
            
            {
                xtype: 'button',
                id:'mysportbtndelete',
                text: 'Supprimer l\'activité',
                action: 'deleteActivity',
                ui: 'decline',
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
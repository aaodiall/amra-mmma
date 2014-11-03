Ext.define("Lan.view.createCarpoolActivity", {
    extend: 'Ext.form.Panel',
    xtype: 'createcarpoolactivity',
    config: {
          title: 'Home',
          iconCls: 'user',
          scrollable: 'vertical',
          items: [
          {
            xtype: 'toolbar',
            title: 'Créer une activité'
          },
          {
            xtype: 'textfield',
            name: 'organisateur',
            label: 'Nom de l\'organisateur'
         },
         {
            xtype: 'textfield',
            name: 'heure_debut',
            label: 'Heure de debut de l\'activite'
        },
        {
            xtype: 'textfield',
            name: 'heure_fin',
            label: 'Heure de fin de l\'activite'
        },
        {
            xtype: 'textfield',
            name: 'lieu_rdv',
            label: 'Lieu de rendez-vous'
        },
        {
            xtype: 'numberfield',
            name: 'nombre_max',
            label: 'Nombre de personne maximal'
        },
        {
            xtype: 'textfield',
            name: 'description',
            label: 'Decription de l\'activite'
        },
       
        
        //CREATE BUTTON
        {
            xtype: 'button',
            text: 'Create',
            action: 'createCarpoolActivity',
            ui: 'confirm',
            iconMask:'true',
            height:60
        }
    ]
 }
});
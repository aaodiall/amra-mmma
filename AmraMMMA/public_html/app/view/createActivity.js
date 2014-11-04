Ext.define("Lan.view.createActivity", {
    extend: 'Ext.form.Panel',
    xtype: 'createactivity',
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
            name: 'id_user',
            label: 'Nom de l\'organisateur'
         },
         {
            xtype: 'textfield',
            name: 'start_time',
            label: 'Heure de debut de l\'activite'
        },
        {
            xtype: 'textfield',
            name: 'stop_time',
            label: 'Heure de fin de l\'activite'
        },
        {
            xtype: 'textfield',
            name: 'location',
            label: 'Lieu de rendez-vous'
        },
        {
            xtype: 'numberfield',
            name: 'max_number',
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
            action: 'createActivityAction',
            ui: 'confirm',
            iconMask:'true',
            height:60
        }
    ]
 }
});
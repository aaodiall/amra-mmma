Ext.define("Lan.view.createCulturalActivity", {
    extend: 'Ext.form.Panel',
    xtype: 'createculturalactivity',
    config: {
          title: 'Home',
          iconCls: 'user',
          scrollable: 'vertical',
          items: [
          /*{
            xtype: 'toolbar',
            title: 'Créer une activité'
          },*/
          {
            xtype: 'textfield',
            name: 'id_user',
            label: 'Nom de l\'organisateur'
         },
         {
            xtype: 'textfield',
            name: 'title',
            label: 'Titre'
         },
         {
            xtype: 'textfield',
            name: 'date_activity',
            label: 'Date'
        },
         {
            xtype: 'textfield',
            name: 'start_time',
            label: 'Heure de début'
        },
        {
            xtype: 'textfield',
            name: 'stop_time',
            label: 'Heure de fin'
        },
        {
            xtype: 'textfield',
            name: 'location',
            label: 'Lieu'
        },
        {
            xtype: 'textfield',
            name: 'meeting_location',
            label: 'Lieu de rendez-vous'
        },
        {
            xtype: 'numberfield',
            name: 'max_number',
            label: 'Nombre maximal de personnes'
        },
        {
            xtype: 'textareafield',
            name: 'description',
            label: 'Description de l\'activite'
        },
       
        
        //CREATE BUTTON
        {
            xtype: 'button',
            text: 'Create',
            action: 'createCulturalActivity',
            ui: 'confirm',
            iconMask:'true',
            height:60
        }
    ]
 }
});
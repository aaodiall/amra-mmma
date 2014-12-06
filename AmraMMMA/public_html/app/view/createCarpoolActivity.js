Ext.define("Lan.view.createCarpoolActivity", {
    extend: 'Ext.form.Panel',
    xtype: 'createcarpoolactivity',
    config: {
          title: 'Home',
          iconCls: 'user',
          scrollable: 'vertical',
          items: [
         {
            xtype: 'textfield',
            name: 'date_activity',
            label: 'Date'
        },
        {
            xtype: 'textfield',
            name: 'departure_location',
            label: 'Lieu de départ'
        },
         {
            xtype: 'textfield',
            name: 'start_time',
            label: 'Heure de départ'
        },
        {
            xtype: 'textfield',
            name: 'arrival_location',
            label: 'Lieu d\'arrivée'
        },
        {
            xtype: 'textfield',
            name: 'stop_time',
            label: 'Heure d\'arrivée'
        },
        {
            xtype: 'textfield',
            name: 'meeting_location',
            label: 'Lieu de rendez-vous'
        },
        {
            xtype: 'numberfield',
            name: 'max_number',
            label: 'Nombre de places disponibles'
        },
        {
            xtype: 'numberfield',
            name: 'cost',
            label: 'Tarif par place'
        },
        {
            xtype: 'textareafield',
            name: 'description',
            label: 'Description'
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
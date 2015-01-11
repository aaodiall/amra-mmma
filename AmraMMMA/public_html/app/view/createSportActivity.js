Ext.define("Lan.view.createSportActivity", {
    extend: 'Ext.form.Panel',
    xtype: 'createsportactivity',
    
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Spinner',
        'Ext.field.DatePicker'
    ],
    
    config: {
          title: 'Home',
          iconCls: 'user',
          scrollable: 'vertical',
          ui:'plain',
          items: [
         {
            xtype: 'textfield',
            name: 'title',
            label: 'Titre',
            labelWidth: '40%'

         },
         {
            xtype: 'textfield',
            name: 'date_activity',
            label: 'Date',
            labelWidth: '40%'

        },
        {
            xtype: 'textfield',
            name: 'start_time',
            label: 'Heure de début',
            labelWidth: '40%'

        },
        {
            xtype: 'textfield',
            name: 'stop_time',
            label: 'Heure de fin',
            labelWidth: '40%'

        },
        {
            xtype: 'textfield',
            name: 'location',
            label: 'Lieu',
            labelWidth: '40%'

        },
        {
            xtype: 'textfield',
            name: 'meeting_location',
            label: 'Lieu de rendez-vous',
            labelWidth: '40%'

        },
        {
            xtype: 'numberfield',
            name: 'max_number',
            label: 'Nombre maximal de personnes',
            labelWidth: '40%'

        },
        {
            xtype: 'textareafield',
            name: 'description',
            label: 'Description de l\'activite',
            labelWidth: '40%'

        },
        
        //CREATE BUTTON
        {
            xtype: 'button',
            text: 'Create',
            action: 'createSportActivity',
            ui: 'confirm',
            iconMask:'true',
            height:'50',
            width:'100%'
            
        }
    ]
 }
});
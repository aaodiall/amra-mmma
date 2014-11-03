Ext.define('Lan.controller.controller', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            culturalactivityref: 'culturalactivity',
            sportactivityref: 'sportactivity',
            carpoolactivityref: 'carpoolactivity',
            createactivityref: 'createactivity',
            externallistref : 'externallist',
            
            activitystoreref: {
                selector: 'activitystore',
                xtype: 'activitystore',
                autoCreate: true
            }
        },
        control: {
            'button[action=createActivityAction]': {
               tap: 'createActivityButtonTap'
            },
            sportactivity: {
                itemtap: 'sportactivitytap'
            }
        }
    },
    
    init: function () {
    },
    // launching the first view of the application
    launch : function() { 
        Ext.Viewport.add(Ext.create('Lan.view.activityMain'));
        // retrieve and load the store
        this.getActivitystoreref().load();

        // initialize the list from the store
        
        this.getSportactivityref().setStore(this.getActivitystoreref());
        // refresh the list with values
        this.getSportactivityref().refresh();
    },

      
    createActivityButtonTap: function() {  
        // retrieve values from the ref to the create activity
        var values = this.getCreateactivityref().getValues();
        // create a model instance with those values
        var activity = Ext.create('Lan.model.activity',values);
        
        // add the model to the store if valid
        this.getActivitystoreref().add(values);
        this.getCreateactivityref().reset();
        Ext.Msg.alert('Created', 'Activity created !!');
    },
      
    sportactivitytap: function (dataview, index, target, record, e, eOpts) {
              // retrieve the name of the selected record of the list
              var name = record.get('organisateur');
              Ext.Msg.confirm('Voir details de l\'activite de ', name+'?', 
                   function (answer) {
                     if (answer==='yes')
                      {
                          // see detail
                          Ext.Msg.alert('Activity detail', 'Activite cree par : '+record.get('organisateur')+
                                                           '<br>Heure de debut : '+record.get('heure_debut')+
                                                           '<br>Heure de fin : '+record.get('heure_fin')+
                                                           '<br>Lieu : '+record.get('lieu_rdv')+
                                                           '<br>Nombre de personnes max : '+record.get('nombre_max')+
                                                           '<br>Description : '+record.get('description'));
                       }
                      },this);
            }
});

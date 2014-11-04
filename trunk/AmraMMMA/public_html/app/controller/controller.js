Ext.define('Lan.controller.controller', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            sportactivityref: 'sportactivity',
            culturalactivityref: 'culturalactivity',
            carpoolactivityref: 'carpoolactivity',
            createsportactivityref: 'createsportactivity',
            createculturalactivityref: 'createculturalactivity',
            createcarpoolactivityref: 'createcarpoolactivity',            
            externallistref : 'externallist',
                
            
            activitystoreref: {
                selector: 'activitystore',
                xtype: 'activitystore',
                autoCreate: true
            }
        },
        control: {
            'button[action=createSportActivity]': {
               tap: 'createSportActivityButtonTap'
            },
            'button[action=createCulturalActivity]': {
               tap: 'createCulturalActivityButtonTap'
            },
            'button[action=createCarpoolActivity]': {
               tap: 'createCarpoolActivityButtonTap'
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

      
    createSportActivityButtonTap: function() {  
        // retrieve values from the ref to the create activity
        var values = this.getCreatesportactivityref().getValues();
        // create a model instance with those values
        var activity = Ext.create('Lan.model.activity',values);
        
        // add the model to the store if valid
        this.getActivitystoreref().add(values);
        this.getCreatesportactivityref().reset();
        Ext.Msg.alert('Created', 'Sport activity created !!');
    },
    
    createCulturalActivityButtonTap: function() {  
        // retrieve values from the ref to the create activity
        var values = this.getCreateculturalactivityref().getValues();
        // create a model instance with those values
        var activity = Ext.create('Lan.model.activity',values);
        
        // add the model to the store if valid
        this.getActivitystoreref().add(values);
        this.getCreateculturalactivityref().reset();
        Ext.Msg.alert('Created', 'Cultural activity created !!');
    },
            
    createCarpoolActivityButtonTap: function() {  
        // retrieve values from the ref to the create activity
        var values = this.getCreatecarpoolactivityref().getValues();
        // create a model instance with those values
        var activity = Ext.create('Lan.model.activity',values);
        
        // add the model to the store if valid
        this.getActivitystoreref().add(values);
        this.getCreatecarpoolactivityref().reset();
        Ext.Msg.alert('Created', 'Carpool Activity created !!');
    },
      
    sportactivitytap: function (dataview, index, target, record, e, eOpts) {
              // retrieve the name of the selected record of the list
              var name = record.get('id_user');
              Ext.Msg.confirm('Voir details de l\'activite de ', name+'?', 
                   function (answer) {
                     if (answer==='yes')
                      {
                          // see detail
                          Ext.Msg.alert('Activity detail', 'Activite cree par : '+record.get('id_user')+
                                                           '<br>Heure de debut : '+record.get('start_time')+
                                                           '<br>Heure de fin : '+record.get('stop_time')+
                                                           '<br>Lieu : '+record.get('location')+
                                                           '<br>Nombre de personnes max : '+record.get('max_number')+
                                                           '<br>Description : '+record.get('description'));
                       }
                      },this);
    }
    
});

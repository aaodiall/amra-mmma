//var socket = io.connect('http://localhost:3001');

Ext.define('Lan.controller.controller', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            createsportactivityref: 'createsportactivity',
            createculturalactivityref: 'createculturalactivity',
            createcarpoolactivityref: 'createcarpoolactivity',    
            sportactivityref: 'sportactivity',
            culturalactivityref: 'culturalactivity',
            carpoolactivityref: 'carpoolactivity',
            detailsportactivityref: 'detailsportactivity',
            externallistref : 'externallist',
            mysportactivityref : 'mysportactivity',
            myculturalactivityref : 'myculturalactivity',
            mycarpoolactivityref : 'mycarpoolactivity',
            
                
            
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
            'button[action=backToMyActivity]': {
               tap: 'backToMyActivityTap'
            },
            'button[action=joinActivity]': {
               tap: 'joinActivityTap'
            },
            
            
            sportactivity: {
               itemtap: 'sportactivitytap'
            },
            mysportactivity: {
               itemtap: 'mysportactivitytap'
            },
            myculturalactivity: {
               itemtap: 'myculturalactivitytap'
            },
            mycarpoolactivity: {
               itemtap: 'mycarpoolactivitytap'
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
        var record = this.getActivitystoreref().findExact('description', 'Adams');
        console.log("le record : "+ record);
        //create the view if it does not exist
        if (!this.getSportactivityref()){
            console.log("Dans le IF");
            Ext.create('Lan.view.sportActivity');
        }
        
        // initialize the list from the store
        this.getSportactivityref().setStore(this.getActivitystoreref());
        
        // refresh the list with values
        this.getSportactivityref().refresh();

},

    doSend:function(){
        var msg = this.getTxtMsg().getValue();
        var msgStore = this.getViewMsg().getStore();
        msgStore.add({name:msg,age:'180'});
        this.getTxtMsg().setValue("");
    },

      
    createSportActivityButtonTap: function() {  
        // retrieve values from the ref to the create activity
        var values = this.getCreatesportactivityref().getValues();
        // create a model instance with those values
        var activity = Ext.create('Lan.model.activity',values);       
       
        //envoi de la nouvelle activité  
        data = activity.data;
        data.type_activity=3;
        //console.log("Affichage activity "+ data);
        $.ajax({
            url: '/createActivity',
            type: 'POST',
            data: data,
            dataType:  "json",
            /**
             *  Define what will happen if the data are successfully sent
             * @method success
             * @param {} json le json reÃ§u par le serveur
             * @return 
             */
            success: function(json) {
                console.log(json);
                if (json.result === 1){                    
                    //Ext.Viewport.animateActiveItem({ xtype:'login'},{type:'slide'});
                    Ext.Msg.alert('Succès', 'Votre activité a bien été créée.');
                }
                else
                    Ext.Msg.alert('Erreur', 'Erreur création! Veuillez recommencer.');                       
            },
                
            /**
             * define what will happen in case of error
             * @method error
             * @return 
             */
            error: function(){
                console.log(" Something goes wrong!!");                     
            }         
        });
        //fin envoi nouvelle activité

        // add the model to the store if valid
        this.getActivitystoreref().add(values);
        // reset the values
        this.getCreatesportactivityref().reset();
        
    },
    
    createCulturalActivityButtonTap: function() {  
        // retrieve values from the ref to the create activity
        var values = this.getCreateculturalactivityref().getValues();
        // create a model instance with those values
        var activity = Ext.create('Lan.model.activity',values);
        
        //envoi de la nouvelle activité  
        data = activity.data;
        data.type_activity=2;
        //console.log("Affichage activity "+ data);
        $.ajax({
            url: '/createActivity',
            type: 'POST',
            data: data,
            dataType:  "json",
            /**
             *  Define what will happen if the data are successfully sent
             * @method success
             * @param {} json le json reÃ§u par le serveur
             * @return 
             */
            success: function(json) {
                console.log(json);
                if (json.result === 1){                    
                    //Ext.Viewport.animateActiveItem({ xtype:'login'},{type:'slide'});
                    Ext.Msg.alert('Succès', 'Votre activité a bien été créée.');
                }
                else
                    Ext.Msg.alert('Erreur', 'Erreur création! Veuillez recommencer.');                       
            },
                
            /**
             * define what will happen in case of error
             * @method error
             * @return 
             */
            error: function(){
                console.log(" Something goes wrong!!");                     
            }         
        });
        //fin envoi nouvelle activité
        
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
        
        //envoi de la nouvelle activité  
        data = activity.data;
        data.type_activity=1;
        //console.log("Affichage activity "+ data);
        $.ajax({
            url: '/createActivity',
            type: 'POST',
            data: data,
            dataType:  "json",
            /**
             *  Define what will happen if the data are successfully sent
             * @method success
             * @param {} json le json reÃ§u par le serveur
             * @return 
             */
            success: function(json) {
                console.log(json);
                if (json.result === 1){                    
                    //Ext.Viewport.animateActiveItem({ xtype:'login'},{type:'slide'});
                    Ext.Msg.alert('Succès', 'Votre activité a bien été créée.');
                }
                else
                    Ext.Msg.alert('Erreur', 'Erreur création! Veuillez recommencer.');                       
            },
                
            /**
             * define what will happen in case of error
             * @method error
             * @return 
             */
            error: function(){
                console.log(" Something goes wrong!!");                     
            }         
        });
        //fin envoi nouvelle activité
        
        // add the model to the store if valid
        this.getActivitystoreref().add(values);
        this.getCreatecarpoolactivityref().reset();
        Ext.Msg.alert('Created', 'Carpool Activity created !!');
    },
      
    sportactivitytap: function (dataview, index, target, record, e, eOpts) {
       
        Ext.Viewport.animateActiveItem({ xtype:'detailsportactivity'},{type:'slide'});
        this.getDetailsportactivityref().setValues(record);
        
        console.log("L'organisateur : "+record.getData().id_user);
        
        //We need to keep the same order in the view !
        this.getDetailsportactivityref().getComponent('iduser').setHtml(record.getData().id_user);
        this.getDetailsportactivityref().getComponent('starttime').setHtml(record.getData().start_time);
        this.getDetailsportactivityref().getComponent('stoptime').setHtml(record.getData().stop_time);
        this.getDetailsportactivityref().getComponent('location').setHtml(record.getData().location);
        this.getDetailsportactivityref().getComponent('maxnumber').setHtml(record.getData().max_number);
        this.getDetailsportactivityref().getComponent('description').setHtml(record.getData().description);

},

    mysportactivitytap: function (dataview, index, target, record, e, eOpts) {
       
        Ext.Viewport.animateActiveItem({ xtype:'detailsportactivity'},{type:'slide'});
        this.getDetailsportactivityref().setValues(record);
        
        console.log("L'organisateur : "+record.getData().id_user);
        
        //We need to keep the same order in the view !
        this.getDetailsportactivityref().getComponent('iduser').setHtml(record.getData().id_user);
        this.getDetailsportactivityref().getComponent('starttime').setHtml(record.getData().start_time);
        this.getDetailsportactivityref().getComponent('stoptime').setHtml(record.getData().stop_time);
        this.getDetailsportactivityref().getComponent('location').setHtml(record.getData().location);
        this.getDetailsportactivityref().getComponent('maxnumber').setHtml(record.getData().max_number);
        this.getDetailsportactivityref().getComponent('description').setHtml(record.getData().description);

},
       
       // Function called when the back button is pressed
       backToMyActivityTap: function() {  

       /* var items,
            current,
            previous;

        items = Ext.Viewport.getItems();

        // We get the current and the previous view
        current = items.get(items.length - 1);
        previous = items.get(items.length - 2);

        Ext.Viewport.on({
            activeitemchange: 'onAfterAnimate',
            scope: this,
            single: true,
            order: 'after',
            args: [current]
        });

        Ext.Viewport.animateActiveItem(previous, {type: 'slide', direction: 'right'});*/

        //Useful just to display a view (here the activityMain) !
        //var item = Ext.getCmp('mainId');
        //Ext.Viewport.animateActiveItem( item, {type: 'slide', direction: 'right'});
        
        //To remove a view !
        Ext.Viewport.remove(Ext.Viewport.getActiveItem(),true);

    },
    /*
    onAfterAnimate: function(itemToDestroy) {
        itemToDestroy.destroy();
    }
    */
    
    joinActivityTap: function() {  
        socket.emit('my other event', { coucou: 'data', salut:'coi' });
            Ext.Msg.alert('Joined', 'Méthode à implémenter !');
    }
    
});

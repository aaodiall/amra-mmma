var carpoolStore;
var culturalStore;
var sportStore;

var myCarpoolStore;
var myCulturalStore;
var mySportStore;

var jsonReceived;
var jsonModel;

var activity_id;

Ext.define('Lan.controller.controller', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            createsportactivityref: 'createsportactivity',
            createculturalactivityref: 'createculturalactivity',
            createcarpoolactivityref: 'createcarpoolactivity',    
            activitymainref:'maincontainer',
            
            sportactivityref: 'sportactivity',
            culturalactivityref: 'culturalactivity',
            carpoolactivityref: 'carpoolactivity',
            
            detailcarpoolactivityref: 'detailcarpoolactivity',
            detailculturalactivityref: 'detailculturalactivity',
            detailsportactivityref: 'detailsportactivity',
            detailmycarpoolactivityref: 'detailmycarpoolactivity',
            detailmyculturalactivityref: 'detailmyculturalactivity',
            detailmysportactivityref: 'detailmysportactivity',
            
            externallistref : 'externallist',
            
            mysportactivityref : 'mysportactivity',
            myculturalactivityref : 'myculturalactivity',
            mycarpoolactivityref : 'mycarpoolactivity',
            loginref:'login',
            
                
            
            carpoolactivitystoreref: {
                selector: 'carpoolactivitystore',
                xtype: 'carpoolactivitystore',
                autoCreate: true
            },
            culturalactivitystoreref: {
                selector: 'culturalactivitystore',
                xtype: 'culturalactivitystore',
                autoCreate: true
            },
            sportactivitystoreref: {
                selector: 'sportactivitystore',
                xtype: 'sportactivitystore',
                autoCreate: true
            },
            mycarpoolactivitystoreref: {
                selector: 'mycarpoolactivitystore',
                xtype: 'mycarpoolactivitystore',
                autoCreate: true
            },
            myculturalactivitystoreref: {
                selector: 'myculturalactivitystore',
                xtype: 'myculturalactivitystore',
                autoCreate: true
            },
            mysportactivitystoreref: {
                selector: 'mysportactivitystore',
                xtype: 'mysportactivitystore',
                autoCreate: true
            },
            userstoreref: {
                selector: 'userstore',
                xtype: 'userstore',
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
            'button[action=logout]': {
                tap: 'logoutTap'
            },
            'button[action=joinActivity]': {
                tap: 'joinActivityTap'
            },
            'button[action=quitActivity]': {
                tap: 'quitActivityTap'
            },
            'button[action=logInButton]': {
                tap: 'loginTap'
            },
            'button[action=deleteActivity]': {
                tap: 'deleteActivityTap'
            },
            
            
            carpoolactivity: {
                itemtap: 'carpoolactivitytap'
            },
            culturalactivity: {
                itemtap: 'culturalactivitytap'
            },
            sportactivity: {
                itemtap: 'sportactivitytap'
            },
            mycarpoolactivity: {
                itemtap: 'mycarpoolactivitytap'
            },
            myculturalactivity: {
                itemtap: 'myculturalactivitytap'
            },
            mysportactivity: {
                itemtap: 'mysportactivitytap'
            }

        }
    },
    
    init: function () {
    },
    // launching the first view of the application
    launch : function() { 
        if(localStorage.getItem('localid')===null){
            Ext.Viewport.add(Ext.create('Lan.view.login'));
        }else{
            Ext.Viewport.add(Ext.create('Lan.view.activityMain'));
            this.connectionOk();

        }
       
        //  Ext.Viewport.add(Ext.create('Lan.view.activityMain'));
        // this.connectionOk();
    },
    /* switchMainView: function(newView, config) {
        if (this.currentView != false) {
            Ext.Viewport.remove(this.currentView);
        }
        this.currentView = Ext.create(newView, config);
        Ext.Viewport.add(this.currentView);
    },*/
        
    connectionOk: function(){
        //stores need to be initialize here !
        myCarpoolStore=Ext.StoreManager.get('myCarpoolActivityStore');
        myCulturalStore=Ext.StoreManager.get('myCulturalActivityStore');
        mySportStore=Ext.StoreManager.get('mySportActivityStore');

        carpoolStore = Ext.StoreManager.get('carpoolActivityStore');
        culturalStore = Ext.StoreManager.get('culturalActivityStore');
        sportStore = Ext.StoreManager.get('sportActivityStore');

        this.getMyActivity();
        this.getAllActivities();
    },
            
            
    //getting the USER activity    
    getMyActivity: function(){
        
        var thisRef=this;
        this.syncAndLoad();
        var localId = localStorage.getItem('localid');
        // localId=1;
        console.log("a"+localId);
        //Covoiturage = 125
        //Culture = 489
        //Sport = 759app
                
        //CARPOOL ACTIVITY
        $.ajax({
            url: '/myactivity/125/'+localId,
            type: 'GET',
            dataType:  "json",

            success: function(json) {
                //Getting MY activity
                
                for (var i = 0 ; i<json.length ; i++){
                    if(json[0].length !== 0){
                        jsonReceived=json[0][i];
                        thisRef.createJson();
                        myCarpoolStore.add(jsonModel);
                    }
                    
                    if(json[1].length !== 0){
                        jsonReceived=json[1][i];
                        thisRef.createJson();
                        myCarpoolStore.add(jsonModel);  
                    }
                }
                
            },
            
            error: function(){
                console.log(" Something goes wrong!!");
            }    
        });
       
        
        //CULTURAL ACTIVITY
        $.ajax({
            url: '/myactivity/489/'+localId,
            type: 'GET',
            dataType:  "json",

            success: function(json) {
                //Getting MY activity
                for (var i = 0 ; i<json.length ; i++){
                    if(json[0].length !== 0){
                        jsonReceived=json[0][i];
                        thisRef.createJson();
                        myCulturalStore.add(jsonModel);
                    }
                    if(json[1].length !== 0){
                        jsonReceived=json[1][i];
                        thisRef.createJson();
                        myCulturalStore.add(jsonModel);
                    }
                }
                
            },
            
            error: function(){
                console.log(" Something goes wrong!!");
            }    
        });
        
        
        //SPORT ACTIVITY
        $.ajax({
            url: '/myactivity/759app/'+localId,
            type: 'GET',
            dataType:  "json",

            success: function(json) {
                //Getting MY activity
                console.log("vuuue "+JSON.stringify(json));
                for (var i = 0 ; i<json.length ; i++){
                    if(json[0].length !== 0){
                        jsonReceived=json[0][i];
                        thisRef.createJson();
                        mySportStore.add(jsonModel);
                    } 
                    if(json[1].length !== 0){
                        jsonReceived=json[1][i];
                        thisRef.createJson();
                        mySportStore.add(jsonModel);
                    }
                }
            },
            
            error: function(){
                console.log(" Something goes wrong!!");
            }    
        });
        
        this.syncAndLoad();

    },

    loginTap: function() {  
        // localStorage.setItem('alpha','1');
        //console.log(localStorage.remove("alpha"));
        var thisref=this;     
        
        var values = this.getLoginref().getValues();
        console.log("controler "+JSON.stringify(values));
        
        var user = Ext.create('Lan.model.user',values);
        var resValidation=user.validate();
        console.log(user);
        console.log(resValidation);
        if (resValidation.isValid()) {
            var values = this.getLoginref().getValues();
            console.log("controler "+JSON.stringify(values));
            $.ajax({
                url: '/login',
                type: 'POST',
                data: values,
                dataType:  "json",
                /**
                 *  Define what will happen if the data are successfully sent
                 * @method success
                 * @param {} json le json reçu par le serveur
                 * @return 
                 */
                success: function(json) {
                    console.log('login json: '+ JSON.stringify(json));
                    if(json.result==="0"){
                        Ext.Msg.alert('Erreur', '<br>Email ou mot de passe incorrect</br>');
                    }else{
                        var user = Ext.create('Lan.model.user',values);
                        user.id=json.id_user;
                        // add the model to the store if valid
                        localStorage.setItem('localid',user.id);
                        Ext.Viewport.remove(thisref.currentView);
                        //  Ext.Viewport.add(Ext.create('Lan.view.activityMain'));
                        //thisref.getUserstoreref().add(user);
                        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
                        Ext.Viewport.animateActiveItem({ xtype:'maincontainer'},{type:'slide'});
                        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
                        thisref.connectionOk();
                    }
               
                
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
        } else {
            // show validation errors
            var message='<br/>';
            resValidation.each(
                    function (item, index, length) {
                        message = message + item.getField()+' - '+ item.getMessage() +'<br/>';   
            });
            Ext.Msg.alert('Erreur', message);
        }     
  
        
        
    }, 

    //Create a json with Model Format (from a json received)
    createJson: function(){
        jsonModel = {
            id: jsonReceived.id,
            date_activity: jsonReceived.date_activite,
            name : jsonReceived.nom, 
            start_time : jsonReceived.heure_debut,
            stop_time : jsonReceived.heure_fin,
            meeting_location : jsonReceived.lieu_rdv,
            photo_activity : jsonReceived.photo_activite, 
            actual_number : jsonReceived.nombre_actuel,
            max_number : jsonReceived.nombre_max,
            description : jsonReceived.description,
            id_user : jsonReceived.id_user, 
            id_status : jsonReceived.id_status,
            title : jsonReceived.titre,
            location : jsonReceived.lieu,
            departure_location : jsonReceived.lieu_depart,
            arrival_location : jsonReceived.lieu_arrivee,
            cost : jsonReceived.prix
        };
    },

      
      
    getAllActivities: function(){
        var thisRef=this;
        this.syncAndLoad();
        
        var localId = localStorage.getItem('localid');
        // localId=1;
        console.log("localId : "+localId);

        //Covoiturage = 125
        //Culture = 489
        //Sport = 759app
                
        //CARPOOL ACTIVITY
        $.ajax({
            url: '/allactivities/125/'+localId,
            type: 'GET',
            dataType:  "json",

            success: function(json) {
                //Getting MY activity
                for (var i = 0 ; i<json.length ; i++){
                    
                    jsonReceived=json[i];
                    thisRef.createJson();
                    console.log("boubou "+jsonModel.id);
                    carpoolStore.add(jsonModel);
                }
            },
            
            error: function(){
                console.log(" Something goes wrong!!");
            }    
        });
       
        
        
        //CULTURAL ACTIVITY
        $.ajax({
            url: '/allactivities/489/'+localId,
            type: 'GET',
            dataType:  "json",

            success: function(json) {
                //Getting MY activity
                for (var i = 0 ; i<json.length ; i++){
                    jsonReceived=json[i];
                    thisRef.createJson();
                    culturalStore.add(jsonModel);

                }
            },
            
            error: function(){
                console.log(" Something goes wrong!!");
            }    
        });
        
                
        //SPORT ACTIVITY
        $.ajax({
            url: '/allactivities/759app/'+localId,
            //url: '/759app/',
            type: 'GET',
            dataType:  "json",

            success: function(json) {
                //Getting all the activities
                for (var i = 0 ; i<json.length ; i++){
                    jsonReceived=json[i];
                    thisRef.createJson();
                    sportStore.add(jsonModel);
                }
            },
            
            error: function(){
                console.log(" Something goes wrong ! to get all activity");
            }    
        });
        
        this.syncAndLoad();
    },
    
    
    syncAndLoad: function(){
        myCarpoolStore.sync();
        myCarpoolStore.load();
        myCulturalStore.sync();
        myCulturalStore.load();
        mySportStore.sync();
        mySportStore.load();
        
        carpoolStore.sync();
        carpoolStore.load();
        culturalStore.sync();
        culturalStore.load();
        sportStore.sync();
        sportStore.load();
    },
    
    createSportActivityButtonTap: function() {  
        // retrieve values from the ref to the create activity
        var values = this.getCreatesportactivityref().getValues();
        // create a model instance with those values
        var activity = Ext.create('Lan.model.activity',values);       
       
        //envoi de la nouvelle activité  
        var data = activity.data;
        data.type_activity=3;
        data.id_user=localStorage.getItem('localid');;

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
        sportStore.add(values);
        mySportStore.add(values);
        // reset the values
        this.getCreatesportactivityref().reset();
        //this.syncAndLoad();
    },
    
    createCulturalActivityButtonTap: function() {  
        // retrieve values from the ref to the create activity
        var values = this.getCreateculturalactivityref().getValues();
        // create a model instance with those values
        var activity = Ext.create('Lan.model.activity',values);
        
        //envoi de la nouvelle activité  
        var data = activity.data;
        data.type_activity=2;
        data.id_user=localStorage.getItem('localid');
        
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
        //this.getActivitystoreref().add(values);
        this.getCreateculturalactivityref().reset();
        Ext.Msg.alert('Created', 'Cultural activity created !!');
        //this.syncAndLoad();
    },
            
    createCarpoolActivityButtonTap: function() {  
        // retrieve values from the ref to the create activity
        var values = this.getCreatecarpoolactivityref().getValues();
        // create a model instance with those values
        var activity = Ext.create('Lan.model.activity',values);
        
        //envoi de la nouvelle activité  
        var data = activity.data;
        data.type_activity=1;
        data.id_user=localStorage.getItem('localid');
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
        myCarpoolStore.add(values);
        this.getCreatecarpoolactivityref().reset();
        Ext.Msg.alert('Created', 'Carpool Activity created !!');
        //this.syncAndLoad();
    },
      
    sportactivitytap: function (dataview, index, target, record, e, eOpts) {
       
        //Check if the activity is already joined or not
        /*$.ajax({
            url: '/check/',
            type: 'GET',
            dataType:  "json",

            success: function(json) {
                //Getting all the activities
                for (var i = 0 ; i<json.length ; i++){
                    jsonReceived=json[i];
                    thisRef.createJson();
                    sportStore.add(jsonModel);
                    console.log("JSON : "+JSON.stringify(jsonModel));

                }
            },
            
            error: function(){
                console.log(" Something goes wrong ! to get all activity");
            }    
        });
         */
        
        Ext.Viewport.animateActiveItem({ xtype:'detailsportactivity'},{type:'slide'});
        this.getDetailsportactivityref().setValues(record);
        
        console.log("L'id de l'act: "+record.getData().id);
        
        //We need to keep the same order in the view !
        this.getDetailsportactivityref().getComponent('iduser').setHtml(record.getData().id_user);
        this.getDetailsportactivityref().getComponent('starttime').setHtml(record.getData().start_time);
        this.getDetailsportactivityref().getComponent('stoptime').setHtml(record.getData().stop_time);
        this.getDetailsportactivityref().getComponent('location').setHtml(record.getData().location);
        this.getDetailsportactivityref().getComponent('maxnumber').setHtml(record.getData().max_number);
        this.getDetailsportactivityref().getComponent('description').setHtml(record.getData().description);
        
        activity_id = record.getData().id;
    },
            
    culturalactivitytap: function (dataview, index, target, record, e, eOpts) {
       
        //Check if the activity is already joined or not
        /*$.ajax({
            url: '/check/',
            type: 'GET',
            dataType:  "json",

            success: function(json) {
                //Getting all the activities
                for (var i = 0 ; i<json.length ; i++){
                    jsonReceived=json[i];
                    thisRef.createJson();
                    sportStore.add(jsonModel);
                    console.log("JSON : "+JSON.stringify(jsonModel));

                }
            },
            
            error: function(){
                console.log(" Something goes wrong ! to get all activity");
            }    
        });
         */
        
        Ext.Viewport.animateActiveItem({ xtype:'detailculturalactivity'},{type:'slide'});
        this.getDetailculturalactivityref().setValues(record);
        
        console.log("L'id de l'act: "+record.getData().id);
        
        //We need to keep the same order in the view !
        this.getDetailculturalactivityref().getComponent('iduser').setHtml(record.getData().id_user);
        this.getDetailculturalactivityref().getComponent('starttime').setHtml(record.getData().start_time);
        this.getDetailculturalactivityref().getComponent('stoptime').setHtml(record.getData().stop_time);
        this.getDetailculturalactivityref().getComponent('location').setHtml(record.getData().location);
        this.getDetailculturalactivityref().getComponent('maxnumber').setHtml(record.getData().max_number);
        this.getDetailculturalactivityref().getComponent('description').setHtml(record.getData().description);
        
        activity_id = record.getData().id;
    },
            
    carpoolactivitytap: function (dataview, index, target, record, e, eOpts) {
       
        //Check if the activity is already joined or not
        /*$.ajax({
            url: '/check/',
            type: 'GET',
            dataType:  "json",

            success: function(json) {
                //Getting all the activities
                for (var i = 0 ; i<json.length ; i++){
                    jsonReceived=json[i];
                    thisRef.createJson();
                    sportStore.add(jsonModel);
                    console.log("JSON : "+JSON.stringify(jsonModel));

                }
            },
            
            error: function(){
                console.log(" Something goes wrong ! to get all activity");
            }    
        });
         */
        
        Ext.Viewport.animateActiveItem({ xtype:'detailcarpoolactivity'},{type:'slide'});
        this.getDetailcarpoolactivityref().setValues(record);
        
        console.log("L'id de l'act: "+record.getData().id);
        
        //We need to keep the same order in the view !
        this.getDetailcarpoolactivityref().getComponent('iduser').setHtml(record.getData().id_user);
        this.getDetailcarpoolactivityref().getComponent('starttime').setHtml(record.getData().start_time);
        this.getDetailcarpoolactivityref().getComponent('stoptime').setHtml(record.getData().stop_time);
        this.getDetailcarpoolactivityref().getComponent('location').setHtml(record.getData().location);
        this.getDetailcarpoolactivityref().getComponent('maxnumber').setHtml(record.getData().max_number);
        this.getDetailcarpoolactivityref().getComponent('description').setHtml(record.getData().description);
        
        activity_id = record.getData().id;
    },


    // RECUPERE DEUX FOIS L'ID USER 10 ALORS //
    mycarpoolactivitytap: function (dataview, index, target, record, e, eOpts) {
        var localId = localStorage.getItem('localid');
        // localId=1;
        console.log("a "+localId+" b "+record.get('id_user'));
        
        Ext.Viewport.animateActiveItem({ xtype:'detailmycarpoolactivity'},{type:'slide'});
        this.getDetailmycarpoolactivityref().setValues(record);
        
        if (localId == record.get('id_user')){ 
            this.getDetailmycarpoolactivityref().getComponent('mycarpoolbtnleave').setDisabled(true);
        } else {
            this.getDetailmycarpoolactivityref().getComponent('mycarpoolbtndelete').setDisabled(true);

        }
        //We need to keep the same order in the view !
        this.getDetailmycarpoolactivityref().getComponent('iduser').setHtml(record.getData().id_user);
        this.getDetailmycarpoolactivityref().getComponent('starttime').setHtml(record.getData().start_time);
        this.getDetailmycarpoolactivityref().getComponent('stoptime').setHtml(record.getData().stop_time);
        this.getDetailmycarpoolactivityref().getComponent('location').setHtml(record.getData().location);
        this.getDetailmycarpoolactivityref().getComponent('maxnumber').setHtml(record.getData().max_number);
        this.getDetailmycarpoolactivityref().getComponent('description').setHtml(record.getData().description);
        activity_id = record.getData().id;
    },
        
    myculturalactivitytap: function (dataview, index, target, record, e, eOpts) {
        var localId = localStorage.getItem('localid');
       
        console.log("a"+localId);
        
        Ext.Viewport.animateActiveItem({ xtype:'detailmyculturalactivity'},{type:'slide'});
        
        if (localId == record.get('id_user')){ 
            this.getDetailmyculturalactivityref().getComponent('myculturalbtnleave').setDisabled(true);
        } else {
            this.getDetailmyculturalactivityref().getComponent('myculturalbtndelete').setDisabled(true);
        }
        this.getDetailmyculturalactivityref().setValues(record);
        //We need to keep the same order in the view !
        this.getDetailmyculturalactivityref().getComponent('iduser').setHtml(record.getData().id_user);
        this.getDetailmyculturalactivityref().getComponent('starttime').setHtml(record.getData().start_time);
        this.getDetailmyculturalactivityref().getComponent('stoptime').setHtml(record.getData().stop_time);
        this.getDetailmyculturalactivityref().getComponent('location').setHtml(record.getData().location);
        this.getDetailmyculturalactivityref().getComponent('maxnumber').setHtml(record.getData().max_number);
        this.getDetailmyculturalactivityref().getComponent('description').setHtml(record.getData().description);
        activity_id = record.getData().id;
        
    },

    mysportactivitytap: function (dataview, index, target, record, e, eOpts) {
        var localId = localStorage.getItem('localid');
        // localId=1;
        console.log("a"+localId);
        
        Ext.Viewport.animateActiveItem({ xtype:'detailmysportactivity'},{type:'slide'});
        this.getDetailmysportactivityref().setValues(record);
        console.log("local id: "+localId +"record id_user: "+record.get('id_user'));
        if (localId == record.get('id_user')){ 
            this.getDetailmysportactivityref().getComponent('mysportbtnleave').setDisabled(true);
        } else {
            this.getDetailmysportactivityref().getComponent('mysportbtndelete').setDisabled(true);
        }
        
        //We need to keep the same order in the view !
        this.getDetailmysportactivityref().getComponent('iduser').setHtml(record.getData().id_user);
        this.getDetailmysportactivityref().getComponent('starttime').setHtml(record.getData().start_time);
        this.getDetailmysportactivityref().getComponent('stoptime').setHtml(record.getData().stop_time);
        this.getDetailmysportactivityref().getComponent('location').setHtml(record.getData().location);
        this.getDetailmysportactivityref().getComponent('maxnumber').setHtml(record.getData().max_number);
        this.getDetailmysportactivityref().getComponent('description').setHtml(record.getData().description);
        activity_id = record.getData().id;
    },

       
    // Function called when the back button is pressed
    backToMyActivityTap: function() {  
        //To remove a view !
        Ext.Viewport.remove(Ext.Viewport.getActiveItem(),true);
    },
    
    // logout function
    logoutTap: function() {  
        //To remove a view !
        localStorage.removeItem('localid');
        //  this.currentView = Ext.create('Lan.view.activityMain');
       
        //    Ext.Viewport.removeAll(true);
        //Ext.Viewport.remove(Ext.Viewport.gettem(),true); 
        //this.getActivityMainref().remove();
        window.location.reload();
        //    Ext.Viewport.add(Ext.create('Lan.view.login'));
        // Ext.Viewport.animateActiveItem({ xtype:'login'},{type:'slide'});
        //  Ext.Viewport.add(Ext.create('Lan.view.activityMain'));
      
    },
    
    joinActivityTap: function() {  
        
        var act_id = activity_id;
        var localId = localStorage.getItem('localid');
        var thisref=this;
        //  localId=1;

        var data ={
            id_user:localId,
            type_activity:'',
            id_activity:act_id
        };

        if(Ext.Viewport.getActiveItem().xtype == 'detailsportactivity'){
            data.type_activity='sport';
        }
        if(Ext.Viewport.getActiveItem().xtype == 'detailculturalactivity'){
            data.type_activity='culture'   
        }
        if(Ext.Viewport.getActiveItem().xtype == 'detailcarpoolactivity'){
            data.type_activity='covoiturage'   
        }
        console.log("Id récupéré : "+act_id);
        console.log("VOIR LA VUE : " +Ext.Viewport.getActiveItem().xtype);
        
        //console.log("VOIR LA VUE : " +activity_type);
        $.ajax({
            url: '/joinActivity',
            type: 'POST',
            data: data,
            dataType:  "json",

            success: function(json) {
                console.log(json);
                if (json.result == 1){                    
                    //Ext.Viewport.animateActiveItem({ xtype:'login'},{type:'slide'});
                    Ext.Msg.alert('Succès', 'Vous avez bien rejoint l\'activité');
                    Ext.Viewport.remove(Ext.Viewport.getActiveItem(),true);
                    thisref.reloadmyactivities();
                    
                }
                else {
                    if(json.result == 2){
                        Ext.Msg.alert('Erreur', 'Vous avez déjà rejoint cette activité');                       
                        //ENSUITE IL FAUT GRISER LE BOUTON ! a ce moment là !
                        console.log("viewport: "+Ext.Viewport.getActiveItem().xtype);
                        if(Ext.Viewport.getActiveItem().xtype == 'detailsportactivity'){
                            thisref.getDetailsportactivityref().getComponent('sportbtnjoin').setDisabled(true);
                        }
                        if(Ext.Viewport.getActiveItem().xtype == 'detailculturalactivity'){
                            thisref.getDetailculturalactivityref().getComponent('culturalbtnjoin').setDisabled(true); 
                        }
                        if(Ext.Viewport.getActiveItem().xtype == 'detailcarpoolactivity'){
                            thisref.getDetailcarpoolactivityref().getComponent('carpoolbtnjoin').setDisabled(true); 
                        }
                        
                    }
                    
                    else{
                        Ext.Msg.alert('Erreur', 'Impossible de rejoindre l\'activité, nombre maximum atteint');
                    }
                }
            },

            error: function(){
                console.log(" Something goes wrong!!");                     
            }         
        });
    },
    reloadmyactivities: function(){
        //stores need to be initialize here !
        myCarpoolStore=Ext.StoreManager.get('myCarpoolActivityStore');
        myCulturalStore=Ext.StoreManager.get('myCulturalActivityStore');
        mySportStore=Ext.StoreManager.get('mySportActivityStore');

        this.getMyActivity();
       
    },
    quitActivityTap: function() {  
        
        var act_id = activity_id;
        var localId = localStorage.getItem('localid');
        //  localId=1;
        var thisref=this;   
        var data ={
            
            type_activity:'',
            id_activity:act_id,
            id_user:localId
        };

        if(Ext.Viewport.getActiveItem().xtype == 'detailmysportactivity'){
            data.type_activity='sport';
        }
        if(Ext.Viewport.getActiveItem().xtype == 'detailmyculturalactivity'){
            data.type_activity='culture'   
        }
        if(Ext.Viewport.getActiveItem().xtype == 'detailmycarpoolactivity'){
            data.type_activity='covoiturage'   
        }
       
        console.log("VOIR LA VUE : " +Ext.Viewport.getActiveItem().xtype);
        console.log("VOIR data : " +JSON.stringify(data)+" voir Ext.Viewport.getActiveItem().xtype: "+Ext.Viewport.getActiveItem().xtype);
        
        //console.log("VOIR LA VUE : " +activity_type);
        $.ajax({
            url: '/quitActivity',
            type: 'POST',
            data: data,
            dataType:  "json",

            success: function(json) {
                console.log(json);
                if (json.result == 1){                    
                    
                    Ext.Msg.alert('Succès', 'Vous avez bien quitté l\'activité');
                    Ext.Viewport.remove(Ext.Viewport.getActiveItem(),true);
                    thisref.connectionOk();
                   
                }
                else {
                    Ext.Msg.alert('Erreur', 'Quitter l\'activité');
                }
            },

            error: function(){
                console.log(" Something goes wrong!!");                     
            }         
        });
    },
    deleteActivityTap: function() {  
        
        var act_id = activity_id;
        var localId = localStorage.getItem('localid');
        //  localId=1;
        var thisref=this;   
        var data ={
          
            type_activity:'',
            id_activity:act_id
        };

        if(Ext.Viewport.getActiveItem().xtype == 'detailmysportactivity'){
            data.type_activity='sport';
        }
        if(Ext.Viewport.getActiveItem().xtype == 'detailmyculturalactivity'){
            data.type_activity='culture'   
        }
        if(Ext.Viewport.getActiveItem().xtype == 'detailmycarpoolactivity'){
            data.type_activity='covoiturage'   
        }
       
        console.log("VOIR LA VUE : " +Ext.Viewport.getActiveItem().xtype);
        console.log("VOIR data : " +JSON.stringify(data)+" voir Ext.Viewport.getActiveItem().xtype: "+Ext.Viewport.getActiveItem().xtype);
        
        //console.log("VOIR LA VUE : " +activity_type);
        $.ajax({
            url: '/deleteActivity',
            type: 'POST',
            data: data,
            dataType:  "json",

            success: function(json) {
                console.log(json);
                if (json.result == 1){                    
                    //Ext.Viewport.animateActiveItem({ xtype:'login'},{type:'slide'});
                    Ext.Msg.alert('Succès', 'Vous avez bien supprimé l\'activité');
                    Ext.Viewport.remove(Ext.Viewport.getActiveItem(),true);
                    thisref.reloadmyactivities();
                    // Ext.Viewport.animateActiveItem({ xtype:'maincontainer'},{type:'slide'});
                }
                else {
                    Ext.Msg.alert('Erreur', 'Erreur de suppression de l\'activité');
                }
            },

            error: function(){
                console.log(" Something goes wrong!!");                     
            }         
        });
    }
    
    
});



var mysql = require('mysql');
 var connection = mysql.createConnection({
    host     : 'localhost',
  activite     : 'root',
  password : 'alphanicolala',
  database: 'amra_mmma',
});
 
// Log any errors connected to the connection
connection.connect(function(err){
   if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 console.log('connected as id ' + connection.threadId);
});


/*get list activity **/
exports.all_activity = function(req, res){
    var id_status_delete=3;
     
     connection.query('SELECT * FROM activite act,culture cul,covoiturage cov,sport sport'+
      'where act.id_status!='+id_status_delete,function(err,rows)     {
            
        if(err)
           console.log("Error Selecting : %s ",err );
     
            res.send(rows);
                           
         });
       
};



/*get list activity by user id **/
exports.all_activity_by_user = function(req, res){
     var id_user=req.params.id_user;
     var id_status_delete=3;
     connection.query('SELECT * FROM activite act,culture cul,covoiturage cov,sport sport'+
      'where act.id_user=? and act.id_status!='+id_status_delete,[id_user],function(err,rows)     {
            
        if(err)
           console.log("Error Selecting : %s ",err );
     
            res.send(rows);
                           
         });
       
};



/*join activity */
exports.join_activity = function(req,res){
    var id ={
        id_user:req.params.id_user,
        id_activite:req.params.id_activity
    } ;
    var activity;
   
        var query = connection.query('SELECT * FROM activite WHERE id = ?',[id.id_activity],function(err,rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );
             console.log("rows ",rows[0].id );
            activity=rows[0];
             
            
        });
        if(activity.nombre_actuel < activity.nombre_max){
            activity.nombre_actuel=activity.nombre_actuel+1;
            connection.query("INSERT INTO activite_join set ? ",id, function(err, rows)
        {
            if(err)
                console.log("Error inserting : %s ",err );
            
        });
        connection.query("UPDATE activite set ? WHERE id = ? ",[activity,id_activity], function(err, rows)
        {
            if (err)
                console.log("Error Updating : %s ",err );
            res.send('json');
            //res.redirect('/users');
        });    

        }else{
            res.send('nombre max atteint');

        }
        
    
};

/*quit activity */
exports.quit_activity = function(req,res){
    var id_user = req.params.id_user;
    var id_activity = req.params.id_activity;
    var activity;
    
        connection.query("DELETE FROM activite_join WHERE id_user = ? and id_activite= ?",[id_user,id_activite], function(err, rows)
        {
            if(err)
                console.log("Error deleting : %s ",err );
            res.send('json');
        });
    var query = connection.query('SELECT * FROM activite WHERE id = ?',[id.id_activity],function(err,rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );
             console.log("rows ",rows[0].id );
            activity=rows[0];
            activity.nombre_actuel=activity.nombre_actuel-1;
            
        });
    connection.query("UPDATE activite set ? WHERE id = ? ",[activity,id_activity], function(err, rows)
        {
            if (err)
                console.log("Error Updating : %s ",err );
            res.send('json');
            //res.redirect('/users');
        }); 
};



/*Save the activite*/
exports.create = function(req,res){
   console.log(req.body);
    var input = JSON.parse(JSON.stringify(req.body));
    var id_activity;
    var data = {
            date_activite:input.date_activity,
            heure_debut:input.start_time,
            heure_fin:input.stop_time,
            lieu_rdv: input.meeting_location,
            photo_activite:input.photo_activity,
            nombre_actuel:input.actual_number,
            nombre_max:input.max_number,
            description:input.description,
            id_user:input.id_user,
            id_status:input.id_status
           
        };
        var query = connection.query("INSERT INTO activite set ? ",data, function(err, rows)
        {
            if (err)
                console.log("Error inserting : %s ",err );
            id_activity=rows.insertId;
            res.send(data);
        });
       
    
    //numero de l'activité par ordre alphabetique 
//covoiturage
   if(input.type_activity==1){
        var specific_data = {
            id:id_activity,
            lieu_depart:input.departure_location,
            lieu_arrivee:input.arrival_location,
            prix:input.cost
           
        };
        var query = connection.query("INSERT INTO covoiturage set ? ",specific_data, function(err, rows)
        {
            if (err)
                console.log("Error inserting : %s ",err );
            
            res.send(specific_data);
        });

    }//culture
    else if(input.type_activity==2){
        var specific_data = {
            id:id_activity,
            titre:input.title,
            lieu:input.location
        };
        var query = connection.query("INSERT INTO culture set ? ",specific_data, function(err, rows)
        {
            if (err)
                console.log("Error inserting : %s ",err );
            
            res.send(specific_data);
        });

    }//sport
    else if(input.type_activity==3){
        var specific_data = {
            id:id_activity,
            nom:input.name,
            titre:input.title,
            lieu:input.location
        };
        var query = connection.query("INSERT INTO sport set ? ",specific_data, function(err, rows)
        {
            if (err)
                console.log("Error inserting : %s ",err );
            
            res.send(specific_data);
        });

    }
        
        
       
};

exports.delete_activite = function(req,res){
    var id = req.params.id;
    
        connection.query("DELETE FROM activite WHERE id = ? ",[id], function(err, rows)
        {
            if(err)
                console.log("Error deleting : %s ",err );
            res.send('json');
        });
    
};
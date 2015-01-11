

var mysql = require('mysql');
 var connection = mysql.createConnection({
    host     : 'localhost',
  user     : 'root',
  //password: 'alphanicolala',
  database: 'amra_mmma'
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
    var type=req.params.type;
    var id_user=req.params.id_user;
    var table = null;

    if(type==null){
        //console.log("Type is null (all activity method)");
        //something's wrong
    } else {
        if(!type.localeCompare('125')){
            table='covoiturage';
        } else if (!type.localeCompare('489')){
            table='culture';
        } else if (!type.localeCompare('759app')){
            table='sport';
        } 

        if (!table){
            //something's wrong
        }
        else{

            connection.query('SELECT * FROM '+table+' x WHERE\n\
                  x.id_user !=? and x.id_status!=?',[id_user,id_status_delete],function(err,rows){
            if(err)
                console.log("Error Selecting : %s ",err );
                res.send(rows);               
             });
        }
    }
};



/*get list activity by user id **/
exports.all_activity_by_user = function(req, res){
     var type=req.params.type;
     var id_user=req.params.id_user;
     var id_status_delete=3;
     var table = null;
     var myActivities = [];
     /*var id_status_delete=3;
     connection.query('SELECT * FROM activite act,culture cul,covoiturage cov,sport sport'+
      'where act.id_user=? and act.id_status!='+id_status_delete,[id_user],function(err,rows){
     */
    if(type==null){
        console.log("Type is null (my activity method)");
        //something's wrong
    } else {
        if(!type.localeCompare('125')){
            table='covoiturage';
        } else if (!type.localeCompare('489')){
            table='culture';
        } else if (!type.localeCompare('759app')){
            table='sport';
        }

        //Recupère les activités crées par l'utilisateur
        connection.query('SELECT * FROM '+table+' x WHERE\n\
            x.id_user=?',[id_user],function(err,rows){
        if(err){
               console.log("Error Selecting : %s ",err );
            }
                myActivities[0]=rows;
             });


         //Récupère les activités rejoint par l'utilisateur
        connection.query('SELECT * FROM '+table+'_join x CROSS JOIN '+table+' y WHERE\n\
            x.id_user='+id_user+' AND x.id_activite = y.id',function(err,rows){

        if(err){
               console.log("Error Selecting : %s ",err );
            }
                myActivities[1]=rows;
                res.send(myActivities); 
             });
    }        

};



/*join activity */
exports.join_activity = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
    var resultJoin={
        result:'0'
    };
    
     
    //Check if it's not already joined
    var query = connection.query('SELECT * FROM '+input.type_activity+'_join'+' WHERE id_user='+input.id_user+' and id_activite='+input.id_activity,function(err,rows)
        {
            if(err)
                console.log("Error Selecting !! : %s ",err );
            
       
        //If the activity not joined yet
        if(JSON.stringify(rows) == "[]"){

            //Check the number            
            var query = connection.query('SELECT `nombre_actuel`, `nombre_max`\n\
                    FROM '+input.type_activity+' WHERE id=?',[input.id_activity],function(err,rows){
                if(err)
                    console.log("Error Selecting !! : %s ",err );

                var rowsNumber = JSON.parse(JSON.stringify(rows));

                //NOMBRE OK
                if(rows[0].nombre_actuel < rows[0].nombre_max){
                    var query = connection.query('INSERT INTO '+input.type_activity+'_join (`id_user`, `id_activite`)\n\
                        VALUES ('+input.id_user+','+input.id_activity+')',function(err,rows)
                    {
                        if(err){
                            console.log("Error Selecting : %s ",err.toString() );
                        }
                    });

                    //UPDATE ICI DU NOMBRE ACTUEL !
                    var newNombreActuel = (rows[0].nombre_actuel)+1;
                    var query = connection.query('UPDATE '+input.type_activity+' SET `nombre_actuel`='+newNombreActuel+
                        ' WHERE id=?',[input.id_activity] ,function(err,rows)
                       {
                           if(err)
                               console.log("Error while incrementing the nombre_actuel : %s ",err );

                        resultJoin.result='1';
                        res.send(resultJoin); 
                        });
                            
                 //NOMBRE NON OK
                } else {
                    console.log("dans le non ok")
                    resultJoin.result='0';
                    res.send(resultJoin); 
                }
            });
               
        //Si déjà rejoint !
        } else {
            resultJoin.result='2';
            console.log("Activity already joined.");
            res.send(resultJoin); 
        }
    });
};

/*quit activity */
exports.quit_activity = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var resultQuit={
        result:'0'
    };
    console.log("reqbody : "+input.id_activity+ " type "+input.type_activity);
    
        connection.query('DELETE FROM '+input.type_activity+'_join WHERE id_activite='+input.id_activity+' \n\
        and  id_user='+input.id_user , function(err, rows)
        {
            if(err){
                 console.log("Error quit activity : %s ",err );
            }else{
                //UPDATE images SET counter=counter+1 WHERE image_id=15
                var query = connection.query('UPDATE '+input.type_activity+' SET nombre_actuel= nombre_actuel-1'+
                        ' WHERE id=?',[input.id_activity] ,function(err,rows)
                       {
                           if(err){
                                console.log("Error while decrementing the nombre_actuel : %s ",err );
                           }else{
                                resultQuit.result='1';
                                res.send(resultQuit); 
                                console.log('result :'+ resultQuit.result);
                           }
                       
                        });
                
               
              
            }
               
          
        });
    
    
    
    
  /*  
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
        }); */
};

/*Create an activity*/
exports.create = function(req,res){
    console.log("SERVER BIEN RECU "+JSON.stringify(req.body));
    var input = JSON.parse(JSON.stringify(req.body));
    var id_activity;
    var result={result:0};
       
    //numero de l'activité par ordre alphabetique 
    //covoiturage
    if(input.type_activity==="1"){
        console.log("JE SUIS COVOITURAAAAAAGE");
        var specific_data = {
            date_activite:input.date_activity,
            heure_debut:input.start_time,
            heure_fin:input.stop_time,
            lieu_rdv: input.meeting_location,
            photo_activite:input.photo_activity,
            nombre_actuel:input.actual_number,
            nombre_max:input.max_number,
            description:input.description,
            id_user:input.id_user,
            id_status:1,
            lieu_depart:input.departure_location,
            lieu_arrivee:input.arrival_location,
            prix:input.cost
           
        };
        var query = connection.query("INSERT INTO covoiturage set ? ",specific_data, function(err, rows)
        {
            if (err){
                console.log("Error inserting covoiturage : %s ",err );           
            }
            else{
                id_activity=rows.insertId;
                console.log("ID ACT " + id_activity);
                // envoi du résultat au client
                result.result=1;
                console.log("Le résultat est : "+JSON.stringify(result));
                res.send(JSON.stringify(result));
            }
        });

    }//culture
    else if(input.type_activity === "2"){
        console.log("JE SUIS CULTUUUUUUUURE");
        var specific_data = {
            date_activite:input.date_activity,
            heure_debut:input.start_time,
            heure_fin:input.stop_time,
            lieu_rdv: input.meeting_location,
            photo_activite:input.photo_activity,
            nombre_actuel:input.actual_number,
            nombre_max:input.max_number,
            description:input.description,
            id_user:input.id_user,
            id_status:1,
            titre:input.title,
            lieu:input.location
        };
        var query = connection.query("INSERT INTO culture set ? ",specific_data, function(err, rows)
        {
            if (err){
            console.log("Error inserting culture : %s ",err );
            
            }
            else{
                id_activity=rows.insertId;
                console.log("ID ACT " + id_activity);
                // envoi du résultat au client
                result.result=1;
                console.log("Le résultat est : "+JSON.stringify(result));
                res.send(JSON.stringify(result));
            }
        });

    }//sport
    else if(input.type_activity === "3"){
        console.log("JE SUIS SPOOOOOOOOOORT");
        
        var specific_data = {
            date_activite:input.date_activity,
            heure_debut:input.start_time,
            heure_fin:input.stop_time,
            lieu_rdv: input.meeting_location,
            photo_activite:input.photo_activity,
            nombre_actuel:input.actual_number,
            nombre_max:input.max_number,
            description:input.description,
            id_user:1,
             //input.id_user
            id_status:1,
            nom:input.name,
            titre:input.title,
            lieu:input.location
        };
        
        var query = connection.query("INSERT INTO sport set ? ",[specific_data], function(err, rows)
        {
            if (err){
            console.log("Error inserting sport : %s ",err );
           
            }
            else{
                id_activity=rows.insertId;
                console.log("ID ACT " + id_activity);
                // envoi du résultat au client
                result.result=1;
                console.log("Le résultat est : "+JSON.stringify(result));
                res.send(JSON.stringify(result));
            }
        });       
        
    }      
};

exports.delete_activity = function(req,res){
   var input = JSON.parse(JSON.stringify(req.body));
    var resultDeleting={
        result:'0'
    };
    console.log("reqbody : "+input.id_activity+ " type "+input.type_activity);
    
        connection.query('DELETE FROM '+input.type_activity+' WHERE id='+input.id_activity, function(err, rows)
        {
            if(err){
                 console.log("Error deleting : %s ",err );
            }else{
                resultDeleting.result='1';
                console.log('result :'+ resultDeleting.result);
                res.send(resultDeleting);
            }
               
          
        });
    
};

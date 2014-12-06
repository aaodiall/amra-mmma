

var mysql = require('mysql');
 var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'rootpwd',
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



/*Get the user*/
exports.get = function(req, res){
    var id = req.params.id;
    
        var query = connection.query('SELECT * FROM user WHERE id = ?',[id],function(err,rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );
             console.log("rows ",rows[0].mail );
             res.redirect('/');
            
        });
        //console.log(query.sql);
  
};

/*Save the user*/
exports.save = function(req,res){
   console.log(req.body);
    var input = JSON.parse(JSON.stringify(req.body));
   
        var data = {
            
            mail : input.email,
            photo : input.photo
        };
        var query = connection.query("INSERT INTO user set ? ",data, function(err, rows)
        {
            if (err)
                console.log("Error inserting : %s ",err );
             console.log("rows ",rows.insertId );
            res.send(data);
        });
       
};


/*Create an activity*/
exports.create = function(req,res){
    console.log("SERVER BIEN RECU "+JSON.stringify(req.body));
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
    var query = connection.query("INSERT INTO activite set ? ",data, function(err, rows){
        if (err){
            console.log("Error inserting : %s ",err );
            result={result:0};
        }
        else{   
            id_activity=rows.insertId;
            result={result:1};
        }
    });
       
    
    //numero de l'activité par ordre alphabetique 
    //covoiturage
    if(input.type_activity===1){
        var specific_data = {
            id:id_activity,
            lieu_depart:input.departure_location,
            lieu_arrivee:input.arrival_location,
            prix:input.cost
           
        };
        var query = connection.query("INSERT INTO covoiturage set ? ",specific_data, function(err, rows)
        {
            if (err){
            console.log("Error inserting covoiturage : %s ",err );
            result={result:0};
            }
            else{
                result={result:1};
            }
        });

    }//culture
    else if(input.type_activity === 2){
        var specific_data = {
            id:id_activity,
            titre:input.title,
            lieu:input.location
        };
        var query = connection.query("INSERT INTO culture set ? ",specific_data, function(err, rows)
        {
            if (err){
            console.log("Error inserting culture : %s ",err );
            result={result:0};
            }
            else{
                result={result:1};
            }
        });

    }//sport
    else if(input.type_activity === 3){
        var specific_data = {
            id:id_activity,
            nom:input.name,
            titre:input.title,
            lieu:input.location
        };
        var query = connection.query("INSERT INTO sport set ? ",specific_data, function(err, rows)
        {
            if (err){
            console.log("Error inserting sport : %s ",err );
            result={result:0};
            }
            else{
                result={result:1};
            }
        });
        
        //send result to the client
        console.log("Le résultat est : "+JSON.stringify(result));
        res.send(JSON.stringify(result));
    }
        
        
       
};


/*exports.save_edit = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    req.getConnection(function (err, connection) {
        var data = {
            name : input.name,
            address : input.address,
            email : input.email,
            phone : input.phone
        };
        connection.query("UPDATE user set ? WHERE id = ? ",[data,id], function(err, rows)
        {
            if (err)
                console.log("Error Updating : %s ",err );
            res.redirect('/users');
        });
    });
};
exports.delete_user = function(req,res){
    var id = req.params.id;
    req.getConnection(function (err, connection) {
        connection.query("DELETE FROM user WHERE id = ? ",[id], function(err, rows)
        {
            if(err)
                console.log("Error deleting : %s ",err );
            res.redirect('/users');
        });
    });
};
/*Edit the user*/
/*exports.edit = function(req, res){
    var id = req.params.id;
    req.getConnection(function(err,connection){
        var query = connection.query('SELECT * FROM user WHERE id = ?',[id],function(err,rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );
             console.log("rows ",rows );
            res.render('edit_user',{page_title:"Edit users - Node.js",data:rows});
        });
        //console.log(query.sql);
    });
};*/
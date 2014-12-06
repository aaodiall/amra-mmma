

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database: 'amra_mmma',
    password:'alphanicolala'
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
        password: 'alpha',
        photo : 'input.photo'
    };
    var query = connection.query("INSERT INTO user set ? ",[data], function(err, rows)
    {
        if (err)
            console.log("Error inserting : %s ",err );
        //console.log("rows ",rows[0].insertId );
        res.send(data);
    });
    
};
/*authentifie the user*/
exports.authentification = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var resultBack={
        result:'0',
        id_user:''
    };
    console.log('avant query 1 '+ input);
    var query = connection.query("select * from user where mail=? ",[input.email], function(err, rows)
    {
         console.log("dans query  1: %s ",JSON.stringify(rows) );
        if (rows.length===0){
            console.log("Error authentification query 1: %s ",err );
            res.send(resultBack);
        }else{
            var query = connection.query("select * from user where password=? ",[input.password], function(err1, rows)
            {
                 
                if (rows.length===0){
                    console.log("Error authentification query 2: %s ",err1 );
                    res.send(resultBack);
                }else{
                  
                   resultBack.result='1';
                 resultBack.id_user=rows[0].id;
                   res.send(resultBack);
                }
                
                
            });
        }
        
        
    });
    
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

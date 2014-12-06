Ext.define('Lan.model.user', {
    extend: 'Ext.data.Model',
    xtype: 'user',
    config: {
        // specify the id field as the identifier  
        idProperty: 'id',
        // specify universal unique id policy
        identifier: 'uuid',
        fields: [
           {name:'id', type:'auto', isUnique: true},
           {name:'email', type:'string'},
           {name:'password', type:'string'},
           {name:'photo', type:'string'}
           ],
           validations:[
               { type:'presence',field:'email',message:'entrer email'},
               { type:'email',field:'email',message:'format email requit'},
                { type:'presence',field:'password',message:'entrer mot de passe'}
           ]
      }
});
Ext.define('Lan.model.User', {
    extend: 'Ext.data.Model',
    xtype: 'user',
    config: {
        // specify the id field as the identifier  
        idProperty: 'id',
        // specify universal unique id policy
        identifier: 'uuid',
        fields: [
           {name:'id', type:'auto', isUnique: true},
           {name:'name', type:'string'},
           {name:'email', type:'string'},
           {name:'age', type:'int'}
           ],
    validations: [
        {
            type: 'presence', field: 'name', message: 'name is required'
        },  {
            type: 'email', field: 'email', message: 'email format is not valid'
        }, {
            type: 'presence', field: 'age', message: 'age is required'
        }]
      }
});
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
           {name:'email', type:'string'},
           {name:'photo', type:'string'}
           ]
      }
});
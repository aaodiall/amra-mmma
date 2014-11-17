Ext.define('Lan.model.activity', {
    extend: 'Ext.data.Model',
    xtype: 'activity',
    config: {
        // specify the id field as the identifier  
        idProperty: 'id',
        // specify universal unique id policy
        identifier: 'uuid',
        fields: [
           {name:'id', type:'auto', isUnique: true},
           {name:'date_activity', type:'Date'},
           {name:'start_time', type:'string'},
           {name:'stop_time', type:'string'},
           {name:'meeting_location', type:'string'},
           {name:'photo_activity', type:'string'},
           {name:'actual_number', type:'integer'},
           {name:'max_number', type:'integer'},
           {name:'description', type:'string'},
           {name:'id_user', type:'string'},
           {name:'id_status', type:'integer'},
           {name:'title', type:'string'},
           {name:'location', type:'string'},
           {name:'departure_location', type:'string'},
           {name:'arrival_location', type:'string'},
           {name:'cost', type:'float'},
           {name:'type_activity', type:'string'}
        ]
    }
});

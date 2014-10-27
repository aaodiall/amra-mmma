Ext.define('Lan.model.activity', {
    extend: 'Ext.data.Model',
    xtype: 'activity',
    config: {
        // specify the id field as the identifier  
        idProperty: 'id',
        // specify universal unique id policy
        //identifier: 'uuid',
        fields: [
           {name:'id', type:'auto', isUnique: true},
           {name:'dateActivity', type:'Date'},
           {name:'startTime', type:'Date'},
           {name:'stopTime', type:'Date'},
           {name:'meetingLocation', type:'string'},
           {name:'photoActivity', type:'string'},
           {name:'actualNumber', type:'integer'},
           {name:'maxNumber', type:'integer'},
           {name:'description', type:'string'},
           {name:'idUser', type:'integer'},
           {name:'idStatus', type:'integer'},
           {name:'title', type:'string'},
           {name:'location', type:'string'},
           {name:'departureLocation', type:'string'},
           {name:'arrivalLocation', type:'string'},
           {name:'cost', type:'float'},
           {name:'typeActivity', type:'string'}
        ]
      }
});
Ext.define('Lan.store.activityStore', {
    extend: 'Ext.data.Store',
    xtype: 'activitystore',
    config: {
        model: 'Lan.model.activity',
        // specify the store id
          fields: ['id_user', 'start_time'],
          storeId: 'activityStore',
        autoLoad: true,
        autoSync: true,
        sorters:[{ property: 'date_activity', direction: 'ASC'}],
       grouper: {
     sortProperty: 'date_activity',
        direction: 'ASC',
        groupFn: function (record) { 
            if (record && record.data.date_activity) {
                return convertDate(record.data.date_activity);
            } else {
                return '';
            }
        }
    } ,   
        
        data: [
            { date_activity: "11/09/2014", description: "Washington" ,photo_activity:"resources/icons/Icon.png"},
            { date_activity: "11/09/2014", description: "Adams" ,photo_activity:"Icon.png"},
            { date_activity: "11/10/2014", description: "Jefferson",photo_activity:"Icon.png" },
            { date_activity: "11/10/2014", description: "Madison",photo_activity:"Icon.png" },
            { date_activity: "11/08/2014", description:"Monroe",photo_activity:"Icon.png" }
            
        ],
        proxy: {
            // store will be locally persisted
            type: "localstorage",
            id: "LanLocalStorage"            
        }
    }
});



function convertDate(rec){
  var formated = Ext.Date.format(new Date(rec),'d-m-Y');
return formated;
}

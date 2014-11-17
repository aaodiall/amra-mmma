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
        sorters: [{
            property: 'name',
            direction: 'ASC'
        }],
        grouper: {
          groupFn: function(record) {
           return record.get('id_user')[0];
          }
        },
        proxy: {
            // store will be locally persisted
            type: "localstorage",
            id: "LanLocalStorage"            
        }
    }});
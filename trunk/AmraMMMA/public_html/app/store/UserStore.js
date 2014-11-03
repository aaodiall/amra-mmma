Ext.define('Lan.store.UserStore', {
    extend: 'Ext.data.Store',
    xtype: 'userstore',
    config: {
        model: 'Lan.model.User',
        // specify the store id
        storeId: 'userStore',
        autoLoad: true,
        autoSync: true,
        sorters: [{
            property: 'name',
            direction: 'ASC'
        }],
        grouper: {
          groupFn: function(record) {
           return record.get('name')[0];
          }
        },
        proxy: {
            // store will be locally persisted
            type: "localstorage",
            id: "SenchaMVCLocalStorage"            
        }
    }
});       
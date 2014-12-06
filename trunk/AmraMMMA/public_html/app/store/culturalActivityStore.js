Ext.define('Lan.store.culturalActivityStore', {
    extend: 'Ext.data.Store',
    xtype: 'culturalactivitystore',
    config: {
        model: 'Lan.model.activity',
        // specify the store id
        fields: ['id_user', 'start_time'],
        storeId: 'culturalActivityStore',
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
    },data: [],
    }
});



function convertDate(rec){
  var formated = Ext.Date.format(new Date(rec),'d-m-Y');
return formated;
}

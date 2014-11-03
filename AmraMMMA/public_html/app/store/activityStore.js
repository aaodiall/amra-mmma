Ext.define('Lan.store.activityStore', {
    extend: 'Ext.data.Store',
    xtype: 'activitystore',
    config: {
        model: 'Lan.model.activity',
        // specify the store id
        storeId: 'activityStore',
        autoLoad: true,
        autoSync: true,
        sorters: [{
            property: 'name',
            direction: 'ASC'
        }],
        grouper: {
          groupFn: function(record) {
           return record.get('organisateur')[0];
          }
        },
        proxy: {
            // store will be locally persisted
            type: "localstorage",
            id: "LanLocalStorage"            
        }
    }
});
/*
Ext.application({
 name: 'Lan',
 launch:function() {
 // static assignation of store values
 var store = Ext.create('Lan.store.activityStore',{
 data: [
          { organisateur:'nico', heure_debut:'14h', heure_fin:'18h',lieu_rdv:'Rangueil',
              nombre_max:10, description:'Faire un foot blablabla'} 
      ]
 });

// definition of a list based on the store values. 
 var list = Ext.create('Ext.List', {
   fullscreen: true,
   itemTpl: '<div class="activity">{organisateur} {date_debut}</div>',
   store: store,
   grouped: true,
   listeners:  {
    itemtap: function (dataview, index, target, record, e, eOpts) {
        var organisateur = record.get('Nom organisateur');
        var heure_debut = record.get('heure de début de l activité');
        var heure_fin = record.get('heure de fin de l activité');
        var nombre_max = record.get('Nombre maximum de participants');
        var description = record.get('Description');
        Ext.Msg.alert('User information: name/email/age', organisateur+'/'+heure_debut+'/'+description);  
    }
  }
});
 }
});*/
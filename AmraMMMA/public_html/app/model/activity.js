Ext.define('Lan.model.activity', {
    extend: 'Ext.data.Model',
    xtype: 'activity',
    config: {
        // specify the id field as the identifier  
        idProperty: 'id',
        // specify universal unique id policy
        identifier: 'uuid',
        fields: [
            {name: 'organisateur', type: 'string'},
            {name: 'heure_debut', type: 'string'},
            {name: 'heure_fin', type: 'string'},
            {name: 'lieu_rdv', type: 'string'},
            {name: 'nombre_max', type: 'int'},
            {name: 'description', type: 'string'},
        ]
    }
});
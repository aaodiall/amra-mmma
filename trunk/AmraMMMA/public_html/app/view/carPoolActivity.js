Ext.define("Lan.view.carPoolActivity", {
    extend: 'Ext.dataview.List',
    xtype: 'carpoolingactivity',
    config: {
          title: 'List',
          iconCls: 'bookmarks',
          itemTpl: '<div class="user">Name: <strong>{name} </strong><br/>{email} {age}</div>',
        }
});       

/*Ext.define('JWF.view.run.List', {
    extend: 'Ext.dataview.List',

    config: {
        itemHeight: 75,
        emptyText: 'Add some Runs, then invite your friends!',
        store: 'Runs',
        disableSelection: true,
        itemTpl: Ext.create('Ext.XTemplate', 
            '<div class="run">',
            '    <img src="https://graph.facebook.com/{profileId}/picture?type=square" />',
            '    <div class="info">',
            '        <b>{name}</b> ',
            '    </div>',
            '    <div class="activity">{activity}</div>'
            
            
        )
    }

});*/
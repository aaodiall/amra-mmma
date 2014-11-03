Ext.define("Lan.view.carPoolActivity", {
    extend: 'Ext.dataview.List',
    xtype: 'carpoolingactivity',
    config: {
          title: 'List',
          iconCls: 'bookmarks',
          itemTpl: '<div class="user">Name: <strong>{name} </strong><br/>{email} {age}</div>',
        }
});       
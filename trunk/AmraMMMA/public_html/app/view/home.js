Ext.define("Lan.view.home", {
    extend: 'Ext.dataview.List',
    xtype: 'home',
    config: {
          title: 'List',
          iconCls: 'bookmarks',
          itemTpl: '<div class="user">Name: <strong>{name} </strong><br/>{email} {age}</div>',
        }
});       

Ext.define("Lan.view.culturalActivity", {
    extend: 'Ext.form.Panel',
    xtype: 'culturalXtype',
    config: {
          title: 'List',
          iconCls: 'bookmarks',
          itemTpl: '<div class="user">Name: <strong>{name} </strong><br/>{email} {age}</div>',
        }
});
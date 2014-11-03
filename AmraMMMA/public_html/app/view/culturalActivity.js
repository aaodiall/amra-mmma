Ext.define("Lan.view.culturalActivity", {
    extend: 'Ext.form.Panel',
    xtype: 'culturalactivity',
    config: {
          title: 'List',
          iconCls: 'bookmarks',
          itemTpl: '<div class="user">Name: <strong>{name} </strong><br/>{email} {age}</div>',
        }
});
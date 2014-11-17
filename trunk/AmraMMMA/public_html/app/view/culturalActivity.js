Ext.define("Lan.view.culturalActivity", {
    extend: 'Ext.dataview.List',
    xtype: 'culturalactivity',
    config: {
          title: 'List',
          itemTpl: '<div class="description">Name: <strong>{description} </strong><br/></div>',
        }
});       

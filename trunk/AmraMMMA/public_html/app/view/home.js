Ext.define("Lan.view.home", {
    extend: 'Ext.tab.Panel',
    xtype: 'home',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        
      tabBarPosition: 'top',
      
      tabBar : { // To center the tab in the tab bar
        layout : {
                    pack : 'center'
                 } 
      },
      items: [
      
        {
            title: 'Sport',
            iconCls: 'user', iconMask: true,
            style: 'background-color: #F6E3CE; color: white',
            xtype: 'mysportactivity'
        }, {
            title: 'Cultural',
            style: 'background-color: #E0E0F8',
            xtype: 'myculturalactivity'
        }, {
            title: 'Car-pooling',
            style: 'background-color: #F2F5A9; color: white',
            xtype: 'mycarpoolactivity'
        }]
  }
});


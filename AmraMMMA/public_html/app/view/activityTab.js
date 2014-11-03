Ext.define("Lan.view.activityTab", {
    extend: 'Ext.tab.Panel',
    xtype: 'activitytab',
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
            style: 'background-color: #e17467; color: white',
            xtype: 'sportactivity'
        }, {
            title: 'Cultural',
            iconCls: 'bookmarks', iconMask: true,
            style: 'background-color: #f6eb69',
            xtype: 'culturalactivity'
        }, {
            title: 'Car-pooling',
            iconCls: 'bookmarks', iconMask: true,
            style: 'background-color: #f6ebaa',
            xtype: 'carpoolingactivity'
        }]
  }
});


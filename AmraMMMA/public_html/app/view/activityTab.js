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
            style: 'background-color: #F6E3CE; color: black',
            xtype: 'sportactivity'
        }, {
            title: 'Cultural',
            iconCls: 'bookmarks', iconMask: true,
            style: 'background-color: #E0E0F8',
            xtype: 'culturalactivity'
        }, {
            title: 'Carpool',
            iconCls: 'bookmarks', iconMask: true,
            style: 'background-color: #F2F5A9; color: black',
            xtype: 'carpoolactivity'
        }]
  }
});


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
            style: 'background-color: #f6eb69; color: black',
            xtype: 'sportactivity'
        }, {
            title: 'Cultural',
            iconCls: 'bookmarks', iconMask: true,
            style: 'background-color: #f6ebcc',
            xtype: 'culturalactivity'
        }, {
            title: 'Carpool',
            iconCls: 'bookmarks', iconMask: true,
            style: 'background-color: #e17467; color: black',
            xtype: 'carpoolactivity'
        }]
  }
});


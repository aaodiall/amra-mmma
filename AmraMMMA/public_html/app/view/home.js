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
            style: 'background-color: #ea8467; color: white',
            xtype: 'mysportactivity'
        }, {
            title: 'Cultural',
           
            style: 'background-color: #f6eb69',
            xtype: 'myculturalactivity'
        }, {
            title: 'Car-pooling',
            
            
            xtype: 'mycarpoolactivity'
        }]
  }
});


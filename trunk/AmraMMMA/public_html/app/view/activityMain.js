Ext.define("Lan.view.activityMain", {
    extend: 'Ext.ux.slidenavigation.collapsible.View',
	xtype: 'maincontainer',
    
    requires: [
        'Ext.Container',
        'Ext.MessageBox',
        'Ext.Panel',
        'Ext.tab.Panel',
        'Ext.Toolbar',
        'Ext.event.publisher.Dom',
        'Ext.TitleBar'
    ],
    
    config: {
        
        tabBarPosition: 'top',
      
      tabBar : { // To center the tab in the tab bar
        layout : {
                    pack : 'center'
                 } 
      },
	  
        fullscreen: true,
         
        /**
         *  Any component within the container with an 'x-toolbar' class
         *  will be draggable.  To disable draggin all together, set this
         *  to false.
         */
        slideSelector: 'x-toolbar',
        
        /**
         *  Time in milliseconds to animate the closing of the container
         *  after an item has been clicked on in the list.
         */
        selectSlideDuration: 200,
         
        /**
         *  This allows us to configure how the actual list container
         *  looks.  Here we've added a custom search field and have
         *  modified the width.
         */
        list: {
            maxDrag: 400,
            width: 300,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',                    
                title: {
                    title: 'AMRA',
                    centered: true,
                    width: 200
                }
                
                /**
                 *  Here's an example of how to add a different type of
                 *  component into the toolbar of the list.
                 */
                /*
                items: [{
                    xtype: 'searchfield',
                    placeHolder: 'search',
                    width: 180
                }]
                */
            }]
            
        },
        
        /**
         *  These are the default values to apply to the items within the
         *  container.
         */
        defaults: {
            style: 'background: #fff',
            xtype: 'container'
        },
        
        items: [
        {
          title: 'Mes activités',
          leaf: true,
          slideButton: {
                selector: 'toolbar'
            },
            items: [{
                xtype: 'toolbar',
                title: 'Mes Activités',
                docked: 'top'
            },{
                xtype: 'panel'
               
            }]
         
        },
        {
          title: 'Autres activités',
          leaf: true,
          slideButton: {
                selector: 'titlebar'
            },
            
                items: [
      {
        xtype:'titlebar',
        docked:'top',
        title:'Activity'
        },
    
        {
            title: 'activityTab',
            iconCls: 'user', iconMask: true,
            style: 'background-color: #e17467; color: white',
            xtype: 'activitytab'
        }]
         
        },
        {
          title: 'Créer une activité',
          items:[{
            title: 'Créer une activité sportive',      
          leaf: true,
          slideButton: {
                selector: 'toolbar'
            },
            items: [{
                xtype: 'toolbar',
                title: 'Créer une activité sportive',
                docked: 'top'
            },{
                xtype: 'createsportactivity'
               
            }] 
    },
    {
         title: 'Créer une activité culturelle',
        leaf: true,
        slideButton: {
                selector: 'toolbar'
            },
            items: [{
                xtype: 'toolbar',
                title: 'Créer une activité culturelle',
                docked: 'top'
            },{
                xtype: 'createculturalactivity'
               
            }]
    },
    {
         title: 'Proposer un trajet',
        leaf: true,
        slideButton: {
                selector: 'toolbar'
            },
            items: [{
                xtype: 'toolbar',
                title: 'Proposer un trajet',
                docked: 'top'
            },{
                xtype: 'createcarpoolactivity'
               
            }] 
          }]
          
          
         
        },
        {
          title: 'A propos',
          leaf: true,
          slideButton: {
                selector: 'toolbar'
            },
            items: [{
                xtype: 'toolbar',
                title: 'A propos',
                docked: 'top'
            },{
                xtype: 'panel'
               
            }]
         
        },
         {
          title: 'Déconnexion',
          leaf: true,
          slideButton: {
                selector: 'toolbar'
            },
            items: [{
                xtype: 'toolbar',
                title: 'Item 1',
                docked: 'top'
            },{
                xtype: 'panel'
               
            }]
         
        }
    ]
    }
});

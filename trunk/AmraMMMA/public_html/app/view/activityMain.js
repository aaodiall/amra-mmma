Ext.define("Lan.view.activityMain", {
    extend: 'Ext.ux.slidenavigation.collapsible.View',
	xtype: 'maincontainer',
    
    requires: [
        'Ext.Container',
        'Ext.MessageBox',
        'Ext.Panel',
        'Ext.Toolbar',
        'Ext.event.publisher.Dom'
    ],
    
    config: {
	  
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
                selector: 'toolbar'
            },
            items: [
      {
        xtype:'titlebar',
        docked:'top',
        title:'Activity',
        items:[
            {
                iconCls:'more',
                iconMask:true,
                align:'left'
            },
            {
                iconCls:'search',
                iconMask:true,
                align:'right'
            }
        ]},
    
        {
            title: 'Sport',
            iconCls: 'user', iconMask: true,
            style: 'background-color: #e17467; color: white',
            xtype: 'sportactivity'
        }, {
            title: 'Cultural',
            iconCls: 'bookmarks', iconMask: true,
            style: 'background-color: #f6eb69',
            xtype: 'culturalXtype'
        }, {
            title: 'Car-pooling',
            iconCls: 'bookmarks', iconMask: true,
            style: 'background-color: #f6ebaa',
            xtype: 'carpoolingXtype'
        }]
         
        },
        {
          title: 'Créer une activité',
          items:[{
            title: 'Sport',      
          leaf: true,
          slideButton: {
                selector: 'toolbar'
            },
            items: [{
                xtype: 'toolbar',
                title: 'Sport',
                docked: 'top'
            },{
                xtype: 'createactivity'
               
            }] 
    },
    {
         title: 'Culturelle',
        leaf: true,
        slideButton: {
                selector: 'toolbar'
            },
            items: [{
                xtype: 'toolbar',
                title: 'Culturelle',
                docked: 'top'
            },{
                xtype: 'createactivity'
               
            }]
    },
    {
         title: 'Covoitrage',
        leaf: true,
        slideButton: {
                selector: 'toolbar'
            },
            items: [{
                xtype: 'toolbar',
                title: 'Covoitrage',
                docked: 'top'
            },{
                xtype: 'createactivity'
               
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

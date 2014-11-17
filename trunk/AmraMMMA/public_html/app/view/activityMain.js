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
       
        id: 'mainId',
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
                xtype: 'sportactivity'
            }]
         
        },{
          title: 'Autres activités',
          leaf: true,
          slideButton: {
                selector: 'toolbar'
            },
            
        items: [{
                xtype:'toolbar',
                title: 'Autres activités',
                docked:'top'
            },{
                xtype:'tabpanel',
                title: 'Onglets des autres activités',
                tabBar : { // To center the tab in the tab bar
                    layout : {
                       pack : 'center'
                    } 
                },
                items:[
                {
                    title: 'Sport',
                    style: 'background-color: #f6eb69; color: black',
                    xtype: 'sportactivity'
                }, {
                    title: 'Cultural',
                    style: 'background-color: #f6ebcc',
                }, {
                    title: 'Car-pooling',
                    style: 'background-color: #e17467; color: black',
                }]
             },/*{
                   xtype:'sportactivity'
             }*/]},
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
    },
    
    initialize: function(){
           this.callParent();

           //  record is visible
           console.log("Dans le activityMain : ");
           //if (!Ext.getComponent('sportItemId')){
           //     console.log("Dans le IF du activityMain");
                Ext.create('Lan.view.sportActivity');
           // }   
         }
});
Ext.define("Lan.view.sportActivity", {
    extend: 'Ext.dataview.List',
    xtype: 'sportactivity',
    itemId :'sportItemId',
    config: {
          title: 'Sport',
          iconCls: 'bookmarks',
          itemTpl: '<div class="user">\n\
                        Organisateur : <strong>{id_user}</strong>\n\
                        <br>Lieu : <strong>{location}</strong>\n\
                    </div>'
        },
        
        initialize: function(){
           this.callParent();

           //  record is visible
           console.log("Dans le sport activity" + this);
         }
});       

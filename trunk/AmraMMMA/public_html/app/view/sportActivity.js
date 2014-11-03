Ext.define("Lan.view.sportActivity", {
    extend: 'Ext.dataview.List',
    xtype: 'sportactivity',
    config: {
          title: 'List',
          iconCls: 'bookmarks',
          itemTpl: '<div class="user">\n\
                        Organisateur: <strong>{organisateur}</strong>\n\
                        <br>Lieu de l\'activite :{lieu_rdv}\n\
                    </div>'
        }
});       

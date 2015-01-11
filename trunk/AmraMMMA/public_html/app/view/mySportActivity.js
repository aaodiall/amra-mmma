Ext.define("Lan.view.mySportActivity", {
    extend: 'Ext.List',
    xtype: 'mysportactivity',
    requires: ['Lan.store.mySportActivityStore'],
    config: {
          grouped: true,
         
          itemTpl: '<div class="myPicture">' +
        '<img src="http://img15.hostingpics.net/pics/15716613966994logodusport.png" height="55" width="60" alt="picture" />' +
        '</div>' +
        '<div class="myContent">'+
        '<div><b>Activité : </b>{title}<br>'+
        '<b> Lieu :</b> {location}<span class="marge"><b>{max_number} personnes maximum</b></span></div>',
      
        onItemDisclosure:true,
          store: 'mySportActivityStore'
        }
});

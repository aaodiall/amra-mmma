Ext.define("Lan.view.myCulturalActivity", {
    extend: 'Ext.List',
    xtype: 'myculturalactivity',
    requires: ['Lan.store.myCulturalActivityStore'],
    config: {
          grouped: true,
         
          itemTpl: '<div class="myPicture">' +
        '<img src="http://img15.hostingpics.net/pics/144423logocin.png"  height="55" width="60" alt="picture" />' +
        '</div>' +
        '<div class="myContent">'+
        '<div><b>Activité : </b>{title}<br>'+
        '<b> Lieu :</b> {location}<span class="marge"><b>{max_number} personnes maximum</b></span></div>',
      
        onItemDisclosure:true,
          store: 'myCulturalActivityStore'
        }
});

Ext.define("Lan.view.culturalActivity", {
    extend: 'Ext.List',
    xtype: 'culturalactivity',
    requires: ['Lan.store.culturalActivityStore'],
    config: {
          grouped: true,
         
          itemTpl: '<div class="myPicture">' +
        '<img src="http://img15.hostingpics.net/pics/144423logocin.png"  height="55" width="60" alt="picture" />' +
        '</div>' +
        '<div class="myContent">'+
        '<div><b>Activité : </b>{title}<br>'+
        '<b> Lieu :</b> {location}<span class="marge"><b>{max_number} personnes maximum</b></span></div>',
      
        onItemDisclosure:true,
          store: 'culturalActivityStore'
        }
});
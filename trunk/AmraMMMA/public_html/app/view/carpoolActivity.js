Ext.define("Lan.view.carpoolActivity", {
    extend: 'Ext.List',
    xtype: 'carpoolactivity',
    requires: ['Lan.store.carpoolActivityStore'],
    config: {
          grouped: true,
         
          itemTpl: '<div class="myPicture">' +
        '<img src="http://img15.hostingpics.net/pics/677458covoiturage2g.png"  height="55" width="60" alt="picture" />' +
        '</div>' +
        '<div class="myContent">'+
        '<div><b>Lieu départ : </b>{departure_location} et Lieu arrivée : {arrival_location}<br>'+
        
        '<b> Description :</b> {description}<span class="marge"><b>{max_number} personnes maximum</b></span></div>',
      
        onItemDisclosure:true,
          store: 'carpoolActivityStore'
        }
});
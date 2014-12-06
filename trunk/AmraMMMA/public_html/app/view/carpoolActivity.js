Ext.define("Lan.view.carpoolActivity", {
    extend: 'Ext.List',
    xtype: 'carpoolactivity',
    requires: ['Lan.store.carpoolActivityStore'],
    config: {
          grouped: true,
         
          itemTpl: '<div class="myPicture">' +
        '<img src="http://upload.wikimedia.org/wikipedia/commons/9/98/RomanA-01.svg" alt="picture" />' +
        '</div>' +
        '<div class="myContent">'+
        '<div><b>Lieu départ : </b>{departure_location} et Lieu arrivée : {arrival_location}<br>'+
        
        '<b> Description :</b> {description}<span class="marge"><b>{max_number} personnes maximum</b></span></div>',
      
        onItemDisclosure:true,
          store: 'carpoolActivityStore'
        }
});
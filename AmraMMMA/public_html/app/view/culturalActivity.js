Ext.define("Lan.view.culturalActivity", {
    extend: 'Ext.List',
    xtype: 'culturalactivity',
    requires: ['Lan.store.culturalActivityStore'],
    config: {
          grouped: true,
         
          itemTpl: '<div class="myPicture">' +
        '<img src="http://upload.wikimedia.org/wikipedia/commons/9/98/RomanA-01.svg" alt="picture" />' +
        '</div>' +
        '<div class="myContent">'+
        '<div><b>Activité : </b>{title}<br>'+
        '<b> Lieu :</b> {location}<span class="marge"><b>{max_number} personnes maximum</b></span></div>',
      
        onItemDisclosure:true,
          store: 'culturalActivityStore'
        }
});
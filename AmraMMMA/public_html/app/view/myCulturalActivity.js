/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



Ext.define("Lan.view.myCulturalActivity", {
    extend: 'Ext.List',
    xtype: 'myculturalactivity',
    requires: ['Lan.store.myCulturalActivityStore'],
    config: {
          grouped: true,
         
          itemTpl: '<div class="myPicture">' +
        '<img src="http://m.c.lnkd.licdn.com/mpr/pub/image-gZnyA1nj_ATBk25ZNRFONL2Xv1X6OETBW0QZCxQVvxBVXZBfgZnZdK1jvKDMBpxyFkkh/lala-aysha-gaye.jpg"  height="55" width="55" alt="picture" />' +
        '</div>' +
        '<div class="myContent">'+
        '<div><b>Activité : </b>{title}<br>'+
        '<b> Lieu :</b> {location}<span class="marge"><b>{max_number} personnes maximum</b></span></div>',
      
        onItemDisclosure:true,
          store: 'myCulturalActivityStore'
        }
});

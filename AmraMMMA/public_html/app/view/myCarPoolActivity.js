/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define("Lan.view.myCarPoolActivity", {
    extend: 'Ext.List',
    xtype: 'mycarpoolactivity',
    requires: ['Lan.store.activityStore'],
    config: {
          grouped: true,
         
          itemTpl: '<div class="myPicture">' +
        '<img scr="http://fr.wikipedia.org/wiki/Alpha#mediaviewer/File:RomanA-01.svg" alt="alt_text" />' +
        '</div>' +
        '<div class="myContent">'+
        '<div><b>{description}</b><span class="marge"><b>8h00</b></span></div>'+
        '{description}<span class="marge"><b>2€/Place</b></span></div>',
      
        onItemDisclosure:true,
          store: 'activityStore'
        }
});

    
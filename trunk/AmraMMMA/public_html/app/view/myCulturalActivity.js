/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



Ext.define("Lan.view.myCulturalActivity", {
    extend: 'Ext.List',
    xtype: 'myculturalactivity',
    requires: ['Lan.store.activityStore'],
    config: {
          grouped: true,
         
          itemTpl: '<div class="myPicture">' +
        '<img scr="http://fr.wikipedia.org/wiki/Alpha#mediaviewer/File:RomanA-01.svg" alt="alt_text" />' +
        '</div>' +
        '<div class="myContent">'+
        '<div><b>{description}</b><br>'+
        '{description}<span class="marge"><b>2 Places</b></span></div>',
      
        onItemDisclosure:true,
          store: 'activityStore'
        }
});

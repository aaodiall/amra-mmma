//<debug>
Ext.Loader.setConfig({enabled:true});
Ext.Loader.setPath('Ext.ux', 'app/ux');
//</debug>
//
Ext.application({
    name: 'Lan',
    
    // MVC components are specified
    models: ['activity'],
    views: ['activityMain','activityTab','culturalActivity','sportActivity','carpoolActivity',
        'home','myCulturalActivity','mySportActivity','myCarpoolActivity','createSportActivity',
        'createCulturalActivity','createCarpoolActivity','login','detailSportActivity',
        'detailMyCarpoolActivity','detailMyCulturalActivity','detailMySportActivity'],
    
    controllers: ['controller'],
    stores: ['activityStore','myCarpoolActivityStore','myCulturalActivityStore','mySportActivityStore',
            'sportActivityStore','culturalActivityStore','carpoolActivityStore'],

     icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    }

});

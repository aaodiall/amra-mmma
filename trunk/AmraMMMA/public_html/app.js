Ext.application({
    name: 'Lan',
    
    // MVC components are specified
    models: ['user','activity'],
    views: ['main','activityMain','carPoolActivity','createActivity','culturalActivity','detailActivity','home','login','sportActivity'],
    controllers: ['controller'],
    stores: ['userStore','activityStore']

});

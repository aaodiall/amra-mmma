Ext.define('Lan.view.login', {
 extend: 'Ext.tab.Panel',
xtype: 'login',
requires: [
        'Ext.TitleBar'
    ],
config: {
    title:'login',
    tabBarPosition: 'top',
    tabBar : { // To center the tab in the tab bar
        layout : {
                    pack : 'center'
                 } 
      },
    fullscreen: true,
    //mettre une image dans le link facebook authentification
    html: '<div class="facebook">\n\
<center><a href="/auth/facebook"><span class="fa fa-facebook"></span> \n\
<img src="http://www.oficinadanet.com.br/imagens/post/11326/login_1.png" alt="alt" /></a></center>\n\
<center><a href="/auth/google"> \n\
<img src="http://marketingland.com/wp-content/ml-loads/2014/04/Sign-In-With-Google.png" alt="alt" /></a></center>\n\
</div>'
        
        ,
    height: '100%',
    width: '100%'
}});


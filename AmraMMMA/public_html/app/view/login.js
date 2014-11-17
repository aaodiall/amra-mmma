Ext.define('Lan.view.login', {
extend: 'Ext.Container',
xtype: 'login',
config: {
    fullscreen: true,
    layout: 'fit',
    html: '<span id=\"signinButton\">'
        +   '<span class="g-signin" data-callback="signinCallback" data-clientid="647695214944-lr9j4vup286qhia9ruv54bk1ens1701s.apps.googleusercontent.com" data-cookiepolicy="single_host_origin" data-requestvisibleactions="http://schemas.google.com/AddActivity" data-scope="https://www.googleapis.com/auth/plus.login"></span>'
        + '</span>',
    height: '100%',
    width: '100%'
}});
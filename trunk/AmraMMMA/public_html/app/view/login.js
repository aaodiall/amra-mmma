Ext.define("Lan.view.login", {
    extend: 'Ext.form.Panel',
    xtype: 'login',
    config: {
          title: 'Home',
          iconCls: 'user',
          scrollable: 'vertical',
          items: [
          {
            xtype: 'toolbar',
            title: 'User form'
          },
          {
            xtype: 'textfield',
            name: 'name',
            label: 'Name'
          },
         {
            xtype: 'numberfield',
            name: 'age',
            label: 'Age'
        },
        {
            xtype: 'emailfield',
            name: 'email',
            label: 'Email'
        },
        {
            xtype: 'button',
            text: 'save',
            action: 'saveContact',
            ui: 'confirm',
            iconCls:'organize',
            iconMask:'true',
            height:60
          },
          {
            xtype: 'button',
            text: 'reset',
            action: 'resetContact',
            ui: 'decline',
            iconCls:'delete',
            iconMask:'true',
            height:60
          }
    ]
 }
});
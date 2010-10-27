Titanium.UI.setBackgroundColor('#000');
var win = Ti.UI.createWindow();
var web = Ti.UI.createWebView({url:'http://m.mg.mail.yahoo.com/hg/?.intl=us&.lang=en#mail/folders'});
var view = Ti.UI.createView({top:-20});
var img = Ti.UI.createImageView({image:'Default.png'});
view.add(img);
web.hide();
win.add(web);
win.add(view);
win.orientationModes = [
		Titanium.UI.PORTRAIT,
		Titanium.UI.UPSIDE_PORTRAIT,
        Titanium.UI.LANDSCAPE_LEFT,
        Titanium.UI.LANDSCAPE_RIGHT
    ];
win.open();

var i = 0;
web.addEventListener('load',function(){
	if(i == 0){
		view.hide();
		web.show();
		i = 1;
	}
});

var dirImg = "";

if (cc.config.deviceType == 'browser') {
    dirImg = "res/";
}
else if (cc.config.engine == 'cocos2d-x') {
    dirImg = "res/";
}

// Images
var s_background = dirImg + "background.jpg";
var s_img = dirImg + "menu1.png";
var s_aentos_logo = dirImg + "aentos_logo.png";
var s_bird = dirImg + "bird.png";

// Fonts
var s_abadi40 = dirImg + "Abadi40-ipad.png";
var s_abadi40_fnt = dirImg + "Abadi40-ipad.fnt";

var g_resources = [
    { type:"image", src:s_background },
    { type:"image", src:s_img },
    { type:"image", src:s_aentos_logo },
    { type:"image", src:s_bird },
    { type:"image", src:s_abadi40 },
    { type:"fnt", src:s_abadi40_fnt }
];
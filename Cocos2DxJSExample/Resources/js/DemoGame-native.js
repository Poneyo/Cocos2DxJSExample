require("js/helper/jsb_constants.js");

var DG = DG || {};

var appFiles = [
	'js/Bird.js',
    'js/BirdScene.js',
    'js/Resource.js',
    'js/MainMenu.js'
];

cc.dumpConfig();

for (var i=0; i < appFiles.length; i++) {
    require(appFiles[i]);
}

var director = cc.Director.getInstance();
director.setDisplayStats(true);

director.setAnimationInterval(1.0 / 60);

var mainScene = MainMenu.scene();

director.runWithScene(mainScene);


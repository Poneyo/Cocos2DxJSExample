
var BirdScene = cc.Layer.extend({
    _bird:null,
                              
    ctor:function () {
        cc.associateWithNative( this, cc.Layer );
    },
    
    init:function () {
        var bRet = false;
        
        if (this._super()) {
            winSize = cc.Director.getInstance().getWinSize();
                                
            // Set background
            var bgndSprite = cc.Sprite.create(s_background, cc.rect(0, 0, winSize.width, winSize.height));
            bgndSprite.setPosition(cc.p(winSize.width / 2, winSize.height / 2));
            this.addChild(bgndSprite);
            
            // Add the bird
            this._bird = new Bird();
            this.addChild(this._bird);
            
            // Enable touches
            this.setTouchEnabled(true);
                                
            bRet = true;
        }

        return bRet;
    },
    
    onTouchesMoved:function (touches, event) {
    	this.processEvent(touches[0]);
    },
    
    processEvent:function (event) {
    	var delta = event.getDelta();
    	var curPos = this._bird.getPosition();
    	curPos= cc.pAdd(curPos, delta);
    	curPos= cc.pClamp(curPos, cc.POINT_ZERO, cc.p(winSize.width, winSize.height));
    	this._bird.setPosition(curPos);
    }
});

BirdScene.create = function () {
    var sg = new BirdScene();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

BirdScene.scene = function () {
    var scene = cc.Scene.create();
    var layer = BirdScene.create();
    scene.addChild(layer);
    return scene;
};
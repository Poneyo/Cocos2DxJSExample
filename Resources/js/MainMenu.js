cc.dumpConfig();

var MainMenu = cc.Layer.extend({
    
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
                               
            // Add Aentos logo
            var sAentosLogo = cc.Sprite.create(s_aentos_logo);
            sAentosLogo.setAnchorPoint(cc.p(0, 0));
            sAentosLogo.setPosition(cc.p(winSize.width - sAentosLogo.getContentSize().width - 40, 40));
            this.addChild(sAentosLogo);
            
            // Set game title
            var lTitle = cc.LabelBMFont.create("Demo Game!", s_abadi40_fnt);
            lTitle.setAnchorPoint(cc.p(0.5, 1));
            lTitle.setPosition(cc.p(winSize.width / 2, winSize.height - 100));
            this.addChild(lTitle);
            
            //var imageButton = cc.MenuItemSprite.create(sp, sp, sp, this, this.onImageTouch);
            var label1 = cc.LabelBMFont.create("Let's play!", s_abadi40_fnt );
            var item1 = cc.MenuItemLabel.create(label1, this, this.onImageTouch);
                               
            var menu = cc.Menu.create(item1);
            menu.alignItemsVerticallyWithPadding(10);
            this.addChild(menu);
            menu.setPosition(cc.p(winSize.width / 2, winSize.height / 2));
            this.schedule(this.update, 0.1);
                               
            bRet = true;
        }
        return bRet;
    },
    onImageTouch:function (pSender) {
        cc.log('onImageTouch!');
        var scene = cc.Scene.create();
        scene.addChild(BirdScene.create());
        cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
    },
    update:function () {
    }
});

MainMenu.create = function () {
    var sg = new MainMenu();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

MainMenu.scene = function () {
    var scene = cc.Scene.create();
    var layer = MainMenu.create();
    scene.addChild(layer);
    return scene;
}
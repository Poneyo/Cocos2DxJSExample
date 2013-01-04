
var Bird = cc.Sprite.extend({
                              
    ctor:function () {
        cc.associateWithNative( this, cc.Sprite );
        
        // Bird init
        var birdTexture = cc.TextureCache.getInstance().addImage(s_bird);
        this.initWithTexture(birdTexture, cc.rect(103, 1, 101, 44));
        this.setPosition(cc.p(winSize.width / 2, winSize.height / 2));
        
        // Bird frames
        var frame0 = cc.SpriteFrame.createWithTexture(birdTexture, cc.rect(103, 1, 101, 44));
        var frame1 = cc.SpriteFrame.createWithTexture(birdTexture, cc.rect(103, 47, 101, 30));
        var frame2 = cc.SpriteFrame.createWithTexture(birdTexture, cc.rect(103, 79, 101, 41));
        
        // Bird animation
        var animFrames = [];
        animFrames.push(frame0);
        animFrames.push(frame1);
        animFrames.push(frame2);
        
        // Bird animate
        var animation = cc.Animation.create(animFrames, 0.15);
        var animate = cc.Animate.create(animation);
        this.runAction(cc.RepeatForever.create(animate));
    }
});
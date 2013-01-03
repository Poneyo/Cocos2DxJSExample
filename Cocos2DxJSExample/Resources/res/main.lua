screenWidth = MOAIEnvironment.screenWidth
screenHeight = MOAIEnvironment.screenHeight
--print("Starting up on:" .. MOAIEnvironment.osBrand  .. " version:" .. MOAIEnvironment.osVersion)

if screenWidth == nil then screenWidth = 640 end
if screenHeight == nil then screenHeight = 480 end

MOAISim.openWindow("Window",screenWidth,screenHeight)

viewport = MOAIViewport.new()
viewport:setSize(screenWidth,screenHeight)
viewport:setScale(screenWidth,screenHeight)

layer = MOAILayer2D.new()
layer:setViewport(viewport)

MOAIRenderMgr.pushRenderPass(layer)

-- sound
MOAIUntzSystem.initialize()
mySound = MOAIUntzSound.new()
mySound:load("kill.mp3")

sprite = MOAIGfxQuad2D.new()
sprite:setTexture("sky_world.png")
sprite:setRect(-screenWidth/2,-screenHeight/2,screenWidth/2,screenHeight/2)

prop = MOAIProp2D.new()
prop:setDeck(sprite)
prop:setLoc(0,0)
layer:insertProp(prop)

texture = MOAIImageTexture.new()
texture:load("bird_black_01.png")

w,h = texture:getSize()

birdQuad = MOAIGfxQuad2D.new()
birdQuad:setTexture(texture)
birdQuad:setRect(-w/2,-h/2,w/2,h/2)

birdProp = MOAIProp2D.new()
birdProp:setDeck(birdQuad)
birdProp:setLoc(0,0)
layer:insertProp(birdProp)

function sleep(n)
  os.execute("sleep " .. tonumber(n))
end

function fly()
    thread = MOAIThread:new ()
    thread:run (
    	function ()
    		frame = 0
    		i = 0
    		while true do

    			coroutine.yield ()

print(i,frame)

   				frame = frame + 1
    			if frame == 10 then
    				i = i + 1
    				if i > 3 then i = 1 end

    				birdProp:setTexture("bird_black_0" .. i .. ".png")
    				frame = 0
    			end
    		end
    	end
    )
end

function handleClickOrTouch(x,y)
	x,y=layer:wndToWorld(x,y)
    birdProp:seekLoc(x, y, 5.0)
    fly()
    
    mySound:play()
end


if MOAIInputMgr.device.pointer then
    MOAIInputMgr.device.mouseLeft:setCallback(
        function(isMouseDown)
            if(isMouseDown) then
                handleClickOrTouch(MOAIInputMgr.device.pointer:getLoc())
            end
            -- Do nothing on mouseUp
        end
    )
    MOAIInputMgr.device.mouseRight:setCallback(
        function(isMouseDown)
            if(isMouseDown) then
                MOAIGfxDevice.setClearColor(math.random(0,1),math.random(0,1),math.random(0,1),1)
            end
        end
    )
else
-- If it isn't a mouse, its a touch screen... or some really weird device.
    MOAIInputMgr.device.touch:setCallback (

        function ( eventType, idx, x, y, tapCount )
            if (tapCount > 1) then
                MOAIGfxDevice.setClearColor(math.random(0,1),math.random(0,1),math.random(0,1),1)
            elseif eventType == MOAITouchSensor.TOUCH_DOWN then
                handleClickOrTouch(x,y)
            end
        end
    )
end
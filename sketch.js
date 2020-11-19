var fixRect, movRect;

function setup() {
    createCanvas(600, 600);
    fixRect = createSprite(400, 200, 50, 80);
    movRect = createSprite(500, 20, 80, 50);
    fixRect.shapeColor = "yellow";
    movRect.shapeColor = "pink";
    fixRect.debug = true;
    movRect.debug = true;

}


function draw() {
    background("black");
    movRect.x= World.mouseX;
    movRect.y= World.mouseY;
    if (fixRect.x-movRect.x<fixRect.width/2+movRect.width/2 && 
      movRect.x-fixRect.x<fixRect.width/2+movRect.width/2 && 
      fixRect.y-movRect.y<fixRect.height/2+movRect.height/2 && 
      movRect.y-fixRect.y<fixRect.height/2+movRect.height/2){
        fixRect.shapeColor = "red";
        movRect.shapeColor = "red";
        
    }

    else{
      fixRect.shapeColor = "yellow";
      movRect.shapeColor = "pink";
    }
drawSprites();
}
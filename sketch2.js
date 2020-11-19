var fixRect, movRect;

function setup() {

    createCanvas(600, 600);

    fixRect = createSprite(400, 400, 50, 80);
    fixRect.shapeColor = "yellow";

    fixRect.debug = true;

    movRect = createSprite(500, 400, 50, 80);
    movRect.shapeColor = "green";
    movRect.debug = true;

    ob1 = createSprite(200, 300, 50, 80);
    ob1.shapeColor = "green";
    ob1.debug = true;

    ob2 = createSprite(100, 100, 50, 80);
    ob2.shapeColor = "purple";
    ob2.debug = true;

}

function draw() {

    background(0);

    movRect.x = World.mouseX;
    movRect.y = World.mouseY;



    if (isTouching(movRect, ob2)) {

        movRect.shapeColor = "red";
        ob2.shapeColor = "red";

    } else {
        movRect.shapeColor = "yellow";
        ob2.shapeColor = "green";

    }
    drawSprites();


}


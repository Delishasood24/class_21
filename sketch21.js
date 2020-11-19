var fixedRect, movingRect;
var edges;

function setup() {
    createCanvas(800, 800);
    fixedRect = createSprite(400, 100, 50, 80);
    fixedRect.shapeColor = "green";
    fixedRect.debug = true;

    movingRect = createSprite(400, 400, 80, 30);
    movingRect.shapeColor = "green";
    movingRect.debug = true;

    movingRect.velocityY = -5;
    //fixedRect.velocityY = +5;

    //edges = createEdgeSprites();

}

function draw() {
    background("pink");
    //movingRect.bounceOff(edges);
    //fixedgRect.bounceOff(edges);
    bounceOff(movingRect,fixedRect);
    drawSprites();
}

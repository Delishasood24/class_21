function isTouching(p1, p2) {

    if (p1.x - p2.x < p1.width / 2 + p2.width / 2 &&
        p2.x - p1.x < p1.width / 2 + p2.width / 2 &&
        p2.y - p1.y < p1.height / 2 + p2.height / 2 &&
        p2.y - p1.y < p1.height / 2 + p2.height / 2) {

        return true;

    } else {

        return false;


    }


}
function bounceOff(d1,d2){

    if (d1.x - d2.x < d1.width / 2 + d2.width / 2 &&
        d2.x - d1.x < d1.width / 2 + d2.width / 2) {
        d1.velocityX = d1.velocityX * (-1);
    d2.velocityX = d2.velocityX * (-1);
    }
    if (d1.y - d2.y < d1.height / 2 + d2.height / 2 &&
        d2.y - d1.y < d1.height / 2 + d2.height / 2) {
        d1.velocityY = d1.velocityY * (-1);
        d2.velocityY = d2.velocityY * (-1);
    }



} 
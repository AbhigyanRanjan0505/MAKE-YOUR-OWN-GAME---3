var portal1, portal2, ghostHouse1; var ghostHouse2, ghostHouse3, ghostHouse4, touched = 0, ghostHouse5;
var ghostHouseBlock, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall13;
var wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24; var wall25, wall26, wall27, wall30, wall31, wall32, wall8, wall9, wall10, wall11;
var wall12, wall28, wall29, coins = [], cherry, pacman, ghost1, ghost2;
var ghost3, ghost4, wall1I, wall2I, wall3I, wall4I, wall5I, wall6I, wall7I, wall8I; var wall9I, wall10I, wall11I, wall12I, cherryI, coinI, pacmanClosedI;
var pacmanRightA, pacmanLeftA, pacmanUpA, pacmanDownA, ghost1I, ghost2I;
var ghost3I, ghost4I, fakeBlueGhostI, edges, blocker, bigCoin1, bigCoin2, bigCoin3; var bigCoin4, bigCoin5, touch1 = 0, touch2 = 0, touch3 = 0, touch4 = 0, touch5 = 0;
var count2 = 5, count3 = 10, count = 200, wall14, g2tno, redGhostTurn, g1tw = 0;
var g2tw = 0, ghost2Turn, ghost2Turn2, ghost2Turn3, ghost2Turn4, ghost2Turn5;
var ghost2Turn6, ghost3Turn, ghost4Turn, counter, counter2, counter3, ghost3Turn4;
var counter = setInterval(timer, 1000), counter2 = setInterval(timer2, 1000);
var counter3 = setInterval(timer3, 1000), ghost3Turn2, g3b = 0, ghost3Turn3;
var ghost3Turn5, ghost3Turn6, g4b, ghost4Turn2, ghost4Turn3, ghost4Turn4;
var ghost4Turn5, ghost4Turn6, ghost1Turn;

function preload() {
    wall1I = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Wall/Wall.png");
    wall2I = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Wall/Wall2.png");
    wall3I = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Wall/Wall3.png");
    wall4I = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Wall/Wall4.png");
    wall5I = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Wall/Wall5.png");
    wall6I = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Wall/Wall6.png");
    wall7I = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Wall/Wall7.png");
    wall8I = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Wall/Wall8.png");
    wall9I = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Wall/Wall9.png");
    wall10I = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Wall/Wall10.png");
    wall11I = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Wall/Wall11.png");
    wall12I = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Wall/Block.png");

    coinI = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Coin.png");

    pacmanClosedI = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Pacman/Close.png");
    pacmanRightA = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Pacman/Right2.png");
    pacmanLeftA = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Pacman/PacmanLeft2.png");
    pacmanUpA = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Pacman/PacmanUp2.png");
    pacmanDownA = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Pacman/PacmanDown2.png");

    ghost1I = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Ghost/GhostRed.png");
    ghost2I = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Ghost/GhostOrange.png");
    ghost3I = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Ghost/GhostYellow.png");
    ghost4I = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Ghost/GhostBlue.png");
    fakeBlueGhostI = loadImage("../MAKE-YOUR-OWN-GAME---3/Images/Ghost/FakeBlueGhost.png");
}

function setup() {
    var canvas = createCanvas(400, 420);

    ghost1Turn = createSprite(155, 200, 13, 1);
    ghost1Turn.visible = false;

    ghost2Turn = createSprite(150, 185, 40, 1);
    ghost2Turn.visible = false;

    ghost2Turn2 = createSprite(-3, 110, 10, 10);
    ghost2Turn2.visible = false;

    ghost2Turn3 = createSprite(23, 115, 10, 1);
    ghost2Turn3.visible = false;

    ghost2Turn4 = createSprite(110, 100, 10, 1);
    ghost2Turn4.visible = false;

    ghost2Turn5 = createSprite(150, 90, 10, 1);
    ghost2Turn5.visible = false;

    ghost2Turn6 = createSprite(155, 170, 27, 1);
    ghost2Turn6.visible = false;

    ghost3Turn = createSprite(208, 200, 1, 1);
    ghost3Turn.visible = false;

    ghost3Turn2 = createSprite(390, 25, 20, 1);
    ghost3Turn2.visible = false;

    ghost3Turn3 = createSprite(280, 50, 1, 25);
    ghost3Turn3.visible = false;

    ghost3Turn4 = createSprite(280, 360, 15, 1);
    ghost3Turn4.visible = false;

    ghost3Turn5 = createSprite(277, 190, 3, 1);
    ghost3Turn5.visible = false;

    ghost4Turn = createSprite(192, 200, 1, 1);
    ghost4Turn.visible = false;

    ghost4Turn2 = createSprite(10, 25, 20, 1);
    ghost4Turn2.visible = false;

    ghost4Turn3 = createSprite(120, 50, 1, 25);
    ghost4Turn3.visible = false;

    ghost4Turn4 = createSprite(120, 360, 15, 1);
    ghost4Turn4.visible = false;

    ghost4Turn5 = createSprite(122, 190, 3, 1);
    ghost4Turn5.visible = false;


    portal1 = createSprite(0, 200, 2, 20);
    portal1.visible = false;

    portal2 = createSprite(400, 200, 2, 20);
    portal2.visible = false;

    //GhostHouse
    ghostHouse1 = createSprite(200, 217);
    ghostHouse1.addImage(wall4I);
    ghostHouse1.scale = 1.2;

    ghostHouse2 = createSprite(178, 183);
    ghostHouse2.addImage(wall5I);
    ghostHouse2.scale = 1.2;

    ghostHouse3 = createSprite(222, 183);
    ghostHouse3.addImage(wall6I);
    ghostHouse3.scale = 1.2;

    ghostHouse4 = createSprite(168, 200);
    ghostHouse4.addImage(wall7I);
    ghostHouse4.scale = 1.2;

    ghostHouse5 = createSprite(232, 200);
    ghostHouse5.addImage(wall7I);
    ghostHouse5.scale = 1.2;

    ghostHouseBlock = createSprite(200, 183);
    ghostHouseBlock.addImage(wall12I);
    ghostHouseBlock.scale = 1.2;
    //

    //walls
    wall1 = createSprite(200, 250);
    wall1.addImage(wall1I);
    wall1.scale = 1.5;

    wall2 = createSprite(202, 285);
    wall2.addImage(wall2I);
    wall2.scale = 1.5;

    wall3 = createSprite(200, 345);
    wall3.addImage(wall3I);
    wall3.scale = 1.5;

    wall4 = createSprite(200, 375);
    wall4.addImage(wall3I);
    wall4.scale = 1.5;

    wall5 = createSprite(125, 375);
    wall5.addImage(wall8I);
    wall5.scale = 1.5;

    wall6 = createSprite(275, 375);
    wall6.addImage(wall8I);
    wall6.scale = 1.5;

    wall7 = createSprite(125, 255);
    wall7.addImage(wall8I);
    wall7.scale = 1.5;

    wall8 = createSprite(275, 255);
    wall8.addImage(wall8I);
    wall8.scale = 1.5;

    wall9 = createSprite(60, 335);
    wall9.addImage(wall3I);
    wall9.scale = 1.5;

    wall10 = createSprite(340, 335);
    wall10.addImage(wall3I);
    wall10.scale = 1.5;

    wall11 = createSprite(60, 295);
    wall11.addImage(wall3I);
    wall11.scale = 1.5;

    wall12 = createSprite(340, 295);
    wall12.addImage(wall3I);
    wall12.scale = 1.5;

    wall13 = createSprite(61.5, 400);
    wall13.addImage(wall8I);
    wall13.scale = 1.5;

    wall14 = createSprite(341.5, 400);
    wall14.addImage(wall8I);
    wall14.scale = 1.5;

    wall15 = createSprite(200, 150);
    wall15.addImage(wall9I);
    wall15.scale = 1.5;

    wall16 = createSprite(200, 115);
    wall16.addImage(wall10I);
    wall16.scale = 1.5;

    wall17 = createSprite(200, 55);
    wall17.addImage(wall3I);
    wall17.scale = 1.5;

    wall18 = createSprite(200, 25);
    wall18.addImage(wall3I);
    wall18.scale = 1.5;

    wall19 = createSprite(125, 25);
    wall19.addImage(wall8I);
    wall19.scale = 1.5;

    wall20 = createSprite(275, 25);
    wall20.addImage(wall8I);
    wall20.scale = 1.5;

    wall21 = createSprite(125, 145);
    wall21.addImage(wall8I);
    wall21.scale = 1.5;

    wall22 = createSprite(275, 145);
    wall22.addImage(wall8I);
    wall22.scale = 1.5;

    wall23 = createSprite(60, 65);
    wall23.addImage(wall3I);
    wall23.scale = 1.5;

    wall24 = createSprite(340, 65);
    wall24.addImage(wall3I);
    wall24.scale = 1.5;

    wall25 = createSprite(60, 105);
    wall25.addImage(wall3I);
    wall25.scale = 1.5;

    wall26 = createSprite(340, 105);
    wall26.addImage(wall3I);
    wall26.scale = 1.5;

    wall27 = createSprite(61.5, 0);
    wall27.addImage(wall8I);
    wall27.scale = 1.5;

    wall28 = createSprite(341.5, 0);
    wall28.addImage(wall8I);
    wall28.scale = 1.5;

    wall29 = createSprite(20, 215);
    wall29.addImage(wall11I);
    wall29.scale = 1.5;

    wall30 = createSprite(20, 185);
    wall30.addImage(wall11I);
    wall30.scale = 1.5;

    wall31 = createSprite(385, 185);
    wall31.addImage(wall11I);
    wall31.scale = 1.5;

    wall32 = createSprite(385, 215);
    wall32.addImage(wall11I);
    wall32.scale = 1.5;
    //

    //coins
    for (var j = 7; j <= 20; j += 10) {
        for (var i = 162; i <= 250; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = 10; j <= 60; j += 15) {
        for (var i = 10; i <= 120; i += 15) {
            drawCoin(i, j);
        }

        for (var i = 135; i <= 150; i += 15) {
            drawCoin(i, j);
        }

        for (var i = 250; i <= 275; i += 15) {
            drawCoin(i, j);
        }

        for (var i = 288; i <= 400; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = 35; j <= 50; j += 10) {
        for (var i = 162; i <= 245; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = 77; j <= 100; j += 15) {
        for (var i = 10; i <= 200; i += 15) {
            drawCoin(i, j);
        }

        for (var i = 212; i <= 400; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = 105; j <= 185; j += 15) {
        for (var i = 135; i <= 160; i += 15) {
            drawCoin(i, j);
        }

        for (var i = 247; i <= 270; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = 107; j <= 142; j += 15) {
        for (var i = 162; i <= 192; i += 15) {
            drawCoin(i, j);
        }

        for (var i = 209; i <= 250; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = 115; j <= 185; j += 15) {
        for (var i = 10; i <= 120; i += 15) {
            drawCoin(i, j);
        }

        for (var i = 285; i <= 400; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = 195; j <= 205; j += 10) {
        for (var i = 25; i <= 165; i += 15) {
            drawCoin(i, j);
        }

        for (var i = 240; i <= 375; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = 217; j <= 300; j += 15) {
        for (var i = 135; i <= 160; i += 15) {
            drawCoin(i, j);
        }

        for (var i = 247; i <= 270; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = 225; j <= 285; j += 15) {
        for (var i = 10; i <= 120; i += 15) {
            drawCoin(i, j);
        }

        for (var i = 285; i <= 400; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = 260; j <= 300; j += 15) {
        for (var i = 162; i <= 192; i += 15) {
            drawCoin(i, j);
        }

        for (var i = 209; i <= 250; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = 307; j <= 335; j += 15) {
        for (var i = 10; i <= 200; i += 15) {
            drawCoin(i, j);
        }

        for (var i = 212; i <= 400; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = 347; j <= 400; j += 15) {
        for (var i = 10; i <= 120; i += 15) {
            drawCoin(i, j);
        }

        for (var i = 135; i <= 150; i += 15) {
            drawCoin(i, j);
        }

        for (var i = 250; i <= 275; i += 15) {
            drawCoin(i, j);
        }

        for (var i = 287; i <= 400; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = 355; j <= 370; j += 10) {
        for (var i = 162; i <= 250; i += 15) {
            drawCoin(i, j);
        }
    }

    //Bigcoins
    bigCoin1 = createSprite(390, 200);
    bigCoin1.addImage(coinI);
    bigCoin1.scale = 0.02;

    bigCoin2 = createSprite(10, 200);
    bigCoin2.addImage(coinI);
    bigCoin2.scale = 0.02;

    bigCoin3 = createSprite(177, 260);
    bigCoin3.addImage(coinI);
    bigCoin3.scale = 0.02;

    bigCoin4 = createSprite(317, 53);
    bigCoin4.addImage(coinI);
    bigCoin4.scale = 0.02;

    bigCoin5 = createSprite(55, 305);
    bigCoin5.addImage(coinI);
    bigCoin5.scale = 0.02;

    //pacman
    pacman = createSprite(200, 390);
    pacman.addImage(pacmanClosedI);
    pacman.scale = 0.025;
    pacman.setCollider("circle", 0, 0, 300);
    //

    //ghosts
    ghost1 = createSprite(200, 170);
    ghost1.addImage(ghost1I);
    ghost1.scale = 0.05;

    ghost2 = createSprite(200, 200);
    ghost2.addImage(ghost2I);
    ghost2.scale = 0.05;

    ghost3 = createSprite(180, 200);
    ghost3.addImage(ghost3I);
    ghost3.scale = 0.05;

    ghost4 = createSprite(220, 200);
    ghost4.addImage(ghost4I);
    ghost4.scale = 0.05;
    //

    blocker = createSprite(200, 410, 400, 20);
    blocker.shapeColor = "black";
}

function draw() {
    background("Black");

    drawSprites();

    edges = createEdgeSprites();
    pacman.collide(edges);

    pacman.collide(wall1);
    pacman.collide(wall2);
    pacman.collide(wall3);
    pacman.collide(wall4);
    pacman.collide(wall5);
    pacman.collide(wall6);
    pacman.collide(wall7);
    pacman.collide(wall8);
    pacman.collide(wall9);
    pacman.collide(wall10);
    pacman.collide(wall11);
    pacman.collide(wall12);
    pacman.collide(wall13);
    pacman.collide(wall14);
    pacman.collide(wall15);
    pacman.collide(wall16);
    pacman.collide(wall17);
    pacman.collide(wall18);
    pacman.collide(wall19);
    pacman.collide(wall20);
    pacman.collide(wall21);
    pacman.collide(wall22);
    pacman.collide(wall23);
    pacman.collide(wall24);
    pacman.collide(wall25);
    pacman.collide(wall26);
    pacman.collide(wall27);
    pacman.collide(wall28);
    pacman.collide(wall29);
    pacman.collide(wall30);
    pacman.collide(wall31);
    pacman.collide(wall32);

    pacman.collide(ghostHouse1);
    pacman.collide(ghostHouse2);
    pacman.collide(ghostHouse3);
    pacman.collide(ghostHouse4);
    pacman.collide(ghostHouse5);
    pacman.collide(ghostHouseBlock);

    pacman.collide(blocker);

    if (g2tw == 0) {
        ghost2.velocityY = -1;
    }

    if (g1tw == 0) {
        ghost1.velocityX = -4;
    }

    if (ghost1.isTouching(wall21)) {
        g1tw = 1;
        ghost1.velocityX = 0;
        ghost1.velocityY = -4;
    }

    if (ghost1.isTouching(edges[2])) {
        ghost1.velocityX = 4;
        ghost1.velocityY = 0;
    }

    if (ghost1.isTouching(wall20)) {
        ghost1.velocityX = 0;
        ghost1.velocityY = 4;
    }

    if (ghost1.isTouching(wall8)) {
        ghost1.velocityX = 4;
        ghost1.velocityY = 0;
    }

    if (ghost1.isTouching(ghost1Turn)) {
        ghost1.velocityX = 0;
        ghost1.velocityY = -4;
    }

    if (ghost2.isTouching(wall15)) {
        g2tw = 1;
        ghost2.velocityY = 0;
        ghost2.velocityX = 4;

        g2tno = 0;
    }

    if (ghost2.isTouching(wall22)) {
        ghost2.velocityY = 4;
        ghost2.velocityX = 0;
    }

    if (ghost2.isTouching(blocker)) {
        ghost2.velocityY = 0;
        ghost2.velocityX = -4;
    }

    if (ghost2.isTouching(wall5)) {
        ghost2.velocityY = -4;
        ghost2.velocityX = 0;
    }

    if (ghost2.isTouching(ghost2Turn)) {
        ghost2.velocityY = 0;
        ghost2.velocityX = -4;
    }

    if (ghost2.isTouching(wall30)) {
        ghost2.velocityY = -4;
        ghost2.velocityX = 0;
    }

    if (ghost2.isTouching(wall25)) {
        ghost2.velocityY = 0;
        ghost2.velocityX = -4;
    }

    if (ghost2.isTouching(ghost2Turn2) && g2tno == 0) {
        ghost2.velocityY = 4;
        ghost2.velocityX = 0;

        g2tno = 1;
    }

    if (ghost2.isTouching(ghost2Turn3)) {
        ghost2.x++;
    }

    if (ghost2.isTouching(edges[2])) {
        ghost2.velocityY = 0;
        ghost2.velocityX = 4;
    }

    if (ghost2.isTouching(wall27)) {
        ghost2.velocityY = 4;
        ghost2.velocityX = 0;
    }

    if (ghost2.isTouching(wall23)) {
        ghost2.velocityY = 0;
        ghost2.velocityX = 4;
    }

    if (ghost2.isTouching(wall23)) {
        ghost2.velocityY = 0;
        ghost2.velocityX = 4;
    }

    if (ghost2.isTouching(wall19)) {
        ghost2.velocityY = 4;
        ghost2.velocityX = 0;
    }

    if (ghost2.isTouching(ghost2Turn4)) {
        ghost2.velocityY = 0;
        ghost2.velocityX = 4;
    }

    if (ghost2.isTouching(ghost2Turn5)) {
        ghost2.velocityY = 4;
        ghost2.velocityX = 0;
    }

    if (ghost2.isTouching(ghost2Turn6)) {
        ghost2.velocityY = 0;
        ghost2.velocityX = 4;
    }

    if (ghost3.isTouching(ghost3Turn)) {
        ghost3.velocityX = 0;
        ghost3.velocityY = -1;
    }

    if (ghost3.isTouching(wall15)) {
        ghost3.velocityY = 0;
        ghost3.velocityX = 4;
    }

    if (ghost3.isTouching(wall22)) {
        ghost3.velocityY = -4;
        ghost3.velocityX = 0;
    }

    if (ghost3.isTouching(wall20)) {
        ghost3.velocityY = 0;
        ghost3.velocityX = 4;
    }

    if (ghost3.isTouching(edges[1])) {
        ghost3.velocityY = -4;
        ghost3.velocityX = 0;

        g3b = 1;
    }

    if (ghost3.isTouching(ghost3Turn2)) {
        ghost3.velocityY = 0;
        ghost3.velocityX = -4;
    }

    if (ghost3.isTouching(wall28)) {
        ghost3.velocityY = 4;
        ghost3.velocityX = 0;
    }

    if (ghost3.isTouching(wall24) && g3b == 1) {
        ghost3.velocityY = 0;
        ghost3.velocityX = -4;

        g3b = 0;
    }

    if (ghost3.isTouching(ghost3Turn3)) {
        ghost3.velocityY = 4;
        ghost3.velocityX = 0;
        ghost3.y++;
    }

    if (ghost3.isTouching(ghost3Turn4)) {
        ghost3.velocityY = 0;
        ghost3.velocityX = 4;
    }

    if (ghost3.isTouching(wall32)) {
        ghost3.velocityY = 0;
        ghost3.velocityX = -4;
    }

    if (ghost3.isTouching(wall2)) {
        ghost3.velocityY = -4;
        ghost3.velocityX = 0;
    }

    if (ghost3.isTouching(wall8)) {
        ghost3.velocityY = -4;
        ghost3.velocityX = 0;
    }

    if (ghost3.isTouching(ghost3Turn5)) {
        ghost3.velocityY = 0;
        ghost3.velocityX = -4;
    }

    if (ghost3.isTouching(ghostHouse5)) {
        ghost3.velocityY = -4;
        ghost3.velocityX = 0;
    }

    if (ghost4.isTouching(ghost4Turn)) {
        ghost4.velocityX = 0;
        ghost4.velocityY = -1;
    }

    if (ghost4.isTouching(wall15)) {
        ghost4.velocityY = 0;
        ghost4.velocityX = -4;
    }

    if (ghost4.isTouching(wall21)) {
        ghost4.velocityY = -4;
        ghost4.velocityX = 0;
    }

    if (ghost4.isTouching(wall19)) {
        ghost4.velocityY = 0;
        ghost4.velocityX = -4;
    }

    if (ghost4.isTouching(edges[0])) {
        ghost4.velocityY = -4;
        ghost4.velocityX = 0;

        g4b = 1;
    }

    if (ghost4.isTouching(ghost4Turn2)) {
        ghost4.velocityY = 0;
        ghost4.velocityX = 4;
    }

    if (ghost4.isTouching(wall27)) {
        ghost4.velocityY = 4;
        ghost4.velocityX = 0;
    }

    if (ghost4.isTouching(wall23) && g4b == 1) {
        ghost4.velocityY = 0;
        ghost4.velocityX = 4;

        g4b = 0;
    }

    if (ghost4.isTouching(ghost4Turn3)) {
        ghost4.velocityY = 4;
        ghost4.velocityX = 0;
        ghost4.y++;
    }

    if (ghost4.isTouching(ghost4Turn4)) {
        ghost4.velocityY = 0;
        ghost4.velocityX = -4;
    }

    if (ghost4.isTouching(wall29)) {
        ghost4.velocityY = 0;
        ghost4.velocityX = 4;
    }

    if (ghost4.isTouching(wall16)) {
        ghost4.velocityY = -4;
        ghost4.velocityX = 0;
    }

    if (ghost4.isTouching(wall7)) {
        ghost4.velocityY = -4;
        ghost4.velocityX = 0;
    }

    if (ghost4.isTouching(ghost4Turn5)) {
        ghost4.velocityY = 0;
        ghost4.velocityX = 4;
    }

    if (ghost4.isTouching(ghostHouse4)) {
        ghost4.velocityY = -4;
        ghost4.velocityX = 0;
    }

    if (pacman.isTouching(portal1)) {
        pacman.x = 390;
        pacman.velocityX = -3;
        pacman.velocityY = 0;
    }

    if (pacman.isTouching(portal2)) {
        pacman.x = 10;
        pacman.velocityX = 3;
        pacman.velocityY = 0;
    }

    if (ghost1.isTouching(portal2)) {
        ghost1.x = 10;
        ghost1.velocityX = 4;
        ghost1.velocityY = 0;
    }

    for (var i = 0; i < coins.length; i++) {
        if (pacman.isTouching(coins[i])) {
            coins[i].destroy();
        }
    }

    if (pacman.isTouching(bigCoin1)) {
        count = 200;
        touch1 = 1;
        bigCoin1.destroy();
    }

    if (touch1 == 1) {
        ghost1.addImage(fakeBlueGhostI);
        ghost2.addImage(fakeBlueGhostI);
        ghost3.addImage(fakeBlueGhostI);
        ghost4.addImage(fakeBlueGhostI);

        timer();
    }

    if (pacman.isTouching(bigCoin2)) {
        count = 200;
        touch2 = 1;
        bigCoin2.destroy();
    }

    if (touch2 == 1) {
        ghost1.addImage(fakeBlueGhostI);
        ghost2.addImage(fakeBlueGhostI);
        ghost3.addImage(fakeBlueGhostI);
        ghost4.addImage(fakeBlueGhostI);

        timer();
    }

    if (pacman.isTouching(bigCoin3)) {
        count = 200;
        touch3 = 1;
        bigCoin3.destroy();
    }

    if (touch3 == 1) {
        ghost1.addImage(fakeBlueGhostI);
        ghost2.addImage(fakeBlueGhostI);
        ghost3.addImage(fakeBlueGhostI);
        ghost4.addImage(fakeBlueGhostI);

        timer();
    }

    if (pacman.isTouching(bigCoin4)) {
        count = 200;
        touch4 = 1;
        bigCoin4.destroy();
    }

    if (touch4 == 1) {
        ghost1.addImage(fakeBlueGhostI);
        ghost2.addImage(fakeBlueGhostI);
        ghost3.addImage(fakeBlueGhostI);
        ghost4.addImage(fakeBlueGhostI);

        timer();
    }

    if (pacman.isTouching(bigCoin5)) {
        count = 200;
        touch5 = 1;
        bigCoin5.destroy();
    }

    if (touch5 == 1) {
        ghost1.addImage(fakeBlueGhostI);
        ghost2.addImage(fakeBlueGhostI);
        ghost3.addImage(fakeBlueGhostI);
        ghost4.addImage(fakeBlueGhostI);

        timer();
    }

    if (keyDown("up")) {
        pacman.addImage(pacmanUpA);
        pacman.velocityX = 0;
        pacman.velocityY = -3;
    }
    else if (keyDown("down")) {
        pacman.addImage(pacmanDownA);
        pacman.velocityX = 0;
        pacman.velocityY = 3;
    }
    else if (keyDown("right")) {
        pacman.addImage(pacmanRightA);
        pacman.velocityY = 0;
        pacman.velocityX = 3;
    }
    else if (keyDown("left")) {
        pacman.addImage(pacmanLeftA);
        pacman.velocityY = 0;
        pacman.velocityX = -3;
    }
}

function drawCoin(i, j) {
    var coin2 = createSprite(i, j);
    coin2.addImage(coinI);
    coin2.scale = 0.01;
    coins.push(coin2);
}

function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);

        ghost1.addImage(ghost1I);
        ghost2.addImage(ghost2I);
        ghost3.addImage(ghost3I);
        ghost4.addImage(ghost4I);
        return;
    }
}

function timer2() {
    count2 = count2 - 1;
    if (count2 <= 0) {
        clearInterval(counter2);

        ghost3.velocityX = 1;
        return;
    }
}

function timer3() {
    count3 = count3 - 1;
    if (count3 <= 0) {
        clearInterval(counter3);

        ghost4.velocityX = -1;
        return;
    }
}

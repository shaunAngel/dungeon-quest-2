var bgImg,bg
var prince, princeImg
var ground
var platformImg, plat1, plat2, plat3, plat4

function preload(){
bgImg= loadImage("bg.png");
princeImg = loadImage("prince/prince.png");
platformImg = loadImage("plat1.png");
platformImg = loadImage("plat2.png");
platformImg = loadImage("plat3.png");
platformImg = loadImage("plat4.png");

}

function setup(){
canvas = createCanvas(2000,500)

bg= createSprite(700,150,10,10);
bg.addImage(bgImg)
bg.scale = 0.9

prince = createSprite(100,300,50,50);
prince.addImage(princeImg);
prince.scale = 0.6

ground = createSprite(500,490,2000,20);



}




function draw(){
  background("white");

  prince.collide(ground)

  drawSprites();
}

  function platform(){
    if(frameCount%200 ===0){
platform = createSprite(Math.round(random(100,1800)), Math.round(random(100,400)))
  var rand = Math.round(random(1,4));
  
    } 
}
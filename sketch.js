var  garden, gardenImg,mouse,cat;
var  catImg1,catImg2;
var  mouseImg1,mouseImg2,mouseImg4;



function preload()
{
  gardenImg=loadImage("images/garden.png");
  catImg1=loadImage("images/cat1.png");
  catImg2=loadAnimation("images/cat2.png","images/cat3.png");
  mouseImg1=loadImage("images/mouse1.png");
  mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
  mouseImg4=loadAnimation("images/mouse4.png");
}

function setup()
{
    createCanvas(1000,800);
    cat=createSprite(200,550,20,20);
    cat.addImage("catImg1",catImg1);
    cat.scale=0.19;
    
    garden=createSprite(400,400)
    garden.addImage(gardenImg);

    mouse=createSprite(80,550,20,20);
    mouse.addImage(mouseImg1);
    mouse.scale=0.18;
    
}

function draw() 
{

    background(255);
    cat.x=World.mouseX;
    cat.depth=garden.depth;
    cat.depth=garden.depth+1;

    if(isTouching)
    {
      mouse.addAnimation("mouseHappy",mouseImg4);
      cat.addAnimation("catAngry",catImg2);
    }

    drawSprites();
}


function keyPressed()
{
  if(keyDown("LEFT_ARROW"))
  {
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.frameDelay=25;
  }  
}

function isTouching(cat,mouse)
{
  if (cat.x-mouse.x<(cat.width-mouse.width)/2)
{
   return true;
}
else 
{
   return false;
}
}

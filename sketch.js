
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  
  

  if (keyDown("a")) 
  {
    background("blue");
    
  }
 
    if (keyDown("w")) 
  {
    background("yellow");
   
  }

  if (keyDown("s")) 
  {
    background("green");
  }

if (keyDown("D")){
background("red")  
}

  drawSprites();
}


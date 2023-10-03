function preload() {

}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
    //Adicione o código 'video' para gerar uma tela de vídeo
  image(video, 230, 150, 220, 200);

  fill(255, 0, 0);
  stroke(255, 0, 0);

  //Código que desenha um círculo na tela
 Circle(50, 50, 80);
 Circle(50, 430, 80);
 Circle(590, 50, 80);
 Circle(590, 430, 80);

  fill(0, 128, 0);
  stroke(0, 128, 0);

  //Código que desenha um retângulo
  rect(90, 40, 460, 20);

  rect(90, 420, 460, 20);

  rect(40, 90, 20, 300);

  rect(580, 90, 20, 300);
}

function take_snapshot(){    
  save('student_name.png');
}

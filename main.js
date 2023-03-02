  var objects = [];
var objectDetector = "";
var img = "";
var estatus = "";
function setup() 
{
  canvas = createCanvas(640, 420);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(640, 420);
  video.hide();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("estatus").innerHTML = "Estado: detectando objetos";
}
function preload() 
{
  img1 = loadImage('car.jpg');
  img2 = loadImage('football.jpg');
  img3 = loadImage('Lm.jpg');
  img4 = loadImage('person.jpg');
}
function draw() 
{
  background("green");
  //image(img1,0,0,640,420);
  image(video, 0, 0, 380, 380);
      if(estatus != "")
      {     
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) 
        {
          //document.getElementById("estatus").innerHTML = "Estado: objeto detectado";
          //document.getElementById("number_of_objects").innerHTML = "El número de objetos detectados es: "+ objects.length;
 
          fill("blue");
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke("cyan");
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
      }
}
function modelLoaded()
{
   console.log("modelo cargado espero... ._. ");
   estatus = true;
   objectDetector.detect(img1, gotResults);
}
function gotResults(error,results)
{
   if(error)
   {
     console.log(error);
   }
   else
   {
     console.log(results);
     objects = results;
   }
}

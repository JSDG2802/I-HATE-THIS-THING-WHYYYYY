var objects = [];
var objectDetector = "";
var img = "";
var estatus = "";
function setup() 
{
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
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
  background("white");
  image(img1,0,0,640,420);
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
   }
}
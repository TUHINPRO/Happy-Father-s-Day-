function NewTab() {
    window.location="index.html";
  }
  
  function NewTab1() {
    window.location="picture.html";
  }

  video="";
status="";
objects=[];

function preload() {
    video=createVideo("Picture_Video.mp4");
    video.hide();
}
function setup(){
    canvas=createCanvas(600,400);
    canvas.center();

}



function ModelLoaded() {
video.loop();
console.log("Model is Loaded");
status="true";
video.volume(0.5);
video.speed(1);

}
function Start() {
anything=ml5.objectDetector('cocossd',ModelLoaded);


}



function gotResult(error,results) {
    if(error) {
        console.error(error);

    }
    else{
        console.log(results);
        objects=results;
    }
    
}
function draw() {
    image(video,0,0,600,400);
if(status!=""){
    anything.detect(video,gotResult);
    for(i=0;i<objects.length;i++){
       
        fill("#FF0000");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}}
noseX="";
noseY="";
function setup() {
    canvas=createCanvas(600,500);
    canvas.position(400,200);
    video=createCapture(VIDEO);
    video.size(600,500);
    video.hide();
    
    posenet=ml5.poseNet(video,ModelLoad);
    posenet.on('pose',gotPoses);
    }
    function ModelLoad() {
     console.log("Posenet is Initialised");
    }
    
function preload() {
    moustache=loadImage('https://i.postimg.cc/yNXrPmBz/image.png');
    }
    
    function draw() {
    image(video,0,0,600,600);
    image(moustache,noseX,noseY,30,30);
    }
    function take_snapshot() {
      save('filter-moustache-photo.png')
    }
    
    function gotPoses(results) {
    if(results.length>0) {
      console.log(results);
      console.log("Nose X = "+results[0].pose.nose.x);
      console.log("Nose Y = "+results[0].pose.nose.y);
      noseX=results[0].pose.nose.x;
      noseY=results[0].pose.nose.y+45;
    }
    }
    
function NewTab() {
  window.location="index.html";
}

function NewTab1() {
  window.location="picture.html";
}
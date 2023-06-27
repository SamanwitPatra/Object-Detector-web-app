status = true;

function setup(){
    canvas= createCanvas(480, 380);
    canvas.center();
    canvas = createCapture(VIDEO);
    video.hide();
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("Object_found").value;
}

function draw(){
    image(video, 0 , 0, 480, 380);
}

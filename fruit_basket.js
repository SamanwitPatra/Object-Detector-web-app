status="";

function preload()
{
    loadImage("fruit basket.jpeg");
}
function setup() 
{
    createCanvas= canvas(350, 500);
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects"
}
function modelLoaded()
{
    console.log("Model Loaded!");
    status= true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, gotResults)
{
     if(error) 
     {
        console.log(error);
     }
     console.log(results);
}
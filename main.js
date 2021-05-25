Status = "";
function preload()
{
    image = loadImage("https://i.postimg.cc/y6XvJmVY/Sofa.jpg");
}

function setup()
{
    Canvas= createCanvas(400,400);
    Canvas.center();
    CoCo = ml5.objectDetector("cocossd", ModelL);
    document.getElementById("status").innerHTML = "Status Detecting Objects";
}

function ModelL()
{
    console.log("Model Loaded");
    Status = true;
    Coco.detect(image, Result);
}

function Results(error,result)
{
    if (error)
    {
        console.error(error);
    }

    else
    {
        console.log(result);
        object = result;
    }
}
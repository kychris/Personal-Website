//draw a spinning teapot
var teapot;
var windowX;
var windowY;

var scaleSlider;
var sc = 1000;

var x_ori = 0;
var y_ori = 0;

var x_rot = 0;
var y_rot = 0;



function preload() {
    teapot = loadModel('assets/Bin.obj');
}

function setup() {
    windowX = windowWidth;
    windowY = windowHeight;
    createCanvas(windowX, windowY, WEBGL);
    scaleSlider = createSlider(1, 2000, 1000, 0);
    scaleSlider.position(0, 0);
    scaleSlider.style('width', '100%');
}

function draw() {
    background(200);
//     background(0);
    rotateX(-x_rot*0.005);
    rotateY(-y_rot*0.005);

    scaleSlider.remove();
    scaleSlider = createSlider(1, 2000, sc, 0);
    scaleSlider.position(0, 0);
    scaleSlider.style('width', '100%');

    scale(sc);
    scale(scaleSlider.value());

    sc = scaleSlider.value();
    // scaleSlider.remove();

    ambientLight(125, 250, 250);
    directionalLight(0, 0, 0, 0, 0, 1);
    
    normalMaterial();
    // ambientMaterial(10);
    model(teapot);
}

function mousePressed() {
    x_ori = mouseX;
    y_ori = mouseY;
}

function mouseDragged() {
    if (mouseY >= 40) {
        var dx = mouseX - x_ori;
        var dy = mouseY - y_ori;
        x_ori = mouseX;
        y_ori = mouseY;
        x_rot += dy;
        y_rot += dx;
        // rotateX(dy * 0.01);
        // rotateY(dx * 0.01);
        // model(teapot);
    }
    
}

function mouseWheel(event) {
    //println(event.delta);
    sc += event.delta;
    return false;
  }
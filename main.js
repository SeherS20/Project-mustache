noseX = 0;
noseY = 0;
function preload(){
    mustache = loadImage("https://i.postimg.cc/brzG5n7V/png-clipart-handlebar-moustache-cartoon-cute-mustache-s-mustache-illustration-angle-text-removebg-pr.png")
    fancy_hat = loadImage("https://i.postimg.cc/5tHYZvsn/R.png")
}
function setup(){
    canvas = createCanvas(300,300)
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log("Posenet has loaded")

}
function draw(){
    image(video, 0,0, 300,300)
    image(mustache, noseX -50, noseY -5, 100, 30)
    image(fancy_hat, noseX -75, noseY - 175, 150, 150)
}
function snapshot(){
    save('mustache_hat.png')
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + results[0].pose.nose.x)
        console.log("nose y =" + results[0].pose.nose.y)
    }
}
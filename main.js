function preload(){

}
function setup(){
    canvas = createCanvas(300,300)
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300,200)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log("Posenet has loaded")

}
function draw(){
    image(video, -75, 0, 450, 300)
}
function snapshot(){
    save('mustache.png')
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        console.log("nose x -" + results[0].pose.nose.y)
        console.log("nose y -" + results[0].pose.nose.y)
    }
}
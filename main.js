song1="";
song2="";
song1status="";
song2status="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreright=0;
scoreleft=0;
function preload()
{
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}
function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded()
{
     console.log('posenet is started');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        scoreright=results[0].pose.keypoints[10].score;
        scoreleft=results[0].pose.keypoints[9].score;
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
    }
}
function draw()
{
    image(video,0,0,600,500);
}
function songname()
{
    song.play();
}
results[0].pose.keypoints[9].score;

function draw()
{
    image(video,0,0,600,500);
    song1status=song1.isPlaying();
    song2status=song2.isPlaying();
    fill("pink");
    stroke("blue");
    if(scoreright>0.2)
    {
      circle(rightWristX,rightWristY,20);
      song2.stop();
      if(song1status==false)
      {
          song1.play();
          document.getElementById("song").innerHTML="harry potter song";
      }
    }
    if(scoreleft>0.2)
    {
      circle(leftWristX,leftWristY,20);
      song2.stop();
      if(song1status==false)
      {
          song1.play();
          document.getElementById("song").innerHTML="peter pan song";
      }
    }
    function play()
    {
        song.play();
        song.setVolume(1);
        song.rate(1);
        
    }

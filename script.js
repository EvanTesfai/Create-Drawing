// Setup canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 500;

// Animation Varibles
let cloud1X = 45;
let cloud2X = 175;
let cloud3X = 300;
let cloud1Y = 30;
let cloud2Y = 1;
let cloud3Y = 25;
let sunWidth = 27;
let topLight = "red";
let midLight = "yellow";
let bottomLight = "green";
let lightFrame = 0;
let gVal = 125;
let bVal = 225;
let rVal = 10;

requestAnimationFrame(draw);
function draw() {
  // Sky
  ctx.fillStyle = `rgb(${rVal},${gVal},${bVal})`;
  ctx.fillRect(0, 0, 500, 500);

  // Road
  ctx.fillStyle = "grey";
  ctx.fillRect(0, 300, 500, 250);
  ctx.fillStyle = "darkgray";
  ctx.fillRect(0, 300, 500, 10);

  // Sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(75, 55, sunWidth, 0, 2 * Math.PI);
  ctx.fill();

  // Sun Rays
  ctx.lineWidth = 3;
  ctx.strokeStyle = "yellow";
  ctx.beginPath();
  ctx.moveTo(75, 95);
  ctx.lineTo(75, 130);
  ctx.moveTo(95, 90);
  ctx.lineTo(115, 120);
  ctx.moveTo(55, 90);
  ctx.lineTo(35, 120);
  ctx.moveTo(115, 75);
  ctx.lineTo(150, 95);
  ctx.moveTo(35, 75);
  ctx.lineTo(3, 95);
  ctx.moveTo(120, 55);
  ctx.lineTo(160, 55);
  ctx.moveTo(30, 55);
  ctx.lineTo(0, 55);
  ctx.moveTo(75, 15);
  ctx.lineTo(75, 0);
  ctx.moveTo(95, 20);
  ctx.lineTo(115, 0);
  ctx.moveTo(55, 20);
  ctx.lineTo(35, 0);
  ctx.moveTo(115, 35);
  ctx.lineTo(150, 20);
  ctx.moveTo(35, 35);
  ctx.lineTo(5, 20);
  ctx.stroke();

  // Clouds
  let cloud = document.getElementById("cloud-img");
  ctx.drawImage(cloud, cloud1X, cloud1Y, 100, 65);
  ctx.drawImage(cloud, cloud2X, cloud2Y, 100, 65);
  ctx.drawImage(cloud, cloud3X, cloud3Y, 100, 65);

  // Road markings
  ctx.fillStyle = "white";
  ctx.fillRect(0, 395, 75, 15);
  ctx.fillRect(115, 395, 75, 15);
  ctx.fillRect(240, 395, 75, 15);
  ctx.fillRect(365, 395, 75, 15);
  ctx.fillRect(490, 395, 75, 15);

  // Stop light and outlines
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.strokeRect(350, 135, 40, 100);
  ctx.fillStyle = "darkgray";
  ctx.fillRect(350, 135, 40, 100);

  // Stop Light Pole
  ctx.strokeStyle = "black";
  ctx.lineWidth = 7;
  ctx.strokeRect(367, 239, 5, 65);

  // red light outline
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(370, 160, 10, 0, 2 * Math.PI);
  ctx.stroke();

  // yellow light outline

  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(370, 185, 10, 0, 2 * Math.PI);
  ctx.stroke();

  // green light outline
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(370, 210, 10, 0, 2 * Math.PI);
  ctx.stroke();

  // red light
  ctx.fillStyle = topLight;
  ctx.beginPath();
  ctx.arc(370, 160, 10, 0, 2 * Math.PI);
  ctx.fill();

  // yellow light
  ctx.fillStyle = midLight;
  ctx.beginPath();
  ctx.arc(370, 185, 10, 0, 2 * Math.PI);
  ctx.fill();

  // green light
  ctx.fillStyle = bottomLight;
  ctx.beginPath();
  ctx.arc(370, 210, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Title
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Rural Road Canvas", 320, 25);

  // Stoplight Animation
  lightFrame++;

  if (lightFrame > 0 && lightFrame <= 60) {
    topLight = "red";
    midLight = "gray";
    bottomLight = "gray";
  } else if (lightFrame > 60 && lightFrame <= 120) {
    topLight = "gray";
    midLight = "yellow";
    bottomLight = "gray";
  } else if (lightFrame > 120 && lightFrame <= 180) {
    topLight = "gray";
    midLight = "gray";
    bottomLight = "green";
  } else if (lightFrame == 181) {
    lightFrame = 0;
  }

  // Sun Expand
  sunWidth += 0.1;
  if (sunWidth > 33) {
    sunWidth = 27;
  }

  // Cloud Animation

  cloud1X = cloud1X + 0.4;
  cloud2X = cloud2X + 0.6;
  cloud3X = cloud3X + 0.7;

  if (cloud1X >= 500) {
    cloud1X = -100;
    cloud1Y = Math.random() * 175;
  } else if (cloud2X >= 500) {
    cloud2X = -100;
    cloud2Y = Math.random() * 175;
  } else if (cloud3X >= 500) {
    cloud3X = -100;
    cloud3Y = Math.random() * 175;
  }

  // Sky color change
  gVal += 0.25;
  if (gVal >= 325) {
    gVal = 125;
  }

  rVal += 0.25;
  if (rVal >= 210) {
    rVal = 10;
  }

  requestAnimationFrame(draw);
}

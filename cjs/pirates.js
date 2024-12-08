const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#6A4E23", 
    "#9B6B3F", 
    "#D1B28A", 
    "#EAB843", 
    "#F8CF79", 
    "#8F6742", 
    "#5A3B1A", 
    "#3D2A15", 
    "#C0392B", 
    "#A89984"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
function openImgExpand(src) {
const imgExpand = document.getElementById('img-expand');
const expandedImage = document.getElementById('expanded-image');
    if (imgExpand && expandedImage) {
        expandedImage.src = src;
        imgExpand.style.display = 'flex';
    }
}

function closeImgExpand() {
    const imgExpand = document.getElementById('img-expand');
    if (imgExpand) {
        imgExpand.style.display = 'none';
    }
}

document.querySelectorAll('.section img').forEach((image) => {
    image.addEventListener('click', () => openImgExpand(image.src));
});
window.onload = function() {
  const audio = document.getElementById('background-music');
  audio.volume = 0.5; // Set volume (0.0 to 1.0)

  // Check if the audio is already playing
  if (localStorage.getItem('audioPlaying') === 'true') {
      audio.play();
  } else {
      audio.pause();
  }

  // Event listener to update localStorage when the audio is played or paused
  audio.addEventListener('play', function() {
      localStorage.setItem('audioPlaying', 'true');
  });

  audio.addEventListener('pause', function() {
      localStorage.setItem('audioPlaying', 'false');
  });
};
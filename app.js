// app.js — tiny hash router + p5 background

// ----- Router -----
function show(route) {
  const archive = document.getElementById('view-archive');
  const reflection = document.getElementById('view-reflection');
  if (route === 'reflection') {
    archive.classList.remove('active');
    reflection.classList.add('active');
  } else {
    reflection.classList.remove('active');
    archive.classList.add('active');
  }
}

window.addEventListener('hashchange', () => show(location.hash.replace('#','')));

window.addEventListener('DOMContentLoaded', () => {

  show(location.hash.replace('#','') || 'archive');

  document.getElementById('folderBtn').addEventListener('click', () => {
    location.hash = '#reflection';
  });
});


// const laceSketch = (p) => {
//   let dpr = 1;

//   p.setup = () => {
//     dpr = Math.min(window.devicePixelRatio || 1, 2);
//     const c = p.createCanvas(p.windowWidth, p.windowHeight);
//     c.elt.style.position = 'fixed';
//     c.elt.style.left = '0';
//     c.elt.style.top = '0';
//     c.elt.style.zIndex = '-1';
//     c.elt.style.pointerEvents = 'none';
//     p.pixelDensity(dpr);
//     p.noLoop();
//     drawLace();
//   };

//   p.windowResized = () => {
//     p.resizeCanvas(p.windowWidth, p.windowHeight);
//     drawLace();
//   };
// // lace drawing, i dont think it works though
//   function drawLace() {
    
//     const bg = p.color('#f4f4f5');
//     const ink = p.color(0, 0, 0, 12);        
//     const silver = p.color(192, 196, 204, 40); 

//     p.background(bg);


//     p.stroke(ink);
//     p.strokeWeight(1);
//     const step = 32;
//     for (let x = 0; x <= p.width; x += step) p.line(x, 0, x, p.height);
//     for (let y = 0; y <= p.height; y += step) p.line(0, y, p.width, y);

 
//     p.noFill();
//     p.stroke(silver);
//     p.strokeWeight(1.2);
//     const r = 28;
//     const gap = 8;

//     for (let x = gap; x < p.width; x += r + gap) {
//       p.arc(x, gap, r, r, p.PI, p.TWO_PI);
//     }

//     for (let x = gap; x < p.width; x += r + gap) {
//       p.arc(x, p.height - gap, r, r, 0, p.PI);
//     }

//     for (let y = gap; y < p.height; y += r + gap) {
//       p.arc(gap, y, r, r, p.HALF_PI, p.PI + p.HALF_PI);
//     }

//     for (let y = gap; y < p.height; y += r + gap) {
//       p.arc(p.width - gap, y, r, r, -p.HALF_PI, p.HALF_PI);
//     }

//     p.noStroke();
//     const vignette = p.drawingContext.createRadialGradient(
//       p.width / 2, p.height / 2, Math.min(p.width, p.height) * 0.2,
//       p.width / 2, p.height / 2, Math.max(p.width, p.height) * 0.7
//     );
//     vignette.addColorStop(0, 'rgba(0,0,0,0)');
//     vignette.addColorStop(1, 'rgba(0,0,0,0.06)');
//     p.drawingContext.fillStyle = vignette;
//     p.rect(0, 0, p.width, p.height);
//   }
// };

// new p5(laceSketch);

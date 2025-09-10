 const IMG_SRC = "images/folder.png";
   
let heroImg;
  function preload(){
    // Use the real embedded data URL (injected below).
    const embedded = document.currentScript.previousElementSibling.previousElementSibling.textContent;
  }

    const __IMG_DATA = "images/folder.png";
    let heroImg2;
    function preload(){
      heroImg2 = loadImage(__IMG_DATA, () => {}, () => {
        // fallback shape if something goes wrong
        heroImg2 = createGraphics(400, 300);
        heroImg2.clear(); heroImg2.noStroke(); heroImg2.fill(214, 78, 104, 200);
        heroImg2.ellipse(300, 360, 380, 500);
      });
    }
    function setup(){
      const holder = document.getElementById('sketch-holder');
      const w = window.innerWidth - holder.getBoundingClientRect().left;
      const h = Math.max(520, window.innerHeight * 0.99);
      const cnv = createCanvas(w, h); cnv.parent('sketch-holder'); noLoop();
    }
    function windowResized(){ setup(); redraw(); }
    function draw(){
      // background('#d3907cff');
       background('#f7dfd8');
      
      // compute scaled size
      const maxW = Math.min(width * 0.65, 300);
      const scale = maxW / heroImg2.width;
      const imgW = heroImg2.width * scale;
      const imgH = heroImg2.height * scale;
      const cx = width * 0.48; const cy = height * 0.48;
      imageMode(CENTER); image(heroImg2, cx, cy, imgW, imgH);

      // curved HELLO above
      push();
      translate(cx, cy - imgH * 0.52);
      const r = imgW * 0.55; const textStr = 'HELLO';
      textFont('DM Mono, monospace'); textSize(15); noStroke(); fill('#c64a60');
      const totalAngle = radians(30); const start = -totalAngle/2; // centered
      for(let i=0;i<textStr.length;i++){
        const t = i/(textStr.length-1); const a = start + t*totalAngle - HALF_PI;
        const x = r * Math.cos(a); const y = r * Math.sin(a);
        push(); translate(x,y); rotate(a + HALF_PI);
        text(textStr[i], -textWidth(textStr[i])/2, 0); pop();
      }
      pop();
    }

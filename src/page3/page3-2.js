const p5 = require("p5");

let width = window.innerWidth - 10;
let height = window.outerHeight - 20;

const drawHole = (p) => {
    let nobSize = 20;
    let s1Over = false;
    let slider1y;
    let s1Speed = 1;
    let s1 = new p5.Vector();

    let humanwalk;
    p.preload = () => {
       humanwalk  = p.loadImage('/image');
    }

    p.setup = () => {
        p.createCanvas(width, height);
        p.background(255);
       // p.rectMode(p.CENTER);
        p.smooth();
        p.fill(0);

        slider1y = p.height/2;

        s1 = p.createVector(40, slider1y);
    }

    p.draw = () => {
        p.background(255);
        p.stroke(0);
        p.strokeWeight(3);
        p.line(40, slider1y, p.width-40, slider1y);

        p.noStroke();
        p.image(humanwalk,s1.x-50,s1.y-145,100,150);
        //p.rect(s1.x-50, s1.y-145, 100, 150);
        s1.x = s1.x * s1Speed;

        if(s1.x > p.width-55){
          s1Speed = -0.02;
          s1Speed ++;
        } else if(s1.x < 41){
          s1Speed=1;
        }

        checkHover(p);
    }

    p.mouseDragged = () =>{
        if (s1Over) {
            s1.x = p.constrain(p.mouseX, 40, p.width-40) * s1Speed;
        } 
    }

    function checkHover(p){
        if (p.mouseX > s1.x - 50 &&
            p.mouseX < s1.x + 50 &&
            p.mouseY > s1.y - 145 &&
            p.mouseY < s1.y + 5) {
            s1Over = true;
          } else {
            s1Over = false;
          }
    }
}

const myp5 = new p5(drawHole, "slider");
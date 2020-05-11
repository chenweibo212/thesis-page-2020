console.log("page3");

const p5 = require("p5");

let width = window.innerWidth - 20;
let height = window.outerHeight * 4.5;

const drawFrame = (p) => {
    let emojis = [];
    let emojisNum = 50;

    let blockRect;

    let button;

    p.setup = () => {
        p.createCanvas(width, height);
        p.textAlign(p.CENTER, p.CENTER);
        p.angleMode(p.DEGREES);

        for (let i = 0; i < emojisNum; i++) {
            emojis.push(new Emoji());
        }

        button = p.createButton("next");
        button.position(0.475*width,height-95);
        button.size(width/20,width/40);
        button.style('border-radius', '50%');
        button.style('background-color', 'Transparent');
        button.style('border', 'none');
        button.style('outline', 'none');
        button.mousePressed(webpage);
    }

    function webpage() {
            windowObjectReference = window.location.replace("/page3_2");
    }

    p.draw = () => {
        p.background(0);

        for(let i = 0; i < 10; i++){
            p.fill((i*((255-130)/9)+130));
            p.noStroke();
            p.rect(100 + i*2, height*(3/4)+100 + i*2, width-200-i*4, height/4.5-200-i*4);
        }

        for (let i = 0; i < emojis.length; i++) {
            emojis[i].move();
            emojis[i].display();
        }

        // blockRect = p.get(100,height*0.6-236,width-200,236);
        // p.image(blockRect,100,height-236);

        // p.copy(100,height-236,width-200,236,100,height-236,width-200,236);


        for(let i = 0; i < 10; i++){
            p.push();
            p.noStroke();
            p.fill(213 - (i*(255-130)/9));
            p.rect(120, height-324+i*2, width-240, 250);
            p.pop();
        }


        p.push();
        p.fill(0);
        p.rect(100,height-310,width-200,500);
        p.pop();

        Hole();
    }

    function Hole(){
        let emojiHole = "128371";
        p.textSize(200);
        p.text(String.fromCodePoint(emojiHole), width/2, height-100);
    }

    function Emoji() {
        this.theta = 0;
        this.thetaSpeed = p.random(4, 8);
        this.emojiCode = "128306";
        this.emoji = String.fromCodePoint(this.emojiCode);
    
        this.emojiSize = p.random(50, 200);
        this.yMin = -this.emojiSize;
        this.x = p.random(width * 0.25, width * 0.75);
        this.y = p.random(this.yMin, - height * 1.5);
        this.xSpeed = 0;
        this.ySpeed = 0;
    
        this.shearLen = this.emojiSize * p.random(0,0.1);
    
        this.display = function () {
            p.push();
            p.translate(this.x, this.y);
            p.shearY(this.shearLen * p.cos(this.theta));
            p.textSize(this.emojiSize);
            p.text(this.emoji, 0, 0);
            p.pop();
        }
    
        this.move = function () {
            this.ySpeed = p.abs(p.cos(this.theta))*2;
            this.y += this.ySpeed;
    
            this.x = p.map(p.noise(this.y * 0.001, this.theta * 0.0001), 0, 1, 0, width);
    
            this.theta += this.thetaSpeed;
    
            if (this.y > height - this.yMin) {
                this.emojiCode = "128306";
                this.emoji = String.fromCodePoint(this.emojiCode);
                this.y = this.yMin;
            }
        }
      
      this.diappear = function () {
          
      }
    }
    
}

const myp5 = new p5(drawFrame, "frame");


console.log("page3");

const p5 = require("p5");

let width = window.innerWidth - 10;
let height = window.outerHeight - 20;

const drawFrame = (p) => {
    let emojis = [];
    let emojisNum = 20;

    let blockRect;

    p.setup = () => {
        p.createCanvas(width, height);
        p.textAlign(p.CENTER, p.CENTER);
        p.angleMode(p.DEGREES);

        for (let i = 0; i < emojisNum; i++) {
            emojis.push(new Emoji());
        }
    }

    p.draw = () => {
        p.background(255);

        Hole();

        for(let i = 0; i < 10; i++){
            p.fill((i*((255-130)/9)+130));
            p.noStroke();
            p.rect(100 + i*2,100 + i*2, width-200-i*4, height-200-i*4);
        }

        for (let i = 0; i < emojis.length; i++) {
            emojis[i].move();
            emojis[i].display();
        }

        blockRect = p.get(100,height-236,width-200,236);
        p.image(blockRect,100,height-236);

        // p.copy(100,height-236,width-200,236,100,height-236,width-200,236);


        for(let i = 0; i < 10; i++){
            p.push();
            p.noStroke();
            p.fill(213 - (i*(255-130)/9));
            p.rect(120, height-114+i*2, width-240, 250);
            p.pop();
        }


        p.push();
        p.fill(255);
        p.rect(100,height-100,width-200,200);
        p.pop();
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
            this.ySpeed = p.abs(p.cos(this.theta));
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

const myp5 = new p5(drawFrame, "main");


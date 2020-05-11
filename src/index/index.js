//import _ from 'lodash';

console.log("indexpage");

// Your program here
const p5 = require("p5");
const fetch = require('node-fetch');

async function getWords(){
    try {
        let response = await fetch("/words")
            .then((result) => {
                return result.json();
            });
        console.log(response);
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
}

let words = [];
let width = window.innerWidth - 10;
let height = window.outerHeight - 20;

const aSentence = "I’m glad you’re on the other side of this glass screen. Using this laptop the mouse is my, clicking and scrolling for means. Most use their devices in an automated way. Let’s our tools and use them as a vehicle."
const inUse1 = "TRY DEFAMILIARIZE UTILITARIAN MEANS";
const inUse2 = "CATCH CONTEMPLATION VEHICLES";
const inUse3 = "SEE YOU ON THE OTHER SIDE";
// CONTEMPLATION GESTURES ON THE OTHER SIDE

function cleanText(text){
    return text.replace(/\[[0-9]+\]/g, " ").replace(/\./g, "").replace(/[,]+/g, "");
}

function cleanSentence() {
    let clean = cleanText(aSentence).toLowerCase();
    let theArray = clean.split(/\s/).filter(Boolean);
    return theArray
}

getWords().then(data => {
    console.log(data); 
    words = data.concat(cleanSentence());
    console.log(words);
    const myp5 = new p5(p5draw, "main");
});

function getDate(){
    let datetoday = new Date();
    let days = datetoday.getDay();
    let hours = datetoday.getHours();
    let minutes = datetoday.getMinutes();
    let seconds = datetoday.getSeconds();
    let whatday;
    let whattime;

    if (days < 6 && days > 0){
        whatday = "working day";
    } else {
        whatday = "weekend";
    }
    if (hours < 4 && hours > -1){
        whattime = "midnight";
    } else if (hours < 7 && hours > 3) {
        whattime = "down";
    } else if (hours < 12 && hours > 6) {
        whattime = "morning";
    } else if (hours == 12) {
        whattime = "noon";
    } else if (hours > 12 && hours < 18) {
        whattime = "afternoon";
    } else if (hours > 17 && hours < 22) {
        whattime = "evening";
    } else if (hours > 21 && hours < 24) {
        whattime = "night";
    }

    if(seconds<10){
        seconds = "0"+seconds;
    }

    if(minutes<10){
        minutes = "0"+minutes;
    }

    if(hours<10){
        hours = "0"+hours;
    }

    let time = hours + ":" + minutes + ":" + seconds + " ----- " + "a " + whatday + " " + whattime;

    return time;
}

const p5draw = (p) => {
    let wordArrange1, wordArrange2, wordArrange3;
    let randomWords;

    let ifNextPart1, ifNextPart2, ifNextPart3;

    let date;

    let button;

    p.setup = () => {
        p.createCanvas(width,height);
        p.textSize(45);
        wordArrange1 = new Arrange(p, cleanText(inUse1).split(/\s/).filter(Boolean), 0.05*width, 120, 1200);
        wordArrange2 = new Arrange(p, cleanText(inUse2).split(/\s/).filter(Boolean), 0.05*width, 200, 1200);
        wordArrange3 = new Arrange(p, cleanText(inUse3).split(/\s/).filter(Boolean),  0.05*width, 320, 1200);
        p.textSize(25);
        randomWords = new FillArrange(p, words, 0, 0, p.width);
        //placeHolder = new Slot(p, cleanText(inUse).split(/\s/).filter(Boolean), 0, 0, 500);
        console.log(width, height);

        button = p.createButton(" ");
        button.position(0.19*width,height*0.17);
        button.size(0.18*width,0.2*height);
        button.style('background-color', 'Transparent');
        button.style('border', 'none');
        button.style('outline', 'none');
        button.mousePressed(webpage);
    }

    function webpage() {
        if(ifNextPart1 == true && ifNextPart2 == true && ifNextPart3 == true){
            windowObjectReference = window.location.replace("/page2");
        }
    }


    p.draw = () => {
        p.background(255);
        p.strokeWeight(4);
        //p.rect(300,100,800,500);
        p.push();
        p.noStroke();
        p.fill(220);
        p.beginShape();
        p.translate(10,5);
        p.vertex(0.15*width, 0.1*height);
        p.vertex(0.51*width, 0.1*height);
        p.vertex(0.51*width, height * 0.5);
        p.vertex(0.48*width, height*0.44);
        p.vertex(0.45*width, height * 0.5);
        p.vertex(0.42*width, height*0.44);
        p.vertex(0.39*width, height * 0.5);
        p.vertex(0.36*width, height*0.44);
        p.vertex(0.33*width, height * 0.5);
        p.vertex(0.3*width, height*0.44);
        p.vertex(0.27*width, height * 0.5);
        p.vertex(0.24*width, height*0.43);
        p.vertex(0.21*width, height * 0.5);
        p.vertex(0.18*width, height*0.44);
        p.vertex(0.15*width, height * 0.5);
        p.vertex();
        p.endShape(p.CLOSE);
        p.pop();

        p.fill(255);
        p.beginShape();
        p.vertex(0.15*width, 0.1*height);
        p.vertex(0.51*width, 0.1*height);
        p.vertex(0.51*width, height * 0.5);
        p.vertex(0.48*width, height*0.44);
        p.vertex(0.45*width, height * 0.5);
        p.vertex(0.42*width, height*0.44);
        p.vertex(0.39*width, height * 0.5);
        p.vertex(0.36*width, height*0.44);
        p.vertex(0.33*width, height * 0.5);
        p.vertex(0.3*width, height*0.44);
        p.vertex(0.27*width, height * 0.5);
        p.vertex(0.24*width, height*0.43);
        p.vertex(0.21*width, height * 0.5);
        p.vertex(0.18*width, height*0.44);
        p.vertex(0.15*width, height * 0.5);
        p.vertex();
        p.endShape(p.CLOSE);

        p.push();
        p.fill(80);
        p.noStroke();
        p.translate(0,10);
        p.rect(0.15*width, 0.1*height, 0.36*width, 0.028*height);
        p.pop();

        p.push();
        p.fill(0);
        p.rect(0.15*width, 0.1*height, 0.36*width, 0.028*height);
        p.pop();

        date = getDate();
        p.push();
        p.fill(255);
        p.textSize(30);
        p.text(date, 0.16*width, 0.12*height+2);
        p.pop();

        wordArrange1.drawSlot(p);
        wordArrange2.drawSlot(p);
        wordArrange3.drawSlot(p);
        randomWords.draw(p);
        wordArrange1.drawWord(p);
        wordArrange2.drawWord(p);
        wordArrange3.drawWord(p);
        ifNextPart1 = wordArrange1.ifNextStep();
        ifNextPart2 = wordArrange2.ifNextStep();
        ifNextPart3 = wordArrange3.ifNextStep();
        console.log(ifNextPart1, ifNextPart2, ifNextPart3);
    }

    p.mousePressed = () => {
        wordArrange1.mouseIsPressed(p);
        wordArrange2.mouseIsPressed(p);
        wordArrange3.mouseIsPressed(p);
        randomWords.mouseIsPressed(p);
    }

    p.mouseReleased = () => {
        wordArrange1.mouseIsReleased();
        wordArrange2.mouseIsReleased();
        wordArrange3.mouseIsReleased();
        randomWords.mouseIsReleased();
    }

    class Word {
        constructor(p, t, x, y){
            this.t = t;
            this.x = x;
            this.y = y;
            this.width = parseInt(p.textWidth(this.t)) + 8;
            this.height = 55;
            this.grabX = 0;
            this.grabY = 0;
            this.isDragging = false;
            this.windowWidth = width;
        }
    
        update(p){
            if(this.isDragging){
                this.x = p.constrain(this.x + p.mouseX - this.grabX, 0, p.width - this.width);
                this.grabX = p.mouseX;
                this.y = p.constrain(this.y + p.mouseY - this.grabY, 0, p.height - this.height);
                this.grabY = p.mouseY;
                return true;
            }
            return false;
        }

        getPosX(){
            return this.x;
        }

        getPosY(){
            return this.y;
        }


        getWord(){
            return this.t;
        }
    
        displayPuzzle(p){
            p.rectMode(p.CORNER);
           // p.fill(this.mouseOver(p) ? (p.mouseIsPressd ? 215 : 230) : 255);
            p.fill(255);
            //p.strokeWeight(this.mouseOver(p) ? (p.mouseIsPressd ? 1 : 2) : 1);
            if(this.mouseOver(p)){
                p.fill(150);
                p.strokeWeight(0);
                p.rect(this.x + 5 , this.y + 5, this.width, this.height);
                p.fill(255);
                p.strokeWeight(4);
                p.rect(this.x, this.y, this.width, this.height);
                p.fill(0);
                p.textSize(45);
                p.text(this.t, this.x + 4, this.y + 45);
            } else {
                p.strokeWeight(3);
                p.textSize(45);
                p.rect(this.x, this.y, this.width, this.height);
                p.fill(0);
                p.text(this.t, this.x + 4, this.y + 45);
            }
        }

        displaySlot(p){
            p.fill(0);
            p.strokeWeight(3);
            p.line(this.x+0.12*this.windowWidth, this.y+0.06*this.windowWidth+this.height, this.x+0.12*this.windowWidth + this.width, this.y+0.06*this.windowWidth+this.height);

            // if(this.mouseOver(p)){
            //     p.fill(100);
            //     p.rect(this.x + 400, this.y + 200, this.x+this.width, this.y+this.height);
            // }
        }

        displayIndicator(p){
            p.push();
            p.fill(150,100);
            p.noStroke();
            p.rect(this.x + 400, this.y + 200, this.width, this.height-5);
            p.pop();
        }


        displaylink(p){
            p.push();
            p.strokeWeight(3);
            p.textSize(45);
            p.fill(0);
            p.rect(this.x, this.y, this.width, this.height);
            p.fill(255);
            p.text(this.t, this.x + 4, this.y + 45);
            p.pop();
        }
    
        mouseOver(p){
            return p.mouseX > this.x && p.mouseX < this.x + this.width
             && p.mouseY > this.y && p.mouseY < this.y + this.height;
        }

        mousePressed(p){
                if(this.mouseOver(p)){
                    this.grabX = p.mouseX;
                    this.grabY = p.mouseY;
                    this.isDragging = true;
                }
        }

        mouseReleased(){
                if(this.isDragging){
                    this.isDragging = false;
                }
        }

        mouseDoNothing(){
            console.log("nothing");
        }

    }

    class Arrange {
        constructor(p, wordList, x, y, w) {
            this.wordList = wordList;
            this.x = x;
            this.y = y;
            this.w = w;
            this.words = [];
            this.slots = [];
            this.nextStep = false;
            for (let i = 0; i < this.wordList.length; i ++){
                this.words.push(new Word(p, this.wordList[i], this.x, this.y));
            }
            for (let i = 0; i < this.wordList.length; i ++){
                this.slots.push(new Word(p, this.wordList[i], this.x, this.y));
            }
           this.placeWords(p, this.wordList, this.x, this.y, this.w);
           this.placeRandom(p, this.wordList, this.x, this.y);
        }
    
        placeWords(p, wordList, startX, startY, w){
            let x = startX + 1;
            let y = startY + 1;
            for(let i = 0; i < wordList.length; i++){
                let nextWidth = parseInt(p.textWidth(wordList[i])) + 20;
                if (x + nextWidth > startX + w - 1) {
                    y += 21;
                    x = startX + 1;
                }
                this.slots[i] = new Word(p, wordList[i], x, y);
                x += nextWidth;
            }
            console.log(this.slots.x, this.slots.y);
        }

        generateRandom(min, max){
            let num = Math.floor(Math.random() * (max - min)) + min;
            return num;
        }

        placeRandom(p, wordList, x, y){
            let placements = [];
            let protection = 15000;
            let counter = 0;

            while(placements.length < wordList.length && counter < protection){
                let placementX = p.constrain((x + this.generateRandom(50, p.width - 150)), 10, p.width - 250);
                let placementY = p.constrain((y + this.generateRandom(50, p.height - 150)), 50, p.height - 50);

                let placement = {
                    x: placementX,
                    y: placementY
                }

                let overlapping = false;
                let overlappingWritingArea = false;

                for(let j = 0; j < placements.length; j++){
                    let other = placements[j];
                    if (other.x + 300 < placement.x || other.x > placement.x + 300 || other.y + 70 < placement.y || other.y > placement.y + 70){
                        overlapping = false;
                    } else {
                        overlapping = true;
                        break;
                    }
                }

                for(let i = 0; i < placements.length; i++){
                    if (placement.x > 150 && placement.x < 1500 && placement.y > 50 && placement.y < 600){
                        overlappingWritingArea = true;
                        break;
                    } else {
                        overlappingWritingArea = false;
                    }
                }

                if(!overlapping && !overlappingWritingArea){
                    placements.push(placement);
                }

                counter++;
            }
            console.log(placements);

            for(let i = 0; i < placements.length; i++){
                this.words[i] = new Word(p, wordList[i], placements[i].x, placements[i].y);
            }

            // for(let i = 0; i < wordList.length; i++){
            //     let placementX = x + this.generateRandom(50, p.width - 150);
            //     let placementY = y + this.generateRandom(50, p.height - 100);
            //     let placement = {
            //         x: placementX,
            //         y: placementY
            //     }

            //     // let overlapping = false;

            //     // for(let j = 0; j < placements.length; j++){
            //     //     var other = placements[j];
            //     //     if (other.x + 50 < placement.x || other.x > placement.x + 50 || other.y + 25 < placement.y || other.y > placement.y + 25){
            //     //         overlapping = false;
            //     //     } else {
            //     //         overlapping = true;
            //     //     }
            //     // }

            //     // if(!overlapping){
            //         placements.push(placement);
            //     //}
            // }

            // for(let i = 0; i < placements.length; i++){
            //     this.words[i] = new Word(p, wordList[i], placements[i].x, placements[i].y);
            // }
        }

        moveToFront(moveIndex){
            let wordToMove = this.words[moveIndex];
            for (let i = moveIndex; i > 0; i --){
                this.words[i] = this.words[i-1];
            }
            this.words[0] = wordToMove;
        }

        indicator(){
            let word = [];
            for(let i = 0; i < this.slots.length; i++){
                word[i] = this.slots[i].getWord();
            }
            let index = word.indexOf(this.words[0].t);
            if(this.words[0].mouseOver(p)){
                    this.slots[index].displayIndicator(p);
            }
        }

        link(p){
            for(let i = 0; i < this.words.length; i++){
                    this.words[i].displaylink(p);
            }
        }

        completeWord() {
            let word = [];
            let positionsX = [];
            let positionsY = [];
            let wordWidth = [];
            let newWord = "";
            let rightSequence = false;
            let PosDiffY, PosDiffX;
            let rightPlaceX = false;
            let rightPlaceY = false;
            for (let j = 0; j < this.words.length; j++) {
              positionsX[j] = this.words[j].getPosX();
              positionsY[j] = this.words[j].getPosY();
              wordWidth[j] = Math.floor(p.textWidth(this.slots[j].getWord()));
            }

            //get current word, compare its position with the rest
            positionsX = this.bubbleSort(positionsX);
            for (let j = 0; j < this.words.length; j++) {
              for (let i = 0; i < this.words.length; i++) {
                if (positionsX[j] == this.words[i].getPosX()) {
                  word[j] = this.words[i].getWord();
                }
              }
            }
            //get a string based on current position
            newWord = word.join("");
            rightSequence  = this.checkEqual(newWord);


            PosDiffY = this.getAverage(positionsY) - positionsY[0];
            if(rightSequence){
                PosDiffX = this.getDiff(positionsX);
                let diffX = [];
                for(let i = 0; i < this.words.length-1; i++){
                    diffX[i] =  PosDiffX[i] - wordWidth[i];
                }
                console.log(diffX);
                if(diffX.length > 1){
                    for(let i = 0; i < diffX.length; i++){
                        if(diffX[i] > 0 && diffX[i] < 30){
                            rightPlaceX = true;
                        }
                    }
                } else {
                    if(diffX[0]>0 && diffX[0] < 30){
                        rightPlaceX = true;
                    }
                }
            }


            if(PosDiffY > -10 && PosDiffY < 10){
                rightPlaceY = true;
            } else {
                rightPlaceY = false;
            }
            if(rightPlaceY && rightSequence && rightPlaceX){
                this.nextStep = true;
            } else {
                this.nextStep = false;
            }
            console.log(newWord, rightSequence, rightPlaceX, rightPlaceY, this.nextStep);
        }

        ifNextStep(){
            if(this.nextStep == true){
                return true;
            } else {
                return false;
            }
        }

        bubbleSort(inputArr){
            let len = inputArr.length;
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len; j++) {
                    if (inputArr[j] > inputArr[j + 1]) {
                        let tmp = inputArr[j];
                        inputArr[j] = inputArr[j + 1];
                        inputArr[j + 1] = tmp;
                    }
                }
            }
            return inputArr;
        }

        getAverage(anArray){
            let total = 
            0;
            let avg = 0;
            for(let i = 0; i < anArray.length; i++){
                total += anArray[i];
            }
            return avg = total/anArray.length;
        }

        getDiff(anArray) {
            var newA = [];
            for (var i = 1; i < anArray.length; i++) {
                newA.push(anArray[i] - anArray[i - 1])
            }
            return newA;
        }

        checkEqual(inputString){
            if(this.wordList.join("") === inputString){
                return true;
            } else {
                return false;
            }
        }
    
        drawWord(p) {
            for (let i = 0; i < this.words.length; i++){
                if(this.words[i].update(p)){
                    this.moveToFront(i);
                    break;
                }
            }
    
            for (let i = this.words.length - 1; i >= 0; i--){
                this.words[i].displayPuzzle(p);
                if(this.nextStep == true){
                    this.words[i].displaylink(p);
                }
            }

        }

        drawSlot(p){
            for (let i = this.slots.length - 1; i >= 0; i--){
                this.slots[i].displaySlot(p);
            }
            this.indicator();
        }

        mouseIsPressed(p){
                this.words.forEach(aWord => {
                    if(this.nextStep == false){
                        aWord.mousePressed(p);
                    } else {
                        console.log("nothing");
                    }
                })
        }
    
        mouseIsReleased(){
                this.completeWord();
                this.words.forEach(aWord => {
                        aWord.mouseReleased();
                })
        }
    }

    class FillWord {
        constructor(p, t, x, y){
            this.t = t;
            this.x = x;
            this.y = y;
            this.width = parseInt(p.textWidth(this.t)) + 8;
            this.height = 30;
            this.grabX = 0;
            this.grabY = 0;
            this.isDragging = false;
        }
    
        update(p){
            if(this.isDragging){
                this.x = p.constrain(this.x + p.mouseX - this.grabX, 0, p.width - this.width);
                this.grabX = p.mouseX;
                this.y = p.constrain(this.y + p.mouseY - this.grabY, 0, p.height - this.height);
                this.grabY = p.mouseY;
                return true;
            }
            return false;
        }
    
        displayPuzzle(p){
            p.rectMode(p.CORNER);
           // p.fill(this.mouseOver(p) ? (p.mouseIsPressd ? 215 : 230) : 255);
            p.fill(255);
            //p.strokeWeight(this.mouseOver(p) ? (p.mouseIsPressd ? 1 : 2) : 1);
            if(this.mouseOver(p)){
                p.fill(150);
                p.strokeWeight(0);
                p.rect(this.x + 3 , this.y + 5, this.width+4, this.height+5);
                p.fill(255);
                p.strokeWeight(2);
                p.rect(this.x-2, this.y, this.width+4, this.height+5);
                p.fill(0);
                p.textSize(25);
                p.text(this.t, this.x + 4, this.y + 25);
            } else {
                p.strokeWeight(1.5);
                p.rect(this.x-2, this.y, this.width+4, this.height+5);
                p.fill(0);
                p.textSize(25);
                p.text(this.t, this.x + 4, this.y + 25);
            }
        }
    
        mouseOver(p){
            return p.mouseX > this.x && p.mouseX < this.x + this.width
             && p.mouseY > this.y && p.mouseY < this.y + this.height;
        }

        mousePressed(p){
                if(this.mouseOver(p)){
                    this.grabX = p.mouseX;
                    this.grabY = p.mouseY;
                    this.isDragging = true;
                }
        }

        mouseReleased(){
                if(this.isDragging){
                    this.isDragging = false;
                }
        }

    }

    class FillArrange {
        constructor(p, wordList, x, y, w) {
            this.wordList = wordList;
            this.x = x;
            this.y = y;
            this.w = w;
            this.words = [];
            this.nextStep = false;
            for (let i = 0; i < this.wordList.length; i ++){
                this.words.push(new FillWord(p, this.wordList[i], this.x, this.y));
            }
           this.placeRandom(p, this.wordList, this.x, this.y);
        }

        generateRandom(min, max){
            let num;
            return num = Math.floor(Math.random() * (max - min)) + min;
        }

        // placeRandom(p, wordList, x, y){
        //     for(let i = 0; i < wordList.length; i++){
        //         let placementX = x + this.generateRandom(20, p.width - 80, p.width/4, p.width/2);
        //         let placementY = y + this.generateRandom(20, p.height - 60, p.height/5, p.height/2);
        //         this.words[i] = new FillWord(p, wordList[i], placementX, placementY);
        //     }
        // }

        placeRandom(p, wordList, x, y){
            let placements = [];
            let protection = 15000;
            let counter = 0;
            while(placements.length < wordList.length && counter < protection){
                // let placementX = x + parseInt(p.random(20, p.width - 80));
                // let placementY = y + parseInt(p.random(20, p.height - 60));
                let placementX = x + this.generateRandom(50, p.width - 150);
                let placementY = y + this.generateRandom(50, p.height - 100);
                

                let placement = {
                    x: placementX,
                    y: placementY
                }

                let overlapping = false;
                let overlappingWritingArea = false;

                for(let j = 0; j < placements.length; j++){
                    let other = placements[j];
                    if (other.x + 80 < placement.x || other.x > placement.x + 80 || other.y + 50 < placement.y || other.y > placement.y + 50){
                        overlapping = false;
                    } else {
                        overlapping = true;
                        break;
                    }
                }


                for(let i = 0; i < placements.length; i++){
                    if (placement.x > 150 && placement.x < 1500 && placement.y > 50 && placement.y < 600){
                        overlappingWritingArea = true;
                        break;
                    } else {
                        overlappingWritingArea = false;
                    }
                }

                if(!overlapping && !overlappingWritingArea){
                    placements.push(placement);
                }

                counter++;
            }
            console.log(placements);

            for(let i = 0; i < placements.length; i++){
                this.words[i] = new FillWord(p, wordList[i], placements[i].x, placements[i].y);
            }
        }

        moveToFront(moveIndex){
            let wordToMove = this.words[moveIndex];
            for (let i = moveIndex; i > 0; i --){
                this.words[i] = this.words[i-1];
            }
            this.words[0] = wordToMove;
        }
    
        draw(p) {

            for (let i = 0; i < this.words.length; i++){
                if(this.words[i].update(p)){
                    this.moveToFront(i);
                    break;
                }
            }
    
            for (let i = this.words.length - 1; i >= 0; i--){
                this.words[i].displayPuzzle(p);
            }

        }

        mouseIsPressed(p){
                console.log("moving")
                this.words.forEach(aWord => {
                    aWord.mousePressed(p);
                })
        }
    
        mouseIsReleased(){
                console.log("released");
                this.words.forEach(aWord => {
                    aWord.mouseReleased();
                })
        }
    }
}
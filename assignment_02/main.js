// Create a random shape:
function createShape(){
    let randomShape = getRandomeNumber(1,3);
    switch(randomShape){
        case 1: 
            createSquare();
            break;
        case 2:
            createCircle();
            break;
        case 3: 
            createTriangle();
            break;
    }
}

// Create a circle
function createCircle(){
    let currentCanvas = document.getElementById("currentCanvas").getContext("2d");
    let pointX = getRandomeNumber(1,500);
    let pointY = getRandomeNumber(1,500);
    let radius = getRandomeNumber(1,250);

    currentCanvas.beginPath();
    currentCanvas.lineWidth = "7";
    currentCanvas.strokeStyle = getRandomColor();
    currentCanvas.arc(pointX, pointY, radius, 0, 2*Math.PI);
    currentCanvas.stroke();
}

// Create a square
function createSquare(){
    let currentCanvas = document.getElementById("currentCanvas").getContext("2d");
    let pointX = getRandomeNumber(1,500);
    let pointY = getRandomeNumber(1,500);
    let size = getRandomeNumber(1,450);
    
    currentCanvas.beginPath();
    currentCanvas.lineWidth = "7";
    currentCanvas.rect(pointX, pointY, size, size);
    currentCanvas.strokeStyle = getRandomColor();
    currentCanvas.stroke();
}

// create a triangle
function createTriangle(){
    let currentCanvas = document.getElementById("currentCanvas").getContext("2d");
    let pointX = getRandomeNumber(1,500);
    let pointY = getRandomeNumber(1,500);
    let pointA = getRandomeNumber(1,500);
    let pointB = getRandomeNumber(1,500);
    let pointC = getRandomeNumber(1,500);
    let pointD = getRandomeNumber(1,500);

    currentCanvas.moveTo(pointX, pointY);
    currentCanvas.lineTo(pointA, pointB);
    currentCanvas.lineTo(pointC, pointD);
    currentCanvas.lineTo(pointX, pointY);
    currentCanvas.lineWidth = "7";
    currentCanvas.strokeStyle = getRandomColor();
    currentCanvas.stroke();
}

// Generate a random color:
function getRandomColor(){
    let randomR = Math.round(Math.random() * 255);
    let randomG = Math.round(Math.random() * 255);
    let randomB = Math.round(Math.random() * 255);
    return `rgb(${randomR},${randomG},${randomB})`;
}

// Generate a random number
function getRandomeNumber(min, max){
    return min+ Math.floor(Math.random()*(max-min+1));
}
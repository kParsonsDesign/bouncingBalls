// Get bounding box info
let boundingBox = document.getElementById('boundingBox');
let width = boundingBox.clientWidth;
let height = boundingBox.clientHeight;

// Return random integer function (inclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Keep track of balls
let numberOfBalls = 0;

// Create random ball
function createBall() {
  // keep track of balls
  numberOfBalls = numberOfBalls + 1;

  // random ball size
  let ballSize = getRandomInteger(10, 50);
  console.log(ballSize);
  let Xmax = width - ballSize; // bounding box based on ball size
  let Ymax = height - ballSize; // bounding box based on ball size

  // random start location
  let positionX = Math.floor(Math.random() * width);
  let positionY = Math.floor(Math.random() * height);
  if (positionX > Xmax) positionX = Xmax - 1;
  if (positionY > Ymax) positionY = Ymax - 1;

  // random ball speed
  let speed = getRandomInteger(1, 5);

  // random ball movement
  let xDirection = Boolean(getRandomInteger(0, 1));
  let yDirection = Boolean(getRandomInteger(0, 1));

  // color options
  // clean: hsl(170, 32%, 74%)
  // butter: hsl(42, 80%, 74%)
  // salmon: hsl(11, 44%, 62%)
  // eggplant: hsl(338, 28%, 41%)
  // navy: hsl(217, 46%, 37%)
  let colorChoices = [
    'hsl(170, 32%, 74%)',
    'hsl(42, 80%, 74%)',
    'hsl(11, 44%, 62%)',
    'hsl(338, 28%, 41%)',
    'hsl(217, 46%, 37%)',
  ];

  // cycle color chooser
  let colorNumber = numberOfBalls % 5;
  let color = colorChoices[colorNumber];

  // set ball div options
  let div = document.createElement('div');
  div.id = 'ball' + numberOfBalls;
  div.style.zIndex = '5';
  div.style.position = 'absolute';
  //div.style.display = 'block';
  div.style.left = positionX + 'px';
  div.style.top = positionY + 'px';
  div.style.width = ballSize + 'px';
  div.style.height = ballSize + 'px';
  div.style.borderRadius = '50%';
  div.style.background = color;

  // Then append the whole thing onto the body
  boundingBox.appendChild(div);

  // move ball function
  function moveBall() {
    // move ball x-axis
    if (xDirection) {
      positionX = positionX + speed;
    } else {
      positionX = positionX - speed;
    }
    div.style.left = positionX + 'px';

    // move ball up y-axis
    if (yDirection) {
      positionY = positionY + speed;
    } else {
      positionY = positionY - speed;
    }
    div.style.top = positionY + 'px';

    // reverse X direction
    if (positionX >= Xmax || positionX <= 0) {
      xDirection = !xDirection;
    }

    // reverse y direction
    if (positionY >= Ymax || positionY <= 0) {
      yDirection = !yDirection;
    }
  }

  // move the ball timer
  setInterval(moveBall, 10);
}

function stopBalls() {}

function clearBox() {
  document.getElementById('boundingBox').innerHTML = '';
}

// button handlers
document.getElementById('addBall').addEventListener('click', createBall);
document.getElementById('clearBox').addEventListener('click', clearBox);

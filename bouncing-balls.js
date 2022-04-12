/**
 *  Helpers
 */

// Return random integer function (inclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *  Bounding Box
 */

// Store bounding box info
let boundingBox = {};
boundingBox.div = document.getElementById('boundingBox');

// Get bounding box info
function getBounds() {
  boundingBox.width = boundingBox.div.clientWidth; // gets inner width
  boundingBox.height = boundingBox.div.clientHeight; // gets inner height
  boundingBox.offsetTop = boundingBox.div.offsetTop; // gets top from document top
  boundingBox.offsetLeft = boundingBox.div.offsetLeft; // gets left from document left
  // console.log(boundingBox);
  // console.log(boundingBox.width);
  // console.log(boundingBox.height);
}

// Refresh bounding box info on window.resize
// Will allow for a resizable box later
window.onload = getBounds;
// if using onresize, need to recalculate ball xMax and yMax
// window.onresize = getBounds;

/**
 *  Balls
 */

// Store balls info
let balls = [];
// each ball object should be:
// { // ball index 0
//   timer: 'setInterval gets saved here to stop/start', // set to null to clear
//   size: 'ball size',
//   color: 'ball color',
//   position: {
//     x: 'X position',
//     y: 'Y position'
//   },
//   velocity: {
//     x: 'X velocity',
//     y: 'Y velocity'
//   },
//   direction: {
//     x: 'x direction',
//     y: 'y direction',
//   },
//   xMax: 'boundingBox.width - this.size',
//   yMax: 'boundingBox.height - this.size',
//   div: 'DOM div'
// }

// Ball Factory
function makeBall() {
  // make ball size random between 10px and 50px
  let size = getRandomInteger(10, 50);
  // assign maximum positions based on ball size
  let xMax = boundingBox.width - size;
  let yMax = boundingBox.height - size;

  // random color
  // hue: 0 - 360
  // saturation: 0% - 100% (gray to full color)
  //    (less than 15 looks very gray)
  // lightness: 0% - 100% (black to full color to white)
  //    (more than 90 looks very white, less than 15 looks very dark)
  let hue = getRandomInteger(0, 360);
  let saturation = getRandomInteger(15, 100);
  let lightness = getRandomInteger(15, 90);
  let color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  // random start location
  let position = {};
  position.x = Math.floor(Math.random() * boundingBox.width);
  position.y = Math.floor(Math.random() * boundingBox.height);
  if (position.x > xMax) {
    position.x = xMax - 1;
  }
  if (position.y > yMax) {
    position.y = yMax - 1;
  }

  // random ball angle of movement
  // high x, low y = more horizontal movement
  // low x, high y = more verical movement
  let velocity = {};
  velocity.x = getRandomInteger(1, 5);
  velocity.y = getRandomInteger(1, 5);

  // initial direction of travel
  let direction = {};
  direction.x = Boolean(getRandomInteger(0, 1));
  direction.y = Boolean(getRandomInteger(0, 1));

  // make an actual ball on the screen
  let div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.borderRadius = '50%';
  div.style.backgroundColor = color;
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  div.style.left = `${position.x}px`;
  div.style.top = `${position.y}px`;
  boundingBox.div.appendChild(div);

  // move the ball (if new balls start moving)

  // send the ball info to the balls storage array
  return { size, color, position, velocity, direction, xMax, yMax, div };
}

// Make a ball
function addOneBall() {
  balls.push(makeBall());
}
let addBall = document.getElementById('addBall');
addBall.addEventListener('click', addOneBall);

/**
 *  Movement Functions
 */
// Should New Ball start out moving or stationary?: Moving
// This could be in an options list

// Check collisions
function checkCollisions(ball) {
  // x direction
  if (
    ball.position.x + ball.velocity.x * ball.direction.x >= ball.xMax ||
    ball.position.x + ball.velocity.x * ball.direction.x <= 0
  ) {
    ball.direction.x = !ball.direction.x;
  }

  // y direction
  if (
    ball.position.y + ball.velocity.y * ball.direction.y >= ball.yMax ||
    ball.position.y + ball.velocity.y * ball.direction.y <= 0
  ) {
    ball.direction.y = !ball.direction.y;
  }

  // // reverse X direction
  // if (positionX >= Xmax || positionX <= 0) {
  //   xDirection = !xDirection;
  // }

  // // reverse y direction
  // if (positionY >= Ymax || positionY <= 0) {
  //   yDirection = !yDirection;
  // }
}

// Move all balls
let animationFrameNum;
function moveAllBalls() {
  balls.forEach((ball) => {
    checkCollisions(ball);
    console.log(ball.position.x);
    console.log(ball.velocity.x);
    console.log(ball.direction.x);
    if (ball.direction.x === true) {
      ball.position.x += ball.velocity.x;
    } else {
      ball.position.x -= ball.velocity.x;
    }
    
    if (ball.direction.y === true) {
      ball.position.y += ball.velocity.y;
    } else {
      ball.position.y -= ball.velocity.y;
    }

    // console.log(ball);
    ball.div.style.left = `${ball.position.x}px`;
    ball.div.style.top = `${ball.position.y}px`;
  });
  animationFrameNum = requestAnimationFrame(moveAllBalls);
}

// Stop all balls
function stopAllBalls() {
  cancelAnimationFrame(animationFrameNum);
}

// Stop one ball (user pick)

// Start one ball (from the stopped list)

// Clear all balls : should delete all data / refresh
function clearAllBalls() {
  stopAllBalls();
  balls = [];
  boundingBox.div.innerHTML = '';
}

/**
 *  Movement Controls
 */

// Move all balls
let moveAll = document.getElementById('moveAllBalls');
moveAll.addEventListener('click', moveAllBalls);

// Stop all balls
let stopAll = document.getElementById('stopAllBalls');
stopAll.addEventListener('click', stopAllBalls);

// Clear all balls
let clearAll = document.getElementById('clearBox');
clearAll.addEventListener('click', clearAllBalls);

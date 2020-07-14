let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
//let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
//let botDoorPath = "file:///C:/Users/chris/OneDrive/codecademy/choredoor/kisses.jpg";
let botDoorPath = "https://user-images.githubusercontent.com/64989262/87475187-2eaebc80-c5d9-11ea-8322-64cdda94d25f.jpg";
//let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
//let beachDoorPath = "file:///C:/Users/chris/OneDrive/codecademy/choredoor/spirit-linus.png"
let beachDoorPath = "https://user-images.githubusercontent.com/64989262/87475215-39695180-c5d9-11ea-9075-32f9a684b36c.png";
//let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
//let spaceDoorPath = "file:///C:/Users/chris/OneDrive/codecademy/choredoor/yip.png"
let spaceDoorPath = "https://user-images.githubusercontent.com/64989262/87475229-3e2e0580-c5d9-11ea-8d7a-704964daa5c8.png";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let startButton = document.getElementById('start');
let currentlyPlaying = true;
isBot = door => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};
isClicked = door => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  };
};
playDoor = door => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  }
};
randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
  };
};
doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentlyPlaying) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }; 
};
doorImage2.onclick = () => {
  if (!isClicked(doorImage2) && currentlyPlaying) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  };
};
doorImage3.onclick = () => {
  if (!isClicked(doorImage3) && currentlyPlaying) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  };
};
startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}
startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  };
};
gameOver = status => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'You lose, go pick up Mini poops!';
  }
  currentlyPlaying = false;
};
startRound();
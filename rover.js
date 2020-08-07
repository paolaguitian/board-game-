const array = [10][10];
const rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [{ x: 0, y: 0 }]
}


function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.x--
      rover.travelLog.push({ x: rover.x, y: rover.y });
      break
    case "S":
      rover.x++
      rover.travelLog.push({ x: rover.x, y: rover.y });
      break
    case "E":
      rover.y--
      rover.travelLog.push({ x: rover.x, y: rover.y });
      break
    case "W":
      rover.y++
      rover.travelLog.push({ x: rover.x, y: rover.y });
      break
  }
  console.log('turnLeft was called!');
  console.log(rover.x, rover.y)
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.x++
      rover.travelLog.push({ x: rover.x, y: rover.y });
      break
    case "S":
      rover.x--
      rover.travelLog.push({ x: rover.x, y: rover.y });
      break
    case "E":
      rover.y++
      rover.travelLog.push({ x: rover.x, y: rover.y });
      break
    case "W":
      rover.y--
      rover.travelLog.push({ x: rover.x, y: rover.y });
      break
  }

  console.log('turnRight was called!');
  console.log(rover.x, rover.y)

}

function moveForward(rover) {
  switch (rover.direction) {
    case "N":
      rover.y--
      rover.travelLog.push({ x: rover.x, y: rover.y });
      break
    case "S":
      rover.y++
      rover.travelLog.push({ x: rover.x, y: rover.y });
      break
    case "E":
      rover.x++
      rover.travelLog.push({ x: rover.x, y: rover.y });
      break
    case "W":
      rover.x--
      rover.travelLog.push({ x: rover.x, y: rover.y });
      break
  }
  console.log('Move Forward was called!');
  console.log(rover.x, rover.y)
}


function command(commands) {
  for (let i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case 'f': // forward
        moveForward(rover)
        break;
      case 'r': // right
        turnRight(rover)
        break;
      case 'l': // left
        turnLeft(rover)
        break;
    }
  }
}

command('rffrfflfrff');
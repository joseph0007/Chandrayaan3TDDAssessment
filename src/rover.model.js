class Rover {
  constructor(commands) {
    this.direction = 'N';
    this.coords = [0, 0, 0];
    this.commands = commands;
  }

  getCurrentCoords() {
    return this.coords;
  }

  getCurrentDirection() {
    return this.direction;
  }

  getCommands() {
    return this.commands;
  }

  setCoords(x, y, z) {
    this.coords = [x, y, z];
  }

  setDirection(dir) {
    this.direction = dir;
  }

  goForward() {
    let [x, y, z] = this.coords;

    switch (this.getCurrentDirection()) {
      case 'N': {
        this.setCoords(x, y + 1, z);
        break;
      }
      case 'S': {
        this.setCoords(x, y - 1, z);
        break;
      }
      case 'U': {
        this.setCoords(x, y, z + 1);
        break;
      }
      case 'D': {
        this.setCoords(x, y, z - 1);
        break;
      }
      case 'E': {
        this.setCoords(x + 1, y, z);
        break;
      }
      case 'W': {
        this.setCoords(x - 1, y, z);
        break;
      }
    }
  }

  goBackward() {
    let [x, y, z] = this.coords;
    switch (this.getCurrentDirection()) {
      case 'N': {
        this.setCoords(x, y - 1, z);
        break;
      }
      case 'S': {
        this.setCoords(x, y + 1, z);
        break;
      }
      case 'E': {
        this.setCoords(x - 1, y, z);
        break;
      }
      case 'W': {
        this.setCoords(x + 1, y, z);
        break;
      }
      case 'U': {
        this.setCoords(x, y, z - 1);
        break;
      }
      case 'D': {
        this.setCoords(x, y, z + 1);
        break;
      }
    }
  }

  goUp() {
    this.setDirection('U');
  }

  goDown() {
    this.setDirection('D');
  }

  goLeft() {
    switch (this.getCurrentDirection()) {
      case 'N': {
        this.setDirection('W');
        break;
      }
      case 'S': {
        this.setDirection('E');
        break;
      }
      case 'E': {
        this.setDirection('N');
        break;
      }
      case 'W': {
        this.setDirection('S');
        break;
      }
      case 'U': {
        this.setDirection('N');
        break;
      }
      case 'D': {
        this.setDirection('S');
        break;
      }
    }
  }

  goRight() {
    switch (this.getCurrentDirection()) {
      case 'N': {
        this.setDirection('E');
        break;
      }
      case 'S': {
        this.setDirection('W');
        break;
      }
      case 'E': {
        this.setDirection('S');
        break;
      }
      case 'W': {
        this.setDirection('N');
        break;
      }
      case 'U': {
        this.setDirection('S');
        break;
      }
      case 'D': {
        this.setDirection('N');
        break;
      }
    }
  }

  executeCommand() {
    if( !Array.isArray(this.commands) ) {
      return {
        finalPos: this.getCurrentCoords(),
        finalDir: this.getCurrentDirection(),
        errorMsg: "Commands received is not an array. Please give correct command list"
      }
    }

    for(let i = 0; i < this.commands.length; i++ ) {
      switch (this.commands[i]) {
        case 'f': {
          this.goForward();
          break;
        }
        case 'b': {
          this.goBackward();
          break;
        }
        case 'l': {
          this.goLeft();
          break;
        }
        case 'r': {
          this.goRight();
          break;
        }
        case 'u': {
          this.goUp();
          break;
        }
        case 'd': {
          this.goDown();
          break;
        }
        default: {
          console.log(`Unknown command => ${this.commands[i]}`);
          break;
        }
      }
    }

    return {
      finalPos: this.getCurrentCoords(),
      finalDir: this.getCurrentDirection(),
      errorMsg: ""
    }
  }
}

module.exports = Rover;


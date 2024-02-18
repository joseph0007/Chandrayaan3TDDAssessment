const { createInterface } = require('node:readline');
const constants = require("./utils/constants");

const {
  COMMAND_COUNT = 6
} = process.env;

let readline;

function getSingleCommand() {
  return new Promise(( resolve, reject ) => {
    readline.question(`Connected to the rover. Need to enter a total of ${COMMAND_COUNT} commands.\nPlease enter a character from the list (f, b, l, r, u, d) to navigate the rover? `, command => {
      console.log(`Command to execute => ${command}`);
      
      if( !command ) {
        reject("No command received. Closing the connection to the rover.");
      }

      if( !constants[command] ) {
        reject("Invalid command received. Closing the connection to the rover.");
      }

      resolve(command);
    });
  });
}

async function getCommandPromiseCb( resolve ) {
  try {
    const commandArr = [];
    while( commandArr.length < COMMAND_COUNT ) {
      commandArr.push(await getSingleCommand());
    }
  
    readline.close();
    resolve(commandArr);
  } catch (error) {
    let message = 'Connection to the rover is lost';

    if( typeof error === 'string' ) message = error;

    console.log("Error: ", message);
    process.exit(1);
  }
}

function getCommand() {
  readline = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(getCommandPromiseCb);
}

module.exports = {
  getCommand,
  getSingleCommand
}
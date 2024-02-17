const { createInterface } = require('node:readline');

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Connected to the rover. Please enter the command to navigate the rover?', command => {
  console.log(`Command to execute => ${command}`);
  
  if( !command ) {
    console.log("No command received. Closing the connection to the rover.");
    process.exit(1);
  }

  readline.close();
});

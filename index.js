const { getCommand } = require("./src/getcommands");
const Rover = require("./src/rover.model");

(async() => {
  const commandArr = await getCommand();
  const chandrayaan = new Rover(commandArr);
  const location = chandrayaan.executeCommand();

  console.log("location ", location);
})();
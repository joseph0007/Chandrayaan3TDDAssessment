const { getCommand } = require("./src/getcommands");

(async() => {
  const commandArr = await getCommand(); 

  console.log("commandArr ", commandArr);
})();
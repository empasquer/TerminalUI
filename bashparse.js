async function PARSE_CMD(CMD) {
  const args = CMD.split(/\s+/); // Split by whitespace
  const command = args[0].toLowerCase(); // The first word is the command

  switch (command) {
    case "cls":
      clear_console();
      break;
    case "clear":
      clear_console();
      break;
    case "whoami":
      term_echo_okay("empasquer");
      break;
    case "42":
      hitchEgg();
      break;
    case "101010":
      hitchEgg();
      break;
    case "motherlode":
      motherlodeEgg();
      break;
    // case "connect":
    //   // Handle 'connect' command
    //   const portIndex = args.indexOf("-p");
    //   if (portIndex !== -1 && portIndex + 1 < args.length) {
    //     const port = args[portIndex + 1];
    //     console.log(`Connecting to port ${port}`);
    //   } else {
    //     console.error("Invalid connect command. Specify port with -p");
    //   }
    //   break;

    // Add more cases for other commands as needed

    default:
      term_echo(`<r>Unknown command: ${command}</r>`);
      break;
  }
}

// Example usage:
//const commandString = 'connect -p 44405';
//PARSE_CMD(commandString);

// Display the welcome message
process.stdout.write("Welcome to Holberton School, what is your name?\n");

// Set up an event listener for when the user inputs their name
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
  
  // End the process
  console.log("This important software is now closing");
  process.exit();
});

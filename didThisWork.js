const { spawn } = require("node:child_process");
const fs = require("node:fs");

// Accepts the users prompt for image generation
async function generateImage(id, prompt) {

  await new Promise((resolve) => {
    // prompt is the users input from discord
    fs.writeFileSync('.\\inputPrompt.txt', prompt);

    // start cmd and execute a script
    const cmd = spawn('cmd.exe', ['/c', 'invoke.bat']);

    // listening on stdout for 'data' type
    cmd.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });

    // listening on stderr for 'data' type
    cmd.stderr.on("data", (data) => {
        console.log(`stderr: ${data}`);
      });
    
    // listening on stderr for 'close' to resolve the promise
    // Ends image generation
    cmd.stderr.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
      resolve();
    });
  });

  // Create a filtered array of any png file types in the specified directory
  const jpegs = fs
    .readdirSync(`C:\\Users\\David\\InvokeAI\\outputs`)
    .filter((file) => file.endsWith(".png"));
    // path to image that was just created
    const file = `C:\\Users\\David\\InvokeAI\\outputs\\${jpegs[jpegs.length-1]}`;

    return file;
}

module.exports = { generateImage };
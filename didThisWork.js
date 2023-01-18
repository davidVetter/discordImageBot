const { spawn } = require("node:child_process");
const fs = require("node:fs");

if (!fs.existsSync("./tmp")) {
  fs.mkdirSync("./tmp");
}

async function generateImage(id, prompt) {

  await new Promise((resolve) => {
    fs.writeFileSync('.\\testPrompt.txt', prompt);

    const cmd = spawn('cmd.exe', ['/c', 'invoke.bat']);

    cmd.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });

    cmd.stderr.on("data", (data) => {
        console.log(`stderr: ${data}`);
      });

    cmd.stderr.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
      resolve();
    });
  });

  const jpegs = fs
    .readdirSync(`C:\\Users\\David\\InvokeAI\\outputs`)
    .filter((file) => file.endsWith(".png"));

    const file = `C:\\Users\\David\\InvokeAI\\outputs\\${jpegs[jpegs.length-1]}`;

    return file;
}

module.exports = { generateImage };
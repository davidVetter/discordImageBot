const { spawn } = require("node:child_process");
const fs = require("node:fs");
const { copyFile } = require('node:fs/promises');

if (!fs.existsSync("./tmp")) {
  fs.mkdirSync("./tmp");
}

async function generateImage(id, prompt) {
//   const outputDir = `output/${id}`;

  await new Promise((resolve) => {
    // const options = ["--model", "SD-2.1", "--outdir", outputDir, prompt];
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

    // console.log('This is jpegs first: ', jpegs[0], ' Jpegs last: ', jpegs[jpegs.length-1] );

    const file = `C:\\Users\\David\\InvokeAI\\outputs\\${jpegs[jpegs.length-1]}`;
    // const file = 'C:\\Users\\David\\InvokeAI\\outputs\\testOut.png';

    // fs.rmSync(`./${outputDir}`, { recursive: true });

    return file;
}

module.exports = { generateImage };
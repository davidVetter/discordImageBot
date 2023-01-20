const { spawn, execFile } = require("node:child_process");
const fs = require("node:fs");

if (!fs.existsSync("./tmp")) {
  fs.mkdirSync("./tmp");
}

async function generateImage(id, prompt) {
  // const outputDir = `output/${id}`;

  await new Promise((resolve) => {
    // const options = ["--model", "SD-2.1", "--outdir", outputDir, prompt];

    const cmd = execFile('/home/dvetter/playground/discordImageBot/scripts/startInvokeAI.sh', { shell: '/bin/bash' });

    cmd.stderr.on("data", (data) => {
      console.log(`stderr: ${data}`);
    });

    cmd.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
      resolve();
    });
  });

  const jpegs = fs
    .readdirSync(`~/InvokeAI/outputs/`)
    .filter((file) => file.endsWith(".png"));

    const file = `./tmp/${id}.png`;
    fs.renameSync(`~/InvokeAI/outputs/${jpegs[jpegs[length-1]]}`, file);

    // fs.rmSync(`./${outputDir}`, { recursive: true });

    return { file };
}

module.exports = { generateImage };

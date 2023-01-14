const { spawn } = require('node:child_process');

async function generateImage(prompt){
    await new Promise((resolve) => {
        const options = ['--model', 'SD-2.1', '--outdir', 'output', prompt];

        const cmd = spawn('/Users/dvetter/miniconda3/bin/imagine', options);

        cmd.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        });

        cmd.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
            resolve();
        });
    });
}

module.exports = { generateImage };
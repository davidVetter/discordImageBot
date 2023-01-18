const { generateImage } = require('./didThisWork');
const fs = require("node:fs");

(async () => {
    await generateImage('75', "a rat wearing a nice red suit next standing with a {fantasy creature} highly detailed fantasy art {punk-style} {noun-fantasy} {hi-resolution}");
    const jpegs = fs
    .readdirSync(`C:\Users\David\InvokeAI\outputs`)
    .filter((file) => file.endsWith(".png"));

    console.log('This is jpegs first: ', jpegs[0], ' Jpegs last: ', jpegs[jpegs.length-1] );
})();
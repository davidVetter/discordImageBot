// const fs = require("node:fs");
// const { copyFile } = require("node:fs/promises");

// const jpegs = fs
//   .readdirSync(`C:\\Users\\David\\InvokeAI\\outputs`)
//   .filter((file) => file.endsWith(".png"));

// console.log(
//   "This is jpegs first: ",
//   jpegs[0],
//   " Jpegs last: ",
//   jpegs[jpegs.length - 1]
// );

// const file = `C:\\Users\\David\\codePlayground\\discordImageBot\\tmp\\test.png`;

// console.log("This is file", file);

// try {
//   copyFile(
//     `C:\\Users\\David\\InvokeAI\\outputs\\${jpegs[jpegs.length - 1]}`,
//     file
//   );
// } catch {
//   console.error("The file could not be copied");
// }

// function osfunction ()
// {
//     let os = process.platform;
    
//     console.log(' This is the OS', os);

// }

// osfunction();


function whatOs() {
  const os = process.platform;
  let generateImageFile;
  console.log(' This is the OS', os);
  if (os === 'darwin') {
    generateImageFile = '/Users/Dvetter/Documents/codePlayground/discordImageBot/src/generateImage.js';
  } else if (os === 'linux') {
    generateImageFile = './src/linuxGenerateImage';
  } else if ( os === 'win32') {
    generateImageFile = '.\\src\\generateImageWindows.js';
  }
  console.log('this is generateImageFile: ', generateImageFile);
  return generateImageFile;
}
const generateImageFile = whatOs();

const { generateImage } = require(generateImageFile);

generateImage('28', 'rocket ship (high quality) (high resolution) (digital art)');



const fs = require("node:fs");
const { copyFile } = require("node:fs/promises");

const jpegs = fs
  .readdirSync(`C:\\Users\\David\\InvokeAI\\outputs`)
  .filter((file) => file.endsWith(".png"));

console.log(
  "This is jpegs first: ",
  jpegs[0],
  " Jpegs last: ",
  jpegs[jpegs.length - 1]
);

const file = `C:\\Users\\David\\codePlayground\\discordImageBot\\tmp\\test.png`;

console.log("This is file", file);

try {
  copyFile(
    `C:\\Users\\David\\InvokeAI\\outputs\\${jpegs[jpegs.length - 1]}`,
    file
  );
} catch {
  console.error("The file could not be copied");
}


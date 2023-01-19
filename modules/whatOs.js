function whatOs() {
    const os = process.platform;
    let generateImageFile;
    if (os === 'darwin') {
      generateImageFile = '../src/generateImage.js';
    } else if (os === 'linux') {
      generateImageFile = '../src/linuxGenerateImage.js';
    } else if ( os === 'win32') {
      generateImageFile = '..\\src\\generateImageWindows.js';
    }
  
    return generateImageFile;
  }

module.exports = { whatOs };
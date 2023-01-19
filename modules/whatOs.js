function whatOs() {
    const os = process.platform;
    let generateImageFile;
    if (os === 'darwin') {
      generateImageFile = '../src/macGenerateImage.js';
    } else if (os === 'linux') {
      generateImageFile = '../src/linuxGenerateImage.js';
    } else if ( os === 'win32') {
      generateImageFile = '..\\src\\windowsGenerateImage.js';
    }
  
    return generateImageFile;
  }

module.exports = { whatOs };
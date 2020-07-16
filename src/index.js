const path = require('path');
const glob = require('glob');

const isImageRegex = /(?:jpg|gif|png)$/;
const isAlreadyResizedRegex = /^((?!.tablet.jpg|.desktop.jpg|.mobile.jpg).)*$/;
const directoryPath = path.join(__dirname, '../static');


const formatImages = (images) => {
  images.forEach(image => {
    console.log('formatting', image);
  });
}

const parseImageObjects = (err, res) => {
  if (err) {
    console.log('Unable to scan directory: ' + err);
  } else {
    const images = res.filter(file => isImageRegex.test(file) && isAlreadyResizedRegex.test(file));
    formatImages(images);
  }
};

glob(`${directoryPath}/**/*`, parseImageObjects);

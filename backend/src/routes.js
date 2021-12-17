const { threshold } = require("./controller/threshold");
const { histogram } = require("./controller/histogram");
const { zerocross } = require("./controller/zerocross");
const { watersheld } = require("./controller/watersheld");
const { sobel } = require("./controller/sobel");
const { roberts } = require("./controller/roberts");
const { prewitt } = require("./controller/prewitt");
const { noise } = require("./controller/noise");
const { lowpassmedian } = require("./controller/lowPassMedian");
const { lowpassaverage } = require("./controller/lowPassAverage");
const { histeq } = require("./controller/histeq");
const { highpassreforce } = require("./controller/highPassReforce");
const { highpassaverage } = require("./controller/highPassAverage");
const { grayscale } = require("./controller/grayscale");
const { canny } = require("./controller/canny");
const { count } = require("./controller/count");
const { imageUpload } = require("./controller/imageUpload");

module.exports = {
  threshold,
  histogram,
  zerocross,
  watersheld,
  sobel,
  roberts,
  prewitt,
  noise,
  lowpassmedian,
  lowpassaverage,
  histeq,
  highpassreforce,
  highpassaverage,
  grayscale,
  canny,
  count,
  imageUpload,
};

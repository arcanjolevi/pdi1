const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = express();
const path = require("path");
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
const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `uploads/${file.originalname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: storage,
});

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.post("/api/image", upload.single("image"), (req, res, err) => {
  if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    res.send({ msg: "Only image files (jpg, jpeg, png) are allowed!" });
  }
  res.status(200).send({ msg: "Image uploaded", filename: req.file.filename });
});

app.post("/histogram", histogram);
app.post("/threshold", threshold);
app.post("/zerocross", zerocross);
app.post("/watersheld", watersheld);
app.post("/sobel", sobel);
app.post("/roberts", roberts);
app.post("/prewitt", prewitt);
app.post("/noise", noise);
app.post("/lowpassmedian", lowpassmedian);
app.post("/lowpassaverage", lowpassaverage);
app.post("/histeq", histeq);
app.post("/highpassreforce", highpassreforce);
app.post("/highpassaverage", highpassaverage);
app.post("/grayscale", grayscale);
app.post("/canny", canny);
app.post("/count", count);

app.listen(port, () => console.log(`Server connected to ${port}`));

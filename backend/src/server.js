const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const routes = require("./routes");
const { upload } = require("./multer");

const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.post("/api/image", upload.single("image"), routes.imageUpload);
app.post("/histogram", routes.histogram);
app.post("/threshold", routes.threshold);
app.post("/zerocross", routes.zerocross);
app.post("/watersheld", routes.watersheld);
app.post("/sobel", routes.sobel);
app.post("/roberts", routes.roberts);
app.post("/prewitt", routes.prewitt);
app.post("/noise", routes.noise);
app.post("/lowpassmedian", routes.lowpassmedian);
app.post("/lowpassaverage", routes.lowpassaverage);
app.post("/histeq", routes.histeq);
app.post("/highpassreforce", routes.highpassreforce);
app.post("/highpassaverage", routes.highpassaverage);
app.post("/grayscale", routes.grayscale);
app.post("/canny", routes.canny);
app.post("/count", routes.count);

app.listen(port, () => console.log(`Server connected to ${port}`));

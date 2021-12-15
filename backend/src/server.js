const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = express();
const path = require("path");

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

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = 8000;

const { PythonShell } = require("python-shell");

app.post("/histogram/image", upload.single("image"), (req, res) => {
  if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    res.send({ msg: "Only image files (jpg, jpeg, png) are allowed!" });
  }

  console.log(req.file.filename);

  let options = {
    mode: "text",
    pythonOptions: ["-u"],
    scriptPath: "./scripts",
    args: [`./${req.file.filename}`, `./uploads/histo.jpeg`],
  };

  PythonShell.run("imhist.py", options, function (err, result) {
    if (err) throw err;

    res.send({ sentImage: req.file.filename, histogram: "uploads/histo.jpeg" });
  });
});

app.post("/histogram", (req, res) => {
  const filename = req.body.filename;
  const histogramName = `uploads/${Date.now()}-histo.jpeg`;

  if (!!filename) {
    let options = {
      mode: "text",
      pythonOptions: ["-u"],
      scriptPath: "./scripts",
      args: [`./${filename}`, `./${histogramName}`],
    };

    PythonShell.run("imhist.py", options, function (err, result) {
      if (err) throw err;

      res.send({ sentImage: filename, histogram: histogramName });
    });
  } else {
    res.status(400).send({ msg: "no filename provided", error: "Bad request" });
  }
});

app.post("/api/image", upload.single("image"), (req, res, err) => {
  if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    res.send({ msg: "Only image files (jpg, jpeg, png) are allowed!" });
  }

  res.status(200).send({ msg: "Image uploaded", filename: req.file.filename });
});

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.listen(port, () => console.log(`Server connected to ${port}`));

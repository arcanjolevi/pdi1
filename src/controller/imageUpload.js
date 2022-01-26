const { PythonShell } = require("python-shell");

const imageUpload = (req, res, err) => {
  if (
    !req.file.originalname.match(
      /\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|tiff|tif)$/
    )
  ) {
    res.send({ msg: "Only image files (jpg, jpeg, png. tiff) are allowed!" });
  }

  if (req.file.filename.includes("tif") || req.file.filename.includes("tiff")) {
    const newFilename = `./uploads/imagetif_${Date.now()}.png`;
    let options = {
      mode: "text",
      pythonOptions: ["-u"],
      scriptPath: "./scripts",
      args: [`./${req.file.filename}`, `./${newFilename}`],
    };

    PythonShell.run("convertTif.py", options, function (err, result) {
      if (err) {
        console.log(err);
        return res.status(501).send({ error: "Internal error" });
      }

      res.status(200).send({ msg: "Image uploaded", filename: newFilename });
    });
  } else {
    res
      .status(200)
      .send({ msg: "Image uploaded", filename: req.file.filename });
  }
};

module.exports = { imageUpload };

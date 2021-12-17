const imageUpload = (req, res, err) => {
  if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    res.send({ msg: "Only image files (jpg, jpeg, png) are allowed!" });
  }
  res.status(200).send({ msg: "Image uploaded", filename: req.file.filename });
};

module.exports = { imageUpload };

const { PythonShell } = require("python-shell");

const grayscale = (req, res) => {
  const { filename } = req.body;
  const outputFile = `uploads/grayscale-${Date.now()}.jpg`;

  if (typeof filename === "undefined" || !filename) {
    return res.status(400).send({ error: "Bad Request" });
  }

  let options = {
    mode: "text",
    pythonOptions: ["-u"],
    scriptPath: "./scripts",
    args: [`./${filename}`, `./${outputFile}`],
  };

  PythonShell.run("grayScale.py", options, function (err, result) {
    if (err) {
      console.log(err);
      return res.status(501).send({ error: "Internal error" });
    }

    res.send({ sentImage: filename, result: outputFile });
  });
};

module.exports = { grayscale };

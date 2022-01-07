const { PythonShell } = require("python-shell");

const lowpassmedian = (req, res) => {
  let { filename, param0 } = req.body;
  const outputFile = `uploads/lowpassmedian-${Date.now()}.jpg`;

  if (typeof param0 === "undefined" || !param0) {
    param0 = 3;
  }

  if (typeof filename === "undefined" || !filename) {
    return res.status(400).send({ error: "Bad Request" });
  }

  let options = {
    mode: "text",
    pythonOptions: ["-u"],
    scriptPath: "./scripts",
    args: [`./${filename}`, `./${outputFile}`, param0],
  };

  PythonShell.run("lowPassMedian.py", options, function (err, result) {
    if (err) {
      console.log(err);
      return res.status(501).send({ error: "Internal error" });
    }

    res.send({ sentImage: filename, result: outputFile });
  });
};

module.exports = { lowpassmedian };

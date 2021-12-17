const { PythonShell } = require("python-shell");

const noise = (req, res) => {
  let { filename, param0 } = req.body;
  const outputFile = `uploads/noise-${Date.now()}.jpg`;

  if (typeof param0 === "undefined" || !param0) {
    param0 = 0;
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

  PythonShell.run("noise.py", options, function (err, result) {
    if (err) throw err;

    res.send({ sentImage: filename, result: outputFile });
  });
};

module.exports = { noise };

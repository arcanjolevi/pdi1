const { PythonShell } = require("python-shell");

const prewitt = (req, res) => {
  const { filename } = req.body;
  const outputFile = `uploads/prewitt-${Date.now()}.jpg`;

  if (typeof filename === "undefined" || !filename) {
    return res.status(400).send({ error: "Bad Request" });
  }

  let options = {
    mode: "text",
    pythonOptions: ["-u"],
    scriptPath: "./scripts",
    args: [`./${filename}`, `./${outputFile}`],
  };

  PythonShell.run("prewitt.py", options, function (err, result) {
    if (err) throw err;

    res.send({ sentImage: filename, result: outputFile });
  });
};

module.exports = { prewitt };

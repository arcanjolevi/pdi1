const { PythonShell } = require("python-shell");

const roberts = (req, res) => {
  const { filename } = req.body;
  const outputFile = `uploads/roberts-${Date.now()}.jpg`;

  if (typeof filename === "undefined" || !filename) {
    return res.status(400).send({ error: "Bad Request" });
  }

  let options = {
    mode: "text",
    pythonOptions: ["-u"],
    scriptPath: "./scripts",
    args: [`./${filename}`, `./${outputFile}`],
  };

  PythonShell.run("roberts.py", options, function (err, result) {
    if (err) throw err;

    res.send({ sentImage: filename, result: outputFile });
  });
};

module.exports = { roberts };

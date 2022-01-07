const { PythonShell } = require("python-shell");

const histogram = (req, res) => {
  const { filename } = req.body;
  const histogramName = `uploads/${Date.now()}-histo.jpeg`;

  if (typeof filename === "undefined" || !filename) {
    return res.status(400).send({ error: "Bad Request" });
  }

  let options = {
    mode: "text",
    pythonOptions: ["-u"],
    scriptPath: "./scripts",
    args: [`./${filename}`, `./${histogramName}`],
  };

  PythonShell.run("hist.py", options, function (err, result) {
    if (err) {
      console.log(err);
      return res.status(501).send({ error: "Internal error" });
    }

    res.send({ sentImage: filename, histogram: histogramName });
  });
};

module.exports = { histogram };

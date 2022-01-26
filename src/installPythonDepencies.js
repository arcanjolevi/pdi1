let { PythonShell } = require("python-shell");

let options = {
  mode: "text",
  pythonOptions: ["-u"],
  scriptPath: "./src",
  args: [],
};
PythonShell.run("install_package.py", options, function (err, results) {
  if (err) {
	console.log(err)
	throw err;
}  else console.log(results, 'Python dependencies installed');
});

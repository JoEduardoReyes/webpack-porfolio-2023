const fs = require("fs");

let data = `API=${process.env.API}`;

fs.writeFile("./.env", data, (err) => {
	if (err) console.log(err);
	else {
		console.log("File written successfully\n");
	}
});

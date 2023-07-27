const os = require("os");
const user = os.userInfo();

const path = require("path");
const filePath = path.join("./content", "subfolder", "test.txt");

const base = path.basename(filePath);
// console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");

console.log(absolute);

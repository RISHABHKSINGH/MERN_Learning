const path = require("path");

console.log(__dirname);
console.log(__filename);

// 1. JOIN ();
const filejoin =path.join("folder","students","data.txt")
console.log(filejoin);

const parsedata = path.parse(filejoin);
const resolvedPath = path.resolve(filejoin);
const extname = path.extname(filejoin);
const basename = path.basename(filejoin);

console.log({
  parsedata,
  resolvedPath,
  extname,
  basename
});


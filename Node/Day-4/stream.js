const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const readableStream = fs.createReadStream("index.txt");
  readableStream.pipe(res);
});

//* Copying from one file to another using streams
const readStream = fs.createReadStream("index.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.on("data",(chunks)=>{
  writeStream.write(chunks);
})

server.listen(8080, () => {
  console.log("Server is connected at ", 8080);
});

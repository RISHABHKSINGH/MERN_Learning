const http = require("http");
const fs = require("fs");

const PORT = 8080;

const myserver = http.createServer((req, res) => {
  const log = `${Date.now()}: \n &From ${req.url} This show from which url requrest has been made`;
  fs.appendFile("text1.txt", log, (err) => {
    if (err) {
      console.error("Error writing to the log file", err);
      res.statusCode = 500;
      res.end("Internal server error");
      return;
    }
  });

  res.end("Hello from server ");
});

myserver.listen(PORT, () => {
  console.log("Server is connected at ", PORT);
});

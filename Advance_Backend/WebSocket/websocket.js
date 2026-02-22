import http from "http";
import WebSocket, { WebSocketServer } from "ws";

const server = http.createServer((req, res) => {
  console.log(new Date() + "Received req from ", req.url);
  res.end("Hi There");
});

const wss = new WebSocketServer({ server });

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);
  ws.on("message", function message(data, isBinary) {
    //* Connecting Multiple WebSockets
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
  ws.send("Hello Connection message from ws server ");
});

server.listen(8080, () => {
  console.log(new Date() + "Server is Running at port " + 8080);
});

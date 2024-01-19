const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 80 });

wss.on('connection', function connection(ws, req) {
  let IP = req.connection.remoteAddress.replace("::ffff:","")
  Send[IP] = ws
  // Send[IP].send(IP)
  console.log('New WebSocket connection established.',IP);
  ws.on('close', function close() {
    console.log('WebSocket connection closed.');
  });
});
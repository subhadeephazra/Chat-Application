const express = require ("express");
const app = express();
// imported http
const http = require('http');
// this is combination of express() + http;
const server = http.createServer(app);
// I got my Server by destructing "require("socket.io")"
const { Server } = require("socket.io");

const io= new Server(server);
const port = 8887;

io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on('secret message',(data)=>{
        io.emit('secret message',data);
    })
});

// app.use is used to run middlewares
// pure express app to send the html folder
app.use(express.static('public')); // pure express to server my frontend from pure express app

// http + express should listen
server.listen(port); // combined server is listening at my PORT 
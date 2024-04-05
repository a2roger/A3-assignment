// import the express package 
const express = require('express');
const app = express();
let players = 0;
var stinky = 0;

// start the server on port 3000
const server = app.listen(3000, function() { 
    console.log('http://localhost:3000') 
})

// tell the server to use this subfolder to serve web pages
app.use(express.static('public'));

// import the socket package too
const socket = require('socket.io')

// create the socket manager
const io = socket(server)

// handle event
io.sockets.on('connection', function (socket) {
    console.log(`connect ${socket.id}`)
    players += 1;

    socket.broadcast.emit('draw', players)
    console.log(players)

    socket.on('draw', function(data) {
        // send same packet to other clients
        let number = players;
        socket.broadcast.emit('draw', number)
        // this is how to broadcast to all clients
        // io.socket.broadcast.emit('mouse', data)
        console.log(data)

    })

    socket.on("output", (data) => {
        // broadcast to other clients
        socket.broadcast.emit("output", data);
        // // broadcast to all clients
        // io.emit("mouse", data);
      });
    
      socket.on("resize", (resize) => {
        // broadcast to other clients
        socket.broadcast.emit("resize", resize);
        // // broadcast to all clients
        // io.emit("mouse", data);
      });

      socket.on("sendSocket", (sendSocket) => {
        // broadcast to other clients
        socket.broadcast.emit("sendSocket", sendSocket);
        // // broadcast to all clients
        // io.emit("mouse", data);
      });

      socket.on("sendPlace", (sendPlace) => {
        // broadcast to other clients
        socket.broadcast.emit("sendPlace", sendPlace);
        // // broadcast to all clients
        // io.emit("mouse", data);
      });

    socket.on('draw', function(number){
 
     socket.broadcast.emit('draw', number)
     console.log(number)
    })
    
    socket.on('disconnect', () => {
        players -= 1;
        let number = players;
        socket.broadcast.emit('draw', number)
        console.log(`disconnect ${socket.id}`);
      });

})



const express = require("express");
const socket = require("socket.io");

const app = express();

const server = app.listen(4000,()=>{console.log("listening on port 4000");})

app.use(express.static("public"));

//socket setup

const io = socket(server)
io.on("connection",(socket)=>{
    console.log("made socket connection (backend)",socket.id);
 
    //handle chat event
    socket.on("chat",(data)=>{
        io.sockets.emit("chat",data);
    })

    socket.on("typing",(data)=>{
        socket.broadcast.emit("typing",data);
    })
})


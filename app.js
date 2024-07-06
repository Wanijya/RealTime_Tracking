const express = require("express");
const app = express();
const http = require("http");
const path = require("path");

require("dotenv").config({ path: "./.env" });

const socketIo = require("socket.io");
const server = http.createServer(app);
const io = socketIo(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));

io.on("connection", function (socket) {
  socket.on("send-location", function (data) {
    io.emit("receive-location", { id: socket.id, ...data });
  });
  socket.on("disconnect", function () {
    io.emit("user-left", socket.id);
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(process.env.PORT);

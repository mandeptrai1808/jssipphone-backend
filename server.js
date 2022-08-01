const express = require("express");
const app = express();
const path = require("path");
const { sequelize } = require("./models");
const { rootRouter } = require("./Router");
const cors = require("cors");
var http = require("http").createServer(app);
const { Server } = require("socket.io");

const io = new Server(http, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
const publicPath = path.join(__dirname, "./Public");
app.use("/Public", express.static(publicPath));

app.use("/api/v1", rootRouter);


const PORT = process.env.PORT || 6969;
http.listen(PORT, async () => {
  console.log(`server run on http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("Connect database success!");
  } catch (error) {
    console.log("Connect database error!", error);
  }
});



//Socket io
io.on("connection", (socket) => {
  console.log("helo")

  socket.on("UpdateUserLogs", () => {
    io.emit("DoUpdateUserLogs")
  })

  socket.on("UpdateHistories", () => {
    io.emit("DoUpdateHistories")
  })

  socket.on("disconnect", () => {
    console.log("--------disconnect-----")
  })
})

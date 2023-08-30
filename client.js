const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "172.25.119.90", // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: RTA");
    //conn.write("Move: up");
  });

  /*
  "Move: up" - move up one square (unless facing down)
  "Move: down" - move down one square (unless facing up)
  "Move: left" - move left one square (unless facing right)
  "Move: right" - move left one square (unless facing left)*/

  conn.on("data", (data) => {
    process.stdout.write(data);
  });

  return conn;
};

module.exports = { connect };

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
  });

  conn.on("data", (data) => {
    process.stdout.write(data);
  });

  return conn;
};

module.exports = { connect };

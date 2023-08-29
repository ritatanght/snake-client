const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "172.25.119.90", // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

//30mins

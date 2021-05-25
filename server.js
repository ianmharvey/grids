const express = require("express"),
      app = express(),
      hostname = "localhost",
      port = 3000;

app.use(express.static("public"))

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

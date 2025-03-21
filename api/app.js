const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");

const roleRoutes = require("./routes/roleRoutes");
const doctorRoutes = require("./routes/doctorRoutes");

app.use(cors());
app.use(express.json());

app.use(roleRoutes);
app.use(doctorRoutes);

app.listen(port, (error, response) => {
  if (error) {
    console.error({ data: error });
  } else {
    console.log({ data: `Server running in port ${port}` });
  }
});

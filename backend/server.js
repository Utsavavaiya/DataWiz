const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const connectDatabase = require("./utils/connectDB");
const cors = require("cors");
const fileUpload = require("express-fileupload");

PORT = 5000;
const app = express();
app.use(fileUpload({ useTempFiles: true }));
const corsOpts = {
  origin: "http://localhost:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
};
app.use(cors(corsOpts));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
  connectDatabase();
});
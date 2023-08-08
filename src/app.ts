import express from "express";
require("dotenv").config();
import helmet from "helmet";
import logger from "morgan";
import cors from "cors";

const app = express();

app.use(helmet());
app.use(logger("common"));

const corsOptions = {
  origin: "*", // allow all client
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // allow all method
  Credential: true, // enable set cookie
  exposedHeaders: ["x-auth-token"], // allow client to read header
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;
//imports routes
import send_otp_to_phone from "./routes";
import verify_otp from "./routes";
// Routes
app.use("/api/v1/", send_otp_to_phone);
app.use("/api/v1", verify_otp);

app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Hi");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

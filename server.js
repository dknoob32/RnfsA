const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");


// Dotenv config
dotenv.config();

//database connection
connectDB();

//Rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use("/api/v1/auth", require("./routes/userRoute"));
app.use("/api/v1/post", require("./routes/postRoute"));

//home
app.get("/",(req,res)=>{
  res.status(200).send({
    success:true,
  message:"node server running succesfully"
  })
})

// Port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`server running on Port No: ${PORT}`.bgGreen.white);
});

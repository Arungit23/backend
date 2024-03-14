const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute  = require("./routes/userRoute");
const errorHandler = require("./middleWare/errorMiddleware");
const cookieParser = require("cookie-parser");
const productRoute = require("./routes/productRoute");
const contactRoute = require("./routes/contactRoute");
const path = require('path');


const app = express()


// middleware
 
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:3000", "https://inven-troy.vercel.app/"],
    credentials: true
}));

app.use("/uploads", express.static(path.join(__dirname, "uploads")))


//rpoutes middle ware
app.use("/api/Users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/contactus", contactRoute);




// routes

// app.get("/", (req, res) => {
//  res.send("Home Page");
// });

const PORT = process.env.PORT || 9000;
//error middleware
app.use(errorHandler);
// connect to mogoodb
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
     app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`)
      
     })

    })
    .catch((err) => console.log(err))
 

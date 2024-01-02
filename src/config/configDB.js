import mongoose from "mongoose";
import config from "./config.js"
const URI = config.mongo_uri


/* const URI = 
    "mongodb+srv://cibanez:JUiXF4gBSbSulLkt@cluster0.21urnbo.mongodb.net/ecommerce?retryWrites=true&w=majority"; */

mongoose
  .connect(URI)
  .then(() => console.log("Conectado a la DB"))
  .catch((error) => console.log(error));
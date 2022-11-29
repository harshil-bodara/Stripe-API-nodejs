require('dotenv').config();
const express = require("express");
const app = express();
const PORT = 5000;
const customer = require("./Routes/customer");

app.use(express.json());

app.use("/customer",customer)

app.listen(PORT,() => {
    console.log(`Server running: ${PORT}`)
})
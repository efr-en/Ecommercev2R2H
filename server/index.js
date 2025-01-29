const express = require("express");
const cors = require("cors");
const productsRouter = require("./routes/products");

require('dotenv').config({ path: './../.env' }); // Add this as the FIRST line

const app = express();
const PORT = process.env.port || 5000;

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/products", productsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
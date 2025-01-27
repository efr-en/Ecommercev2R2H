const express = require("express");
const cors = require("cors");
const productsRouter = require("./routes/products");

const app = express();
const PORT = 3306;

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/products", productsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
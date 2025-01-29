const express = require("express");
const cors = require("cors");
const path = require("path");
const productsRouter = require("./routes/products");
const db = require("./db/config");


require('dotenv').config({ path: path.join(__dirname, '../../.env') }); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000; 

// Middleware
app.use(cors({
    origin: '*' 
}));
app.use(express.json());

// API routes
app.use(express.static(path.join(__dirname, '..', '..', 'dist')));

app.get('/', (req, res) => {
    res.send(path.join(__dirname, 'index.html'));
});

app.use("/api/products", productsRouter);

app.get('/products', (req, res) => {
    res.send(path.join(__dirname, 'index.html'));
});

app.get('/contact', (req, res) => {
    res.send(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

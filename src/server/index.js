const express = require("express");
const cors = require("cors");
const path = require("path");
const productsRouter = require("./routes/products");
const db = require("./db/config");


require('dotenv').config({ path: path.join(__dirname, '../../.env') }); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000; // Use uppercase PORT

// Middleware
app.use(cors({
    origin: '*' // frontend URL,
}));
app.use(express.json());

// API routes
app.use(express.static(path.join(__dirname, '../dist')));


app.use("/api/products", productsRouter);

app.get('/products', (req, res) => {
    res.send(path.join(__dirname, 'index.html'));
});
// Serve static files from the React app

// The "catchall" handler: for any request that doesn't match one above, send back index.html.
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const productsRouter = require("./routes/products");

// require('dotenv').config({ path: './../.env' }); 
// app.use(express.static(path.join(__dirname, '../dist')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../dist/index.html'));
// });

// const app = express();
// const PORT = process.env.PORT || 5000;

// //middleware
// app.use(cors());
// app.use(express.json());

// //routes
// app.use("/api/products", productsRouter);

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
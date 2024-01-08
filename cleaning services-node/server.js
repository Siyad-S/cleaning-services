const express = require('express');
const dbConnection = require("./configs/dbConnection")
const cors = require("cors");
const categories = require("./routes/category")
const products = require("./routes/product")

const port = 4000
const app = express();
dbConnection()
app.use(cors());
app.use(express.json());

app.use("/category", categories)
app.use("/product", products);

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})
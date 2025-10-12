const express = require('express');
const app = express();
const dotenv=require('dotenv').config();
const connectDB=require('./config/connectionDb');
app.use(express.json());

const PORT = process.env.PORT || 5000;
connectDB();

app.use("/recipe",require("./routes/recipe"));



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
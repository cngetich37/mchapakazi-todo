const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./connectdb/dbConnection");
const dotenv = require("dotenv").config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


connectDb();
app.use(cors({origin:'http://localhost:5173'}))
app.use(express.json());
app.use("/api/todos", require("./routes/todoRoute"));
app.use(errorHandler)
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

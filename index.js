require("dotenv").config();
const express = require('express');
const { connectMongoDb } = require("./connection")
const { logReqRes } = require("./middlewares");
const userRouter = require("./routes/user");

const app = express();
const port = process.env.PORT || 8000;

//Connection
connectMongoDb(process.env.MONGO_URL)
    .then(() => { console.log('MongoDb Connected') });

// MiddleWare
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes('log.txt'));

//Routes
app.use('/api/users', userRouter);

app.listen(port, () => console.log('Server Started at PORT :', port));

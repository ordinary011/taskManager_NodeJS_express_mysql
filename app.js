const express = require('express');
const app = express();

const db = require('./dataBase').getInstance();
db.setModels();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

const userRouter = require('./routes/userRouter.js');
const authRouter = require('./routes/authRouter.js');
const taskRouter = require('./routes/taskRouter.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/task', taskRouter);

app.use('*', (req, res) => {
	res.status(404).json('The page does not exist');
});

app.listen(3000, () => {
	console.log('Listening to the port 3000');
});

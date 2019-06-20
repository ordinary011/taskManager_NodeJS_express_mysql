const router = require('express').Router();

const getTasks = require('../controllers/task/getTasks');
const addTask = require('../controllers/task/addTask');
const deleteTask = require('../controllers/task/deleteTask');
const updateTask = require('../controllers/task/updateTask');

router.get('/:uId', getTasks);
router.post('/', addTask);
router.delete('/:uId/:tId', deleteTask);
router.put('/', updateTask);

module.exports = router;

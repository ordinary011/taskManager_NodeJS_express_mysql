const router = require('express').Router();

const userAuth = require('../controllers/auth/authUser');

router.post('/', userAuth);

module.exports = router;

const router = require('express').Router();

const regUser = require('../controllers/user/userReg.js');
const userVerify = require('../controllers/user/userVerify');

router.post('/', regUser);
router.post('/token', userVerify);

router.get('/trial', (req, res) => {
    res.json({name: 'DAVE'})
});

module.exports = router;

const express = require('express');
const userRouter = require('./user_router');
const productRouter = require('./product_router');
const router = express.Router();

router.get('/ping', (_, res) => { res.send('pong') });


router.use('/users', userRouter);

// 디자인 마켓
router.use('', productRouter);

module.exports = router;
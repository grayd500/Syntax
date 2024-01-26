const router = require('express').Router();
const merchRoute = require('./merchRoute');

router.use('/merch', merchRoute);

module.exports = router;
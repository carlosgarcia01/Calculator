const { Router } = require('express');
const calculator = require('../controller/index')
const router = Router();


//routes
router.get('/',calculator.getAllOperations)
router.get('/add/:n1/:n2',calculator.getAdd)
router.get('/subtract/:n1/:n2',calculator.getSubtract)
router.post('/add',calculator.postAdd)
router.post('/subtract',calculator.postSubtract)

module.exports = router;

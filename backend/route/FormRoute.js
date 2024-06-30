const express = require('express');
const router = express.Router();
const cont = require('../controller/FormController')

router.post('/formdata',cont.formSubmit);
router.get('/getdata',cont.getData);

module.exports = router;
const {authUser} = require ("../views/user");

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('api v1');
});
router.post('/auth', authUser);


module.exports = router;

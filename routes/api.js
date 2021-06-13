const {authUser} = require ("../views/user");
const {updateItemView, createItemView, deleteItemView} = require ("../views/item");

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('api v1');
});

router.post('/auth', authUser);

router.post('/item', createItemView);
router.put('/item', updateItemView);
router.delete('/item', deleteItemView);

module.exports = router;

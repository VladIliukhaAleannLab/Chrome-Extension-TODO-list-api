const {authUser} = require ("../views/user");
const {updateItemView, createItemView, deleteItemView} = require ("../views/item");
const {getSyncListView, syncListView} = require ("../views/list");

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('api v1');
});

router.post('/auth', authUser);

router.post('/item', createItemView);
router.put('/item', updateItemView);
router.delete('/item', deleteItemView);

router.get('/sync-list', syncListView);
router.post('/sync-list', getSyncListView);

module.exports = router;

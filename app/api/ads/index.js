'use strict';

var express = require('express');
var controller = require('./ads.controller');

var router = express.Router();

router.get('/', controller.showAllAds);
router.get('/:id', controller.showOne);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
const express = require('express');
const router = require('express').Router();
const locationGet = require('./locationGet');
const locationDelete = require('./locationDelete');
const locationPost = require('./locationPost');
const locationPut = require('./locationPut');

// Middlewares
router.use(express.json());

// User routes
router.get('/', locationGet);
router.post('/', locationPost);
router.put('/:id', locationPut);
router.post('/delete/:id', locationDelete);



module.exports = router;
const express = require('express');
const customerController = require('../controller/customer.controller');

const router = express.Router();

// Routes for customer model
router.post('/createCustomer', customerController.createCustomer);
router.get('/getCustomers', customerController.getCustomers);
router.get('/getCustomerById', customerController.getCustomerById);
router.get('/getCustomerByEmail', customerController.getCustomerByEmail);
router.put('/updateCustomer', customerController.updateCustomer);
router.delete('/deleteCustomer', customerController.deleteCustomer);

module.exports = router;
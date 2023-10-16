const db = require("../db.config");
const Customer = db.customers;

function createCustomer(req, res) {
  const customerData = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };
  if (!req.body.name || !req.body.email || !req.body.age) {
    return res.status(400).send({ status: 0, data: "Bad Request" });
  }
  Customer.findOne({ where: { email: req.body.email } }).then((customer) => {
    if (!customer) {
      Customer.create(customerData)
        .then((data) => {
          res.status(200).send({
            status: 1,
            message: "customer created successfully",
            data,
          });
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    } else {
      res.status(404).send({
        status: 0,
        message: "Customer already present with same email: " + req.body.email,
      });
    }
  });
}

function getCustomers(req, res) {
  Customer.findAll()
    .then((data) => {
      res
        .status(200)
        .send({ status: 1, message: "customer data available", data });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

function getCustomerById(req, res) {
  const customerId = req.query.id;

  Customer.findOne({ where: { id: customerId } }).then((customer) => {
    if (customer) {
      Customer.findByPk(req.query.id)
        .then((data) => {
          res.status(200).send({
            status: 1,
            message: "customer data available for id: " + req.query.id,
            data,
          });
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    } else {
      res.status(404).send({
        status: 0,
        message: "Customer not found for id: " + customerId,
      });
    }
  });
}

function getCustomerByEmail(req, res) {
  Customer.findOne({ where: { email: req.query.email } }).then((customer) => {
    if (customer) {
      Customer.findOne({ where: { email: req.query.email } })
        .then((data) => {
          res.status(200).send({
            status: 1,
            message: "customer data available for email: " + req.query.email,
            data,
          });
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    } else {
      res.status(404).send({
        status: 0,
        message: "Customer not found for email: " + req.query.email,
      });
    }
  });
}

function updateCustomer(req, res) {
  const newCustomerData = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };

  Customer.findOne({ where: { email: req.body.email } }).then((customer) => {
    if (customer) {
      Customer.update(newCustomerData, { where: { email: req.body.email } })
        .then(() => {
          res.status(200).send({
            status: 1,
            message:
              "customer updated successfully for email: " + req.body.email,
          });
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    } else {
      res.status(404).send({
        status: 0,
        message: "Customer not found for email: " + req.body.email,
      });
    }
  });
}

function deleteCustomer(req, res) {
  const customerId = req.query.id;

  Customer.findOne({ where: { id: customerId } })
    .then((customer) => {
      if (customer) {
        Customer.destroy({ where: { id: customerId } })
          .then(() => {
            res.status(200).send({
              status: 1,
              message: "Customer deleted successfully for id: " + customerId,
            });
          })
          .catch((error) => {
            res.status(500).send(error);
          });
      } else {
        res.status(404).send({
          status: 0,
          message: "Customer not found for id: " + customerId,
        });
      }
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

module.exports = {
  createCustomer,
  getCustomers,
  getCustomerById,
  getCustomerByEmail,
  updateCustomer,
  deleteCustomer,
};

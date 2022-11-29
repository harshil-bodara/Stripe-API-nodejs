const express = require("express");
const router = express();
const StripeController = require("../Controller/customer.controller");


/* Create Customer Payload
 {
     "email":"customer.one@gmail.com",
     "name":"Customer One",
     "description": "Hello One"
 }*/

router.post("/create", async function (req, res) {
    await StripeController.createCustomer(req, (error, response) => {
      if (error) {
        res.send({
          status: 400,
          error: error,
        });
      } else {
        res.send({
          status: 200,
          message: response,
        });
      }
    });
});

/* Retrive Customer Payload 
 {
    "id":"cus_MtFF5QiIGrhBpR"
 }*/

 router.post("/retrieve", async function (req, res) {
    await StripeController.retrieveCustomer(req, (error, response) => {
      if (error) {
        res.send({
          status: 400,
          error: error,
        });
      } else {
        res.send({
          status: 200,
          message: response,
        });
      }
    });
});

module.exports = router;
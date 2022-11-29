const express = require("express");
const router = express();
const TokenController = require("../Controller/token.controller");

/* Create Token Payload
{
    "card":{
    "number":"4242424242424242",
    "exp_month":11,
    "exp_year":2023,
    "cvc":"314"
    }
}*/

router.post("/create", async function (req, res) {
    await TokenController.createToken(req, (error, response) => {
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
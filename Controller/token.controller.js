const stripe = require('stripe')(process.env.STRIPE_API_KEY);

const createToken = async(data, callback) => {
   try
   {
    const body = data?.body;
    const response = await stripe.tokens.create(body)
    if(response)
        return callback(null, "Token created successfully!");
   }
   catch(error){
    return callback(error, null);
   }
}

module.exports = {
    createToken
}
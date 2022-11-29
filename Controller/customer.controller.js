const stripe = require('stripe')(process.env.STRIPE_API_KEY);

const createCustomer = async(data, callback) => {
   try
   {
    const body = data?.body;
    const getCustomers = await stripe.customers.list({
        email: body.email,
      });
    const isExitsingCustomer = getCustomers?.data?.length > 0;
    if (isExitsingCustomer) 
        return callback("Customer already exit!", null);  
    const response = await stripe.customers.create(body)
    if(response)
        return callback(null, "Customer created successfully!");
   }
   catch(error){
    return callback(error, null);
   }
}

const retrieveCustomer = async(data, callback) => {
    try
    {
     const body = data?.body.id;
     const response = await stripe.customers.retrieve(body)
     if(response)
         return callback(null, response);
    }
    catch(error){
        console.log("error",error)
     return callback(error, null);
    }
 }

module.exports = {
    createCustomer, retrieveCustomer
}
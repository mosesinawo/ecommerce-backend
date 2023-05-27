
STRIPE_KEY="sk_test_51N2yxAIQkjw5BTbBAsPR9eOJJE1bDwVhX3WYlwJFTFguIYjP4JhE0qHT81j1YJACrFgs2G0i2oeF7mGXbvKksuiK00eNfEc0CX"
const router = require("express").Router();
const stripe = require("stripe")(STRIPE_KEY)
 
router.post("/payment", (req, res) =>{
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd"
    }, 
    (stripeErr, stripeRes) =>{
        if(stripeErr){
            res.status(500).json(stripeErr)
        }else{
            res.status(200).json(stripeRes)
        }
    })
})

module.exports = router
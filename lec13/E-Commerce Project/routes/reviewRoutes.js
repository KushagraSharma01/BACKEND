const express = require("express");
const Review = require("../model/Review");
const router = express.Router() // mini application / mini instance

//READ
router.get('/review', async(req, res) => {
    let reviews = await Review.find({}); // promise
    res.render('reviews/index', { products });
})
router.post('/products/:id/review',async(req,res)=>{
    let {id}=req.params;
    let {rating,comment}=req.body;
    let review= new Review({rating,comment})
    let product =await Product.findById(Id);
    product.reviews.push(review);
    await product.save();
    await review.save();
    
})
module.exports = router;

const mongoose = require('mongoose');
const Product = require('./model/Product');




let products = [
    {
        name:"Modi JI",
        img:"https://4.bp.blogspot.com/-RBrdhp-oWtw/VuGG8H6YBDI/AAAAAAAAAaU/iYcAjN4YuLc/w1200-h630-p-k-no-nu/Narendra-Modi-Pig.jpg",
        price:1500000,
        desc:"bahot bhadiya gendbaaz"
    },
    {
        name:"Kejriwal",
        img:"https://indianmemetemplates.com/wp-content/uploads/arvind-kejriwal-yawning-during-protest.jpg",
        price:150,
        desc:"jheelo ka shehar"
    },
    {
        name:"Rahul Gandhi",
        img:"https://imgk.timesnownews.com/1_(1)_1532111712__rend_4_3.jpg?tr=w-600",
        price:10000000,
        desc:"idhar se aaloo udhar se sona"
    },
    {
        name:"Geogia Meloni",
        img:"https://img.iltempo.it/images/2020/07/31/082309552-6de97336-7104-43bd-9bad-e16d6f78b544.jpg",
        price:6000,
        desc:"waah Modiji waah"
    },
    {
        name:"Mamta Banerjee",
        img:"https://images.news18.com/ibnlive/uploads/2021/02/1613023608_hamba-hamba-ramba-ramba-kamba-kamba-dumba-dumba-bumba-bumba.-bomba-bomba..jpg",
        price:555,
        desc:"bomba bomba lomba lomba humba humba rumba rumba"
    },
    {
        name:"Arvind Bhaiya",
        img: "https://th.bing.com/th/id/OIP.WWieRHCB_ceHj0rkrdro6gHaFj?pid=ImgDet&rs=1",
        price: 25000,
        desc:"ye 5 logo ka data iunke ppa ke paas jaa rha hai "
    }
]


async function seedDB() {
    await Product.insertMany(products);
    console.log("Data seeded");
}

module.exports = seedDB;
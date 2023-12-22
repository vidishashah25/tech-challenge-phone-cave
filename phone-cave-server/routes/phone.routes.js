const router = require("express").Router(); 
const Phone = require("../models/Phone.model")
const mongoose = require("mongoose");

//POST /phones
router.post("/phones",(req,res,next)=>{
  const {
    brandName,
    picURL,
    modelName,
    price,
    storage,
    color,
    OS,
    desc
} = req.body

const newPhone = {
    brandName,
    picURL,
    modelName,
    price,
    storage,
    color,
    OS,
    desc
}

Phone.create(newPhone)
    .then((phone)=>{
        res.status(201).json(phone)
    })
    .catch((err)=>{
        console.log("Error creating phone...", err);
        res.status(500).json({ message: "Error creating phone..." });
    })
})

//GET /phones/

router.get("/phones",(req,res,next)=>{
    Phone.find()
        .then((phones) => {
            console.log("Phones",phones);
            res.json(phones);
        })
        .catch((err)=> {
            next(err);
        })
})

//GET /phone/:phoneId

router.get("/phones/:phoneId" , (req,res,next) =>{
    const { phoneId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(phoneId)) {
        res.status(400).json({ message: "Specified id is not valid" });
        return;
      }

      Phone.findById(phoneId)
        .then((phone)=>{
            console.log("Retrieved phone ->", phone);
            res.json(phone);
        })
        .catch((err) => {
            next(err);
        })
})



















module.exports = router;
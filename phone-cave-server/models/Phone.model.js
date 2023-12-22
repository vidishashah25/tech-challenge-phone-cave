const {Schema, model} = require("mongoose");

const phoneSchema = new Schema({
    brandName : {type: String, require: true},
    picURL : {type: String, default: 'https://i0.wp.com/blankhans.io/wp-content/uploads/2021/08/placeholder.png?w=1200&ssl=1'},
    modelName : {type: String, require: true},
    price : {type: Number, require: true},
    storage : {type: String, require: true},
    color : {type: String, default:'Black'},
    OS : {type: String, require: true},
    desc : {type: String, require: true}
})

const Phone = model("Phone",phoneSchema);
module.exports = Phone;
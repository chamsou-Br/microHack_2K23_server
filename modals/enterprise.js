const mongoose = require("mongoose");

const EnterpriseSchema = mongoose.Schema({
    nom : {
        type : String 
    },
    field : {
        type : String
    },
    contract : {
        type : String
    },
    sensors : {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
      }
})

const Enterprise = mongoose.model("EnterpriseModal",EnterpriseSchema);
module.exports =  Enterprise;
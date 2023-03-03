const mongoose = require("mongoose");

const EquipmentSchema = mongoose.Schema({
    nom : {
        type : String 
    },
    machine : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "machinModal"
    },
    createdAt: {
        type: Date,
        default: Date.now
      }
})

const Equipment = mongoose.model("EquipmentModal",EquipmentSchema);
module.exports =  Equipment;
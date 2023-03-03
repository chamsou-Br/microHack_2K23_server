

const { Double } = require("bson");
const mongoose = require("mongoose");


const MachinScheama = mongoose.Schema({
    nom : {
        type : String
    },
    model : {
        type : String,
        default : "0000000"
    },
    enterprise : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'EnterpriseModal'
    },
    perfection : {
        type : Number,
    },
    status : {
        type : String,
        enum: ['satisfiable', 'fonctionnal', 'disatisfiable']
    },
    temperature : {
        type : Number
    },
    vibration : {
        type : Number
    },
    flow : {
        type:Number
    },
    noise : {
        type : Number //SPL = 20 x log10(P2/P1)
    },
    powerConsumption : {
        type : Number
    },
    humidity : {
        type : Number
    },
    gasAndChemicalConcentrations : {
        type : Number
    },
    currentAndVoltage : {
        type : Number
    },
    Moisture : {
        type : Number
    },
})

const Machine = mongoose.model("machinModal",MachinScheama);

module.exports=  Machine;
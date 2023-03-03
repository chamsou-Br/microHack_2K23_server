const Equipment = require("../modals/equipment");
const Machine = require("../modals/machin");



 const getAllMachin = async (req , res ) => {
    try{
        const enterprise = req.body.enterprise;   
        const data = await Machine.find({enterprise : enterprise});
        res.status(200).json({status : 200, data })
    }
    catch(err) {
        res.status(400).json({status : 400 , data : {}})
    }

}

 const getMachin = async(req , res)=> {
    try {
    
    const id = req.params.id;   
    const data = await Machine.findById(id);
    res.status(200).json({status : 200, data })
    }
    catch(err) {
        res.status(400).json({status : 400 , data : {}})
    }
}

 const addMachin = async(req , res)=> {
    try {
        const data = req.body;   
        await Machine.create(data);
        const AllMachine = await Machine.find({enterprise : data.enterprise});
        res.status(200).json({status : 200, data :AllMachine })
    }catch(err ){
        res.status(400).json({status : 400 , data : {}})
    }

}

module.exports = {getAllMachin , getMachin , addMachin} 
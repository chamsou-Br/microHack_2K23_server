const Enterprise  = require("../modals/enterprise");
const Machine = require("../modals/machin");



 const getAllEnterprise = async (req , res ) => {
    try{
        const data = await Enterprise.find();
        res.status(200).json({status : 200, data })
    }
    catch(err) {
        console.log(err.message)
    }

}

 const getEnterprise = async(req , res)=> {
    try{
    const id = req.params.id;   
    console.log(id,"mmm")
    const data = await Enterprise.findById(id);
    res.status(200).json({status : 200, data })
    }    catch(err) {
        res.status(400).send({status : 400, data : {}})
    }
}

 const addEnterprise = async(req , res)=> {
    try{
    const data = req.body;   
    await Enterprise.create(data);
    const AllMachine = await Enterprise.find({});
    res.status(200).json({status : 200, data :AllMachine })
    }
    catch(err) {
        res.status(400).send({status : 400, data : {}})
    }
}

module.exports = {getAllEnterprise , getEnterprise , addEnterprise} 
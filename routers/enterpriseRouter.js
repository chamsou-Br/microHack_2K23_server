const express = require("express");
const EnterpriseRouter = express.Router();
const EnterpriseConroller = require("../controller/Enterprise")

EnterpriseRouter.use(express.json());
EnterpriseRouter.use(express.urlencoded({extended : true}));


EnterpriseRouter.get("/" , EnterpriseConroller.getAllEnterprise);
EnterpriseRouter.post("/add",EnterpriseConroller.addEnterprise)
EnterpriseRouter.get("/:id" , EnterpriseConroller.getEnterprise)

module.exports = EnterpriseRouter 
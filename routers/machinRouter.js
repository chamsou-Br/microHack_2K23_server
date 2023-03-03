const express = require("express");
const MachinRouter = express.Router();
const MachinConroller = require("../controller/MachinController")

MachinRouter.use(express.json());
MachinRouter.use(express.urlencoded({extended : true}));


MachinRouter.post("/" , MachinConroller.getAllMachin);
MachinRouter.post("/add",MachinConroller.addMachin)
MachinRouter.get("/:id" , MachinConroller.getMachin)

module.exports = MachinRouter
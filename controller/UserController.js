const User = require("../modals/user");
const authController = require("./AuthController");

const LoginContoller = async (req, res) => {
  const { user, err } = await User.login(req.body.email, req.body.password);
  if (err) res.status(400).send(err);
  else {
    console.log("sucess");
    const token = await authController.getToken(user._id);
    res.cookie("Handitor", token, {
      httpOnly: true,
      maxAge: 12 * 30 * 24 * 3600 * 1000,
    });
    res.status(200).json({status : 200,token,user });
  }
};

const RegisterConroller = async (req, res) => {
  const data = req.body;
  const info = {
    name :  data.name,
    email : data.email,
    password : data.password,
  }
  console.log(info)
  const { user, err } = await User.register(info);
  if (err) {
    res.status(403).json({status : 403,err});
  } else {
    const token = await authController.getToken(user._id);
    res.cookie("Handitor", token, {
      httpOnly: true,
      maxAge: 12 * 30 * 24 * 3600 * 1000,
    });
    res.status(200).json({status : 200,token ,  user });
  }
};

module.exports = { LoginContoller, RegisterConroller };
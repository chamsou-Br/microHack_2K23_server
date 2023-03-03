const mongoose = require("mongoose");
const authController = require("../controller/AuthController")
const bcrypt = require("bcrypt")


const UserSchema = mongoose.Schema({
    name : {
        type : String ,
        required : [true,'Veuillez entrer un prénom'], 
    },
    email : {
        type : String ,
        required : [true,'Veuillez entrer un email'],
        unique : true,
        lowercase : true
    },    
    password : {
        type :String,
        required :[true,'Veuillez entrer un mot de pass'],
        min : [8,'La longeur minimale est 8 caractère'],
    },
})
UserSchema.statics.login = async(email , password ,) => {
    try {
            const user = await User.findOne({email});
            if (user) {
                const auth = await bcrypt.compare(password , user.password);
                if (auth) {
                    return {user}
                }
                throw Error('incorrect Password');
            }
            throw Error('incorrect Email');
      
    }catch (err) {
        const errour = authController.HandlError(err);
        return {err  : errour}
    }
}
UserSchema.statics.register = async(info) => {
    try{
            const salt = await bcrypt.genSalt();
            let passwordHash = null;
            if (info.password ? info.password.length >= 8 : false) {
                 passwordHash = await bcrypt.hash(info.password , salt);
           } else {
               throw Error("password min length")
           } 
            const user = await User.create({...info , password : passwordHash});
            return {user}
    }catch(err) {
        const errour = authController.HandlError(err);
        return {err  : errour}
    }
}

const User = mongoose.model("UserModal" , UserSchema)
module.exports = User ;
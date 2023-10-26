const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"please fill your name"],
            trim:true,
        },
        email:{
            type:String,
            required:[true,"please provide your email"],
            unique:true,
            trim:true,
        },
        password:{
            type:String,
            required:[true, "please add your password"],
            min:6,
            max:64,
        },
        role:{
            type:String,
            default:"user"
        },
    },
    {timestamps:true}
);

module.exports = mongoose.model("User",userSchema);
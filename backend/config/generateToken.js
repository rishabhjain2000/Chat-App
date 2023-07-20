const jwt=require("jsonwebtoken")

const generateToken=(id)=>{
    console.log('====================================');
    console.log(process.env.JWT_SECRET);
    console.log('====================================');
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:"30d",
    })
}

module.exports=generateToken;
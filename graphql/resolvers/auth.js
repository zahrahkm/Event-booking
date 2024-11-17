const bcrypt = require('bcryptjs');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
  createUser: async ({input:{email,password}}) => {
    try {
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        throw new Error('User exists already.');
      }
      const hashedPassword = await bcrypt.hash(password, 12);
    
      const user = new User({
        email: email,
        password: hashedPassword
      });

      const result = await user.save();
      
      return { ...result._doc, password: null, _id: result.id };
    } catch (err) {
      throw err;
    }
  },
  login:async({email,password})=>{
     const user=await User.findOne({email:email})
     if(!user){
        throw new Error('User does not exist!')
     }
    const isEqual= await bcrypt.compare(password,user.password)

    if(!isEqual){
        throw new Error("Password is incorect!")
    }

    const token=await jwt.sign(
        {//data we want to put in a token
        userId:user._id,
        email:user.email
        },
        'zahraPrivateKey',//privatekey
        {
            expiresIn:'1h'//expire in one hour
        }
    )

    return{
        userId:user._id,
        token:token,
        tokenExpiration:1}


  }
};
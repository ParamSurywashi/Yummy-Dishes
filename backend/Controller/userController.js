
const jwt = require('jsonwebtoken');
const model = require('../Model/User');
const bcrypt = require('bcrypt');

const User = model.User;
exports.adduser = async (req,res)=>{
    // console.log(req.body);
    const user = new User(req.body);
    var token = jwt.sign({ email: req.body.email }, 'shhhhh');
    const hash = bcrypt.hashSync(user.password, 10);
    user.password=hash;
    user.token = token;
    user.save();
    res.setHeader('Content-Type','application/json');
    res.send(user);
   
   }

exports.loginuser = async (req,res)=>{
    // console.log(req.body);
     try{
       let token = req.headers["x-access-token"];
       if (!token) {
          return res.status(403).send({ message: "No token provided!" });
        }
 
       const user =  await User.findOne({email: req.body.email});
        const isAuth = bcrypt.compareSync(req.body.password, user.password);
 
           if(user && isAuth && token === user.token){
              res.json({"validate" : true, "username" : user.username});
              res.end();
           }else{
             res.json({"validate" : false});
           }
        }catch(err){
          res.json({"validate" : false});  
        }
     }
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
dotenv.config({path:'./config.env'})

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log('connected')
}).catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

userSchema.pre('save', async function (next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10)
    }
    next();
})

const User = mongoose.model('user',userSchema);


const app = express();

app.use(express.json());

app.listen(5000,()=>{
    console.log('server running')
})

app.get('/',(req, res)=>{
    res.send("Hello Server")
})

app.post('/signup',(req, res)=>{
    const {name, email, password} = req.body;
    User.findOne({email:email}).then((userExist)=>{
        if(userExist){
            return res.status(424).json({message:'user exist'})
        }
        else{
            const user = new User({name, email, password});
            user.save().then(()=>{
                res.status(200).json({message:'successfully registered'})
            })
        }
    })
})


app.post('/login',(req, res)=>{
    const {email, password} = req.body;
    User.findOne({email:email}).then((userExist)=>{
        if(userExist){
            bcrypt.compare(password, userExist.password, (err, result)=>{
                if(result){
                    res.status(200).json({message:'user logged in successfully'})
                }
                else{
                    res.status(401).json({message:'wrong password'});
                }
            })
        }
        else{
            res.status(404).json({message:'user does not exist'})
        }
    })
})
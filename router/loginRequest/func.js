
import  CourseData from '../../schema/lesson.js';



export const getcourse = async(req,res)=>{
    try{
        const data = await CourseData.find();
        if(data){
            res.status(200).json({data})
        }else{
            res.status(201).json({"message" : "no blog is created till now"});
        }
       

    }catch(err){
        res.status(404).json({"message":err});
    }
}


export const addcourse = async(req,res)=>{
   

        try{
        const {title,description,imageurl,units} = req.body;
        console.log(req.body)
       
         
                const data = await  new CourseData({title,description,imageurl,units});
                await data.save();
                
                console.log("added successfully");
                return res.status(201).json({data});

        


    }catch(err){
        console.log({"message":err})
    }

}

export const getdatabyid = async(req,res)=>{
    const id = req.params.id;
    console.log(id)
    try{

        const data = await CourseData.findById(id)
        if(data){
           
            res.status(200).json(data);
        }else{
            res.status(404).json({"message" :" not found"});  
        }
    }catch(err){
        console.log(err)
    }
}


import bcrypt from 'bcrypt'
import LoginData from '../../schema/login.js';

export const signIn = async(req,res)=>{
    try{
        const {email,password,confirmPassword} = req.body;
        console.log(req.body)
        if(password == confirmPassword){
            const hashPassword = await bcrypt.hash(password,10);
            const result = await LoginData.findOne({email});
            if(!result){
                const data = await  new LoginData({email,password:hashPassword,confirmPassword});
                await data.save();
                
                console.log("signUp successfully");
                return res.status(201).json({data});

            }else{
                return res.status(205).json({message:"user account already exist"});
            }
        }else{
            return res.status(401).json({message:"invalid details"}); 
        }


    }catch(err){
        console.log({"message":err})
    }
    

}


export const login = async(req,res)=>{
    const{email, password} = req.body;
    const data = await LoginData.findOne({email});
    try{
       if(!data){
           return res.status(201).json({message:"account does not exist"});
        }
        else{
            console.log(data);
            const check = await bcrypt.compare(password,data.password)
            if(check){
                console.log("login success");
               return   res.status(201).json({data});
            }else{
               return res.status(401).json({message:"invalid password"});
            }
        }
    }catch(err){
       return res.status(404).json({message : "check your password is unique or not"});
    }

}




export const getdata = async(req,res)=>{
    const id = req.params.id;
    console.log(id)
    try{

        const data = await LoginData.findById(id)
        if(data){
            const {email,text} = data
            res.status(200).json({email,text});
        }else{
            res.status(404).json({"message" :" not found"});  
        }
    }catch(err){
        console.log(err)
    }
}



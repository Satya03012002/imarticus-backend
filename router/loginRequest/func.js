
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

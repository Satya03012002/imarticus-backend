import mongoose from "mongoose";


const courseData = new mongoose.Schema({
    title: {
        type: String,
        required: [true, " title requires"]
    },
    description: {
        type: String,

    },
    imageurl: {
        type: String
    },
    units: [{
        title: {
            type: String
        },
        lectures: [{
            title: {
                type: String

            },
            duration: {
                type: String
            },
            description: {
                type: String,
        
            },
            videourl: {
                type: String,
        
            }
        }],
        Quiz: [{
            title: {
                type: String
            }
    
        }],

    }],
 
  
});

const CourseData = new mongoose.model("Course", courseData);
export default CourseData;
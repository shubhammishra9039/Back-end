import mongoose from 'mongoose'

const leavesSchema =new mongoose.Schema({

    applyeBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
      }
      ,

    leaveType:{
        Enum:["Sick","Paid","Casule"]
    },
    leaveTo:{
        type:Date,
        require:true
    },
    leaveFrom:{
        type:Date,
        require:true
    },






},{timestamps:true})


 const leaves = mongoose.model("leave",leavesSchema)

 export default leaves
import mongoose  from mongoose

const student = new mongoose.Schema({
name:{
  typeof:String,
  required:true,
  unique:true
}
,
phone:{
  typeof:Number,
  required :true,
  unique:true
}


})


export const student = mongoose.model("student",student)
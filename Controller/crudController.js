const Test = require('./models/testSchema');

  //Fetch data from database
  const getAllStudents = async(req, res) =>{
    try{
      const students = await Test.find({})
      res.status(200).json(students)
  
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  };
  
  //Fetch specific data from database
const getStudentById = async(req, res) =>{
    try{
      const {id} = req.params
      const student = await Test.findById(id);
      res.status(200).json(student)
  
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  };
  
  //Send data to database
   const createStudent = async(req, res) => {
      try{
        const student = await Test.create(req.body)
        res.status(200).json(student)
  
      } catch (error) {
        console.log(error.message); 
          res.status(500).json({message: error.message})
        }
      
    };
  
    //to update the database
   const updateStudentById = async(req, res) => {
      try{
        const {id} = req.params;
        const student = await Test.findByIdAndUpdate(id, req.body);
        //student does not exist in database
        if(!student){
          return res.send(404).json({message: `cannot find student with ID ${id}`})
        }
        const updatedStudent = await Test.findById(id);
        res.status(200).json(updatedStudent); //this returns the updated data
          } catch (error) {
        res.status(500).json({message: error.message})
      }
    };
  
  
    //delete from the database
  const deleteStudentById = async(req, res) => {
    try{
      const {id} = req.params;
      const student = await Test.findByIdAndDelete(id);
      if(!student){
        return res.send(404).json({message: `cannot find student with ID ${id}`})
      }
      res.status(200).json({message: `student with ID ${id} successfully deleted!`})
  
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  };

  module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudentById,
    deleteStudentById,
  };
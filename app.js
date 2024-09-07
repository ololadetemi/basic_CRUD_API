const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Test = require('./models/testSchema');
const crudRoutes = require('./Routes/crudRoutes');


const app = express();
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => console.log('Connected!'))
  .catch((err) => console.log('error connecting to database:', err));

  //Middlewares
  app.use(express.static('public'));
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  app.use(cookieParser());
  app.use(crudRoutes);



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/blog', function (req, res) {
    res.send('Hello blog world')
  })

//   //Fetch data from database
// app.get('/students', async(req, res) =>{
//   try{
//     const students = await Test.find({})
//     res.status(200).json(students)

//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })

// //Fetch specific data from database
// app.get('/students/:id', async(req, res) =>{
//   try{
//     const {id} = req.params
//     const student = await Test.findById(id);
//     res.status(200).json(student)

//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })

// //Send data to database
//   app.post('/students', async(req, res) => {
//     try{
//       const student = await Test.create(req.body)
//       res.status(200).json(student)

//     } catch (error) {
//       console.log(error.message); 
//         res.status(500).json({message: error.message})
//       }
    
//   })

//   //to update the database
//   app.put('/students/:id', async(req, res) => {
//     try{
//       const {id} = req.params;
//       const student = await Test.findByIdAndUpdate(id, req.body);
//       //student does not exist in database
//       if(!student){
//         return res.send(404).json({message: `cannot find student with ID ${id}`})
//       }
//       const updatedStudent = await Test.findById(id);
//       res.status(200).json(updatedStudent); //this returns the updated data
//         } catch (error) {
//       res.status(500).json({message: error.message})
//     }
//   })


//   //delete from the database
// app.delete('/students/:id', async(req, res) => {
//   try{
//     const {id} = req.params;
//     const student = await Test.findByIdAndDelete(id);
//     if(!student){
//       return res.send(404).json({message: `cannot find student with ID ${id}`})
//     }
//     res.status(200).json({message: `student with ID ${id} successfully deleted!`})

//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })


  const  port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
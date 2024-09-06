const { Router } = require('express');

const {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudentById,
    deleteStudentById,
} = require('../Controller/crudController');

const router = express.Router();

router.get('/students', crudController.getAllStudents)
router.get('/students/:id', crudController.getStudentById)
router.post('/students', crudController.createStudent)
router.put('/students', crudController.updateStudentById)
router.delete('/students', crudController.deleteStudentById)


module.exports = router;
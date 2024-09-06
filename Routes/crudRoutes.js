const { Router } = require('express');

const crudController = require('../Controller/crudController');

const router = Router();

router.get('/students', crudController.getAllStudents)
router.get('/students/:id', crudController.getStudentById)
router.post('/students', crudController.createStudent)
router.put('/students/:id', crudController.updateStudentById)
router.delete('/students', crudController.deleteStudentById)


module.exports = router;
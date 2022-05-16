import express from 'express';
import EmployeeController from '../controllers/EmployeeController.js';

const router = express.Router();

//reports

router
  .route('/')
  .post(EmployeeController.createEmployee)
  .get(EmployeeController.getAllEmployees);

router
  .route('/:id')
  .get(EmployeeController.getEmployeeByID)
  .put(EmployeeController.updateEmployeeDetails)
  .delete(EmployeeController.deleteEmployeeDetails);

export default router;

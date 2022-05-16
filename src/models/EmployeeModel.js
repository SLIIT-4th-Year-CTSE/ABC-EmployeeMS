import mongoose from 'mongoose'

const EmployeeSchema = mongoose.Schema({
  emp_name: {
    type: String,
    required: true,
  },
  emp_image: {
    type: String,
    required: false,
  },
  emp_role: {
    type: String,
    required: true,
  },
  emp_email: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
    default: 0,
  },
})

const Employee = mongoose.model('Employees', EmployeeSchema)
export default Employee

import Employee from '../models/EmployeeModel.js';

// @desc  Create Employee
// @route POST /api/employees/
// @access Admin

const createEmployee = async (req, res) => {
  if (req.body) {
    const employee = new Employee(req.body);

    await employee
      .save()
      .then((data) => {
        res
          .status(201)
          .send({ success: true, message: 'employee Created Successfully!' });
      })
      .catch((error) => {
        res.status(500).send({ success: false, message: error });
      });
  } else {
    res.status(200).send({ success: false, message: 'No Data Found' });
  }
};

// @desc  Get All Employees
// @route GET /api/employees/
// @access Admin

const getAllEmployees = async (req, res) => {
  await Employee.find({})
    .then((data) => {
      res.status(200).send({ success: true, employees: data });
    })
    .catch((error) => {
      res.status(500).send({ success: false, message: error });
    });
};

// @desc  Get Employee by employee ID
// @route GET /api/employees/:id
// @access Admin

const getEmployeeByID = async (req, res) => {
  if (req.params && req.params.id) {
    await Employee.findById(req.params.id)
      .then((data) => {
        res.status(200).send({ success: true, employee: data });
      })
      .catch((error) => {
        res.status(400).send({ success: false, message: error });
      });
  } else {
    res.status(200).send({ success: false, message: 'Id Not Found' });
  }
};

// @desc  Update Employee
// @route PUT /api/employees/:id
// @access Admin

const updateEmployeeDetails = async (req, res) => {
  if (req.body && req.params) {
    const query = { _id: req.params.id };
    const update = {
      item_name: req.body.item_name,
      item_description: req.body.item_description,
      item_image: req.body.item_image,
      rating: req.body.rating,
      price: req.body.price,
      countInStock: req.body.countInStock,
    };

    await Employee.updateOne(query, update)
      .then((result) => {
        res
          .status(200)
          .send({ success: true, message: 'Employee Updated Successfully!' });
      })
      .catch((error) => {
        res.status(500).send({ success: false, message: error });
      });
  } else {
    res.status(200).send({ success: false, message: 'No Data Found' });
  }
};

// @desc  Delete Employee
// @route Delete /api/employees/:id
// @access Admin

const deleteEmployeeDetails = async (req, res) => {
  if (req.params && req.params.id) {
    await Employee.deleteOne({ _id: req.params.id })
      .then((result) => {
        res
          .status(200)
          .send({ success: true, message: 'Employee Deleted Successfully!' });
      })
      .catch((error) => {
        res.status(500).send({ success: false, message: error });
      });
  } else {
    res.status(200).send({ success: false, message: 'No Id Found' });
  }
};

export default {
  createEmployee,
  getAllEmployees,
  getEmployeeByID,
  updateEmployeeDetails,
  deleteEmployeeDetails,
};

const express = require("express");
const bodyParser = require("body-parser");

const employees = [
  {
    employeeId: "1",
    employeeName: "Aditya Gupta",
    employeePost: "Manager",
    employeeSalary: "43000",
  },
  {
    employeeId: "2",
    employeeName: "Vanshita Jaiswal",
    employeePost: "Assistant Manager",
    employeeSalary: "21000",
  },
];

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home", {
    data: employees,
  });
});

app.post("/", (req, res) => {
  const inputEmployeeId = (employees.length + 1).toString(); // Convert to string
  const inputEmployeeName = req.body.employeeName;
  const inputEmployeePost = req.body.employeePost;
  const inputEmployeeSalary = req.body.employeeSalary;

  employees.push({
    employeeId: inputEmployeeId,
    employeeName: inputEmployeeName,
    employeePost: inputEmployeePost,
    employeeSalary: inputEmployeeSalary,
  });

  res.render("home", {
    data: employees,
  });
});

app.post("/delete", (req, res) => {
  const requestedEmployeeId = req.body.employeeId;
  const indexToDelete = employees.findIndex(
    (employee) => employee.employeeId === requestedEmployeeId
  );

  if (indexToDelete !== -1) {
    employees.splice(indexToDelete, 1);
  }

  res.render("home", {
    data: employees,
  });
});

app.post("/update", (req, res) => {
  const requestedEmployeeId = req.body.employeeId;
  const inputEmployeeName = req.body.employeeName;
  const inputEmployeePost = req.body.employeePost;
  const inputEmployeeSalary = req.body.employeeSalary;

  const employeeToUpdate = employees.find(
    (employee) => employee.employeeId === requestedEmployeeId
  );

  if (employeeToUpdate) {
    employeeToUpdate.employeeName = inputEmployeeName;
    employeeToUpdate.employeePost = inputEmployeePost;
    employeeToUpdate.employeeSalary = inputEmployeeSalary;
  }

  res.render("home", {
    data: employees,
  });
});

app.listen(5000, () => {
	console.log("App is running on port 5000");
  });
  

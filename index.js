const displayDepartments = () => {
  db.query(`SELECT * FROM employee`, function (err, results) {
    console.table(results);
  });
  // execute mysql query
  // log/table departments
};

const displayRoles = () => {
  db.query(`SELECT * FROM roles`, function (err, results) {
    console.table(results);
  });
  // execute mysql query
  // log/table roles
};

const displayEmployees = () => {
  db.query(`SELECT * FROM display employee`, function (err, results) {
    console.table(results);
  });
  // execute mysql query
  // log/table employees
};

const getDepartments = () => {
  db.query(`SELECT * FROM Departments`, function (err, results) {
    console.table(results);
  });
  // execute mysql query
  // return departments
};

const getRoles = () => {
  db.query(`SELECT * FROM get roles`, function (err, results) {
    console.table(results);
  });
  // execute mysql query
  // return roles
};

const getEmployees = () => {
  db.query(`SELECT * FROM get employee`, function (err, results) {
    console.table(results);
  });
  // execute mysql query
  // return employees
};

const constructDepartmentChoices = (departments) => {
  // return an array of department choices
};

const constructRoleChoices = (roles) => {
  // return an array of role choices
};

const constructEmployeeChoices = (roles) => {
  // return an array of employee choices

};

const db = mysql.createConnection(
  {
    host: ``,
    user: ``,
    password: ``,
    database: ``,
  },
  console.log(`connected to the classlist_db database.`)
);
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // MySQL username,
//     user: 'root',
//     // MySQL password
//     password: '',
//     database: 'classlist_db',
//   },
//   console.log(`Connected to the classlist_db database.`)
// );

const start = () => {
  // declare one question with list of actions
  // prompt question and get answer (action)
  // insert if blocks for all actions
  // if displayDepartments()
  // if displayRoles()
  // if displayEmployees()
  
  const serviceQuestions = [
    {
      title: "what would you like to do?",
    
    },
    {
      title: "what is the name of the department?",
    
    },
  ];

  const customerServiceQuestion = [
    {
      title: "what would you like to do?",

    },

    {
      title: "what is the name of the role?",

    },

    {
      title: "what is the salary of the role?",

    },

    {
      title: "which department does the role belong to?",

    },
  ];

  const EmployeeQuestion = [
    {
      title: "what would you like to do?",

    },

    {
      title: "which employees role do you want to update?",

    },
  ];
  if ('addDepartment') {
    // prompt department questions (name) and get answers
    // construct mysql insert query
    // execute mysql query
  }
  if ('addRole') {
    // get departments from DB
    // pass the departments to a choice constructor function
    // prompt question to select department, title, salary and get answers
    // construct mysql insert query for role
    // execute mysql query
  }
  if ('addEmployee') {
    // get roles from DB
    // get employees from DB
    // pass the roles to a choice constructor function
    // pass the employees to a choice constructor function
    // prompt question to select role, select manager, first name, last name and get answers
    // construct mysql insert query for employee
    // execute mysql query
  }
};

start();

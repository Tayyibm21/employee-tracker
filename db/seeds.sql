use employee_db;
insert into department (name) values 
("Human Resources"),
("IT"),
("Sales"),
("Accounting"),
("Logistics"),
("Customer Service"),
("Recruiting"),
("Upper Management"),
("Payroll");

insert into role (title, salary, department_id) values
("Receptionist", 40000, 6),
("IT Manager",65000,2),
("Database Admin",65000,2),
("Recruitment Specialist",60000,7),
("Work Force Coordinator",50000,5),
("CSR",45000,6),
("Payroll Administrator",55000,9),
("Office Culture Manager",65000,1),
("Fulfillment Director", 70000, 3),
("President of Sales",115000,3),
("Accounts Receivable Analyst",60000,4),
("Accounts Payable Analyst",60000,4),
("Project Accountant",80000,4),
("Senior Accountant",90000,4),
("Prodcut Specialist", 66000,2),
("Dispatcher",55000,5),
("Full Stack Developer",90000, 2),
("CEO", 200000, 8),
("COO",190000,8),
("CTO",185000,8); 

insert into employee (first_name, last_name, role_id, manager_id) values
("Mahmoud", "Yahya",20,null),
("Nadia","Udden",18,null),
("Yoonis", "Cali",19,null),
("Yusuf","Jabir",2,1),
("Sabren","Mohamed",1,2),
("Farah","Ahmed",5,null),
("Ahmed","Meedaxa",6,null),
("Jasir","Najib",7,null),
("Jaasmiin","Hesham",8,null),
("Jack","Grealish",17,1),
("Yaqub","Moha",11,13),
("Maryam","Haroon",11,13),
("Jaasmiin","Abdi",13,2),
("Ashley","Cole",15,4);
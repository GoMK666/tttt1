const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000; // استبدل برقم المنفذ الذي تريده

app.use(cors());
app.use(bodyParser.json());

let employees = []; // In-memory storage for employees

app.get('/getEmployees', (req, res) => {
    res.json(employees);
});

app.post('/addEmployee', (req, res) => {
    const { name, email, phone, status } = req.body;
    employees.push({ name, email, phone, status });
    res.status(201).send('Employee added successfully');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://192.168.1.100:${PORT}`); // استبدل بعنوان IP الخاص بك
});
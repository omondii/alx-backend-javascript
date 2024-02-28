// read a db synchronously
const fs = require('fs');
const path = require('path');

function countStudents(filepath) {
    try{
        const data = fs.readFileSync('./database.csv', 'utf-8');
        const line = data.split('\n');
        const numberofStudents = line.length - 1
        const names = lines.slice(3).map(line => line.split(',')[3]);
        console.log(`Number of students: ${numberofStudents}`);
        console.log('Number of Students in ')
    } catch (err) {
        console.log('Cannot load the database');
    }
}

countStudents();
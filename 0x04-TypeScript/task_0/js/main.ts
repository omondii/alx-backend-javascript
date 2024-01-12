interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const stud1: Student = {
    firstName: "Brian",
    lastName: "Omondi",
    age: 24,
    location: "Nairobi"
}

const stud2: Student = {
    firstName: "Hope",
    lastName: "Minyoso",
    age: 23,
    location: "Kitale"
}

const studentsList: Student[] = [stud1, stud2]

const table = document.createElement("table");

studentsList.forEach((student) =>{
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

document.body.appendChild(table);
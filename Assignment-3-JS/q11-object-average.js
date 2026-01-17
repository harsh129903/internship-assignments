const studentData = [
    {
        student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
        student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
        student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    }
];

const result = studentData.map(obj => {
    const newObj = {};
    for (let key in obj) {
        const subjects = Object.values(obj[key]);
        const sum = subjects.reduce((a, b) => a + b, 0);
        const avg = sum / subjects.length;
        newObj[key] = { average: avg };
    }
    return newObj;
});

console.log(result);
const instructors = [
    { name: 'Quincy', specialty: 'Quantum Mechanics' },
    { name: 'Kenn', specialty: 'Norse Mythology' },
    { name: 'Paul', specialty: 'Tuvan throat singing' },
    { name: 'Aaron', specialty: 'Entomology' },
    { name: 'Carolyn', specialty: 'Kung Fu' }
]

let instructor_names = [];

for (let i = 0; i < instructors.length; i++) {
    instructor_names.push(instructors[i].name);
}
console.log(instructor_names);

const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

//Exact same thing, different parameter name
const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNames);

var kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 40 }
];
console.log(kvArray);

var reformattedArray = kvArray.map(obj => {
    var rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
    return rObj;
})

const persons = [
    {
        _id: "1",
        name: "baba",
        age: 30,
        hobbies: ["sing", "work"],
    },
    {
        _id: "2",
        name: "mama",
        age: 80,
        hobbies: ["learn", "smoke", "sing"],
    },
    {
        _id: "3",
        name: "lulu",
        age: 12,
        hobbies: ["TV"],
    },
];

//1
function findPersonById(id) {
    const person = persons.find((person) => person._id === id);
    console.log(person);
}


//2
function likeToSing(){
    const likeToSing = persons.filter((person) => person.hobbies.includes("sing"));
    console.log(likeToSing);
}

//3
function olderThan70(){
    const oldMan = persons.some((person) => person.age > 70);
    console.log(oldMan);
}

//4
function allOlderThan18(){
    const oldMen = persons.every((person) => person.age > 18);
    console.log(oldMen);
}

//5
function arrayOfId(){
    const IDS = persons.map((person) => person._id);
    console.log(IDS);
}

//6
function arrayOfHobbies(){
    const arrayOfHobs = persons.reduce(
        (acc, person) => acc.concat(person.hobbies),
        []
    )
    console.log(arrayOfHobs);

    const uniqueHobbiesArray = [...new Set(arrayOfHobs)];
    console.log(uniqueHobbiesArray);
}

//7
function sum(){
    return persons.reduce((acc, person) => {
       return acc += person.age
        
    }, 0)
}






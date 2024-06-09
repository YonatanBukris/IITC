const fruits = ["banana", "apple"];

function getNewFruits(fruit){
    return [...fruits, fruit]
}

const NewFruits = getNewFruits("orange")

console.log(fruits)
console.log(NewFruits)


const cat = {
    nickname: "fluffy",
    age: 1,
}

function incrementAge(obj){
    const newCat = {...obj}
    newCat.age++
    return newCat
}

const newCat = incrementAge(cat)
console.log(cat)
console.log(newCat)
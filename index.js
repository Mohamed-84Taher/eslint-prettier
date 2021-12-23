const { secret } = require("./demo")

const myArray = ["mohamed", "taher", "houssem"]

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i])
}

console.log(secret)
const myFunction = (a, b) => a * b
myFunction(2, 5)

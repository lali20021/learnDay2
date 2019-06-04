var groceryList2 = ["chips", "dip", "cookies"]
groceryList2.push("soda")
console.log(groceryList2)

var numbers2 = [2, 4, 6, 8, 10]
numbers2.unshift(0)
console.log(numbers2)

var groceryList1 = ["apples", "carrots", "oatmeal"]
console.log(groceryList1.concat("granola"))

var numbers1 = [1, 2, 3, 4, 5]
var num = [0]
console.log(num.concat(numbers1))

var numbers3 = [2, 13, 6, 8, 4, 2]
console.log(numbers3.indexOf(2))
console.log(numbers3.lastIndexOf(2))

var chars = ["y", "a", "r", "r", "a"]
console.log(chars.join(""))

var charReversed = chars.reverse()
console.log(charReversed)
console.log(charReversed.join("-"))
console.log(charReversed.join(""))


var siblings = ["Kate", "Oxy", "Rachel"]
var parents = ["Alena", "Michael"]

console.log(siblings.sort())
console.log(parents.sort().reverse())

var newArray = siblings.concat(parents)
console.log(newArray.sort().reverse())

var answers = [ "Yup!", "Fuhgeddaboudit", "Maybe", "What would your mother do?", "What would an Australian do", "My answer"]
var question = "Question?"
var num = Math.floor((Math.random() * 5) + 1);
console.log(question + answers[num])

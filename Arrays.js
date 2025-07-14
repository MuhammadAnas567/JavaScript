let marks = [65, 67 ,90, 89, false , "Present"]
marks[6] = 58
console.log(marks)
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6])
console.log(marks.length)
marks[0] = 54
console.log(marks)
console.log(marks[0])

let num = [34, 1, 45, 67, 59]
console.log(num.join(" and "))
let a = num.pop()
console.log(num)

let b = num.push(90)
console.log(num)

let c = num.shift()
console.log(num)

let d = num.unshift(99)
console.log(num)
console.log(num.concat(marks))
let compare = (a,b) =>{
    return b-a
}

num.sort(compare)
console.log(num)
num.reverse()
console.log(num)
num.splice(1, 2, 11,2, 3 ,4 ,5 ,6  )
console.log(num)
let deletedValues = num.splice(1, 2, 11,2, 3 ,4 ,5 ,6  )
console.log(deletedValues)
console.log( typeof deletedValues)
 let newNum = num.slice(3,5)
console.log(newNum)

let num1  = [2  , 67, 89, 78, 90]
for(let i = 0; i<num1.length; i++){
    console.log(num1[i])
}

num1.forEach((element)=>{
    console.log(element*element)
    
}) 

for (let i of num1){
    console.log(num1)
}

for (let i in num1){
    console.log(num1[i])
}

let arr = [45, 67, 89, 69]
let e = arr.map((value, index, length) =>{
    console.log(value, index, length)
    return value +1
})
console.log(e)

let ar  = [2, 3, 5, 12 , 34 ,45]
let a1 = ar.filter((a) =>{
return a<10
})
console.log(a1)

let array  = [2, 3, 9, 1 , 3 ,5]
let a2 = array.reduce((x,y)=>{
    return x+y
})
console.log(a2)
num.sort()
console.log(num)



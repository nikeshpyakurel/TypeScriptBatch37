// let studenName : string = "Ram" 

// const studentId : number = 230016

// let isPresent : boolean = true

// let data : undefined = undefined

// let rank : null | string = null

// let value : any = "Hello World"
// let valueData : unknown = 123
// console.log(value)
// console.log(valueData)

// console.log(data)
// console.log(rank)
// rank = "First"
// console.log('First')
// console.log(`Student Name: ${studenName} | Student Id: ${studentId} | Present: ${isPresent}`)



function helloName(name : string) : void{
    console.log(`Hello my name is ${name}`)
}


function serverDown(msg: string) : never {
    throw new Error("Error"+msg)
}

// helloName("Nikesh Pyakurel")
// serverDown("Disk is full")

let city : string = "Biratnagar"

let country = "Nepal";

console.log(city,country)

let cntr: string[]= ["Npl","IND","CHI","USA"]

cntr.push("Kathmandu")
cntr.pop()

// console.log(cntr[3])

for(let country of cntr){
    console.log(country)
}



let studenName : string = "Ram" 

const studentId : number = 230016

let isPresent : boolean = true

let data : undefined = undefined

let rank : null | string = null

let value : any = "Hello World"
let valueData : unknown = 123
console.log(value)
console.log(valueData)

console.log(data)
console.log(rank)
rank = "First"
console.log('First')
console.log(`Student Name: ${studenName} | Student Id: ${studentId} | Present: ${isPresent}`)



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

console.log(cntr[3])

for(let country of cntr){
    console.log(country)
}




cntr.map((m)=> console.log(m))


let numarr : number [] = [20,24,57,40,52]

console.log(numarr.filter((num)=> num>=40))


let fruits : string[]=["Mango","Apple","Orange"]
console.log(fruits.includes("Mango"))
console.log(fruits.indexOf("Orange"))

let product : [number,string, number] = [1,"Bag",400]

product.map((m)=> console.log(m))


let student : {
   readonly id : number,
    name: string,
    contactNo: number,
    address?: string,
    isPresent: true
} = {
    id: 101,
    name: "Ram Sharma",
    contactNo:9811020000,
    address:"Kathmandu",
    isPresent:true
}


console.log(`
    Student Id :${student.id} 
    | Student Name: ${student.name}
    | Student Contact: ${student.contactNo}
    | Student Address: ${student.address}
    | IS Present: ${student.isPresent}
    `)



    function add(number1: number, number2: number): number{
        return number1+number2
    }

    function canVote(age: number):boolean{
        return age>=16 // if age is greater than 16 it will return true
    }


    function showResult():void{
        console.log("Sum Of Two Number is: "+ add(10,20))
        console.log("Person with this age can vote:"+ canVote(15))
        console.log("Person with this age can vote:"+ canVote(20))
    }

    showResult()



    function printId ( id: string | number): void{

        console.log("Id: "+ id)
    }

    printId(1001)
    printId("Stw-0001")



    type Name = {
        name: string
    }

    type Address = {
        address : string
    }

    type Staff = Name & Address


    let teacher : Staff = {
        name: "Nikesh",
        address:"Biratnagar"
    }

    console.log(teacher.name,teacher.address)


    enum Role{
        Admin = "Admin",
        Student = "Student",
        Staff = "Staff"
    }


    let checkRole : Role = Role.Student

    console.log(checkRole)


    try {
        let age : number = -5

        if(age<0){
            throw new Error("Age cannot be negative")
        }
        console.log(age)
    }
    catch(error){
        throw new Error ("This is a error")
    }
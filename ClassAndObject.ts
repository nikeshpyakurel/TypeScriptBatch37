class Car{
    brand : string;
    color: string;
    constructor(brand:string,color:string){
        this.brand=brand;
        this.color=color
    }

    start():void{
        console.log(`${this.brand} car with color ${this.color} is started`)
    }

    stop():void{
        console.log(`${this.brand} car with color ${this.color} is stopped`)
    }


}

const honda = new Car("honda", "red")
honda.start();
honda.stop();


//Greet class
//message:string,name:string parameters
//namaste():void method
//console.log print message


class Greet {
    message:string
    name:string
    constructor(message:string,name:string){
        this.message=message
        this.name=name
    }

    namaste():void{
        console.log(`Namaste ${this.name}, ${this.message}`)
    }
}

const greet = new Greet("Nikesh","Hello Everyone")

greet.namaste()


//Clac - Class
//areaofcircle() - method 
//areaofsquare() - method
//checkevennumber() - method
//summary() - method

class Clac{
    radius: number
    length:number
    checkNumber:number
    constructor(radius:number,length:number,checkNumber:number){
        this.radius=radius
        this.length=length
        this.checkNumber=checkNumber
    }
    areaOfCircle():number{
        return 3.14* this.radius*this.radius;
    }
    areaOfSquare():number{
        return this.length*this.length;
    }
    checkEvenNumber():boolean{
        return this.checkNumber%2===0;
    }

    summary():void{
        console.log(`The Are Of Circle is: ${this.areaOfCircle()}`);
        console.log(`The Area of Square is: ${this.areaOfSquare()}`);
        console.log(`The given number ${this.checkNumber} is ${this.checkEvenNumber()}`);
    }

}

const cal= new Clac(2,30.5, 8)

cal.summary();



class StudentCard{
    private pin:number
    public  name:string
    constructor(pin:number, name:string){
        this.pin=pin
        this.name=name
    }

    checkPin(enterPin:number): boolean{
        return enterPin===this.pin
    }
}

const student = new StudentCard(1234,"Ramesh")


console.log(`THe name of student is ${student.name}`)
if(student.checkPin(1234)){
    console.log(`${student.name} enterd the coorect pin.`)
}else{
    console.log(`${student.name} enterd the wrong pin`)
}




class Bank{
    constructor(private accountBalance:number){
        this.accountBalance=accountBalance
        console.log("Account Successfully opend !! Your Opeaning Balance is:"+this.accountBalance)
    }
    public deposit(amount:number):void{
        if(amount>0){
            this.accountBalance+=amount
            console.log(`${amount} is deposited successfully. 
                Your new balance is ${this.accountBalance}!`)
        }
        else{
            console.log(`Deposit amout must be greater than 0`)
        }
    }
    public withdraw(amount:number):void{
        if(amount>0 && amount<=this.accountBalance){
            this.accountBalance-=amount
            console.log(`${amount} is Withdrawn successfully.
                Your new balance is ${this.accountBalance}`)
        }
        else{
            console.log(`Withdraw Amount must be equal or less 
                than the total balance`)
        }
    }

    public checkBalance():void{
        console.log(`Your Balance is ${this.accountBalance}`)
    }
}

const acc = new Bank(1000);
acc.deposit(2000)
acc.withdraw(100)
acc.checkBalance()
const nicacc = new Bank(3000);
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



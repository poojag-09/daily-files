// Basic class with constructor

/** class Person{                           // class
    constructor(name,age){              // constructor(objects,properties,parameters)
        this.name = name;
        this.age = age;
    }
    greet() {                           // method
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);         // printing message using object's properties
    }
}
const p1 = new Person("abc",21);        // create an object from the class
p1.greet();   **/                          // calling function




// Class with method to check voting eligibility

/** class Check{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    vote(){
        if(this.age>=18){
            console.log("can vote");
        }else{
            console.log("can not vote");
        }
    }
}
const z = new Check("xyz",19);
z.vote(); **/


// Inheritance (subclass using extends)

/** class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} speaks`);
    }
}
class Dog extends Animal{
    speak(){
        console.log(`${this.name} barks`);
    }
}
const d = new Dog("danny");
d.speak(); **/

/** class Car{
    constructor(name){
        this.name = name;
    }
    feature(){
        console.log(`its name is ${this.name}`);
    }
}
class Car1 extends Car{
    constructor(name,color){
        super(name);
        this.color = color;
    }
    feature(){
        console.log(`my features are ${this.color} and ${this.name}`);
    }
}
const g = new Car1("suzuki","black");
g.feature(); **/


/** class Bike{
    constructor(name){
        this.name = name;
    }
    me(){
        console.log(`my name ${this.name}`);
    }
}
class Bike1 extends Bike{
    constructor(name,brand){
        super(name);
        this.brand = brand;
    }
    me(){
        console.log(`my brand is ${this.brand} and name is ${this.name}`);
    }
}
const z = new Bike1("royal","bullet");
z.me(); **/
 


// Shape and circle

/** class Shape{
    constructor(color){
        this.color = color;
    }
    showColor(){
        console.log(`color is ${this.color}`);
    }
}
class Circle extends Shape{
    constructor(color,radius){
        super(color);
        this.radius = radius;
    }
    area(){
        return Math.PI * this.radius * this.radius;
    }
}
const c = new Circle("red",5);
c.showColor();
console.log("Area:",c.area().toFixed(2)); **/


/** class Animal{
    constructor(name){
        this.name = name;
    }
    move(){
        console.log(`${this.name} moves`);
    }
}
class Bird extends Animal{
    fly(){
        console.log(`${this.name} can fly`);
    }
}
class Parrot extends Bird{
    speak(){
        console.log(`${this.name} can speak`);
    }
}
const f = new Parrot("Green");
f.move();
f.fly();
f.speak(); **/


// Basic class with method

/** class Calculator{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    add(){
        return this.a + this.b;
    }
    multiply(){
        return this.a * this.b;
    }
}
const r = new Calculator(4,5);
console.log("Add:",r.add());
console.log("Mul:",r.multiply()); **/


/** class Cal{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    add(){
        return this.a + this.b;
    }
    Sub(){
        return this.a - this.b;
    }
}
const z = new Cal(9,4);
console.log("Add:",z.add());
console.log("Sub:",z.Sub()); **/


// Calculate the area of rectangle by passing parameters length and width

/** class Rectangle{
    constructor(length,width){
        this.length = length;
        this.width = width;
    }
    area(){
        return this.length * this.width;
    }
}
const r = new Rectangle(5,4);
console.log("Result:",r.area()); **/


// Class with Getter and Setter

/** class Rectangle{
    constructor(height,width){
        this._height = height;
        this._width = width;
    }
    get area(){
        return this._height * this._width;
    }
    set width(newWidth){
        this._width = newWidth;
    }
}
const r = new Rectangle(2,4);
console.log("Area:",r.area);
r.width = 5;
console.log("New Area:",r.area); **/



    
    

   
   
    

    
    

 






  
   


    

    




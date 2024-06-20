# Getting Started with Create React App

## Description
This is the main website of Hornet which contains the dashboard for all the activities, information, alerts, etc.

## Roadmap
- [ ] Landing page.
- [ ] Add option to contact us
- [ ] Show list of flagged wallet address, activity associated with it, type of cryptocurrency, onion URLs and Country. This should be representable in chart formats as well.
- [ ] List of transactions made to and by the flagged wallets address and/or the exchange on which it was performed. Optionally send these as alerts. Each alert would has "Alert the authorities" and "Show details" as actions.
- [ ] List of crypto exchanges and its relevant information, especially for sending legal notices.

## Solid Principle in Javascript

Solid Principles is the way to make the software design more understable,flexible and maintainable.The word SOLID is made up of these rules :
1. **S**ingle Responsibility Principle(SRP)[ ] According to this principle ,every component/class should be responsible for only one responsiblity.
e.g:= ```
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  getInfo() {
    return `Name: ${this.name}, Email: ${this.email}`;}
    }
class UserPersistence {
  saveToDatabase(user) {
    // Code to save user data to the database goes here
  }
  }```
2. **O**pen Closed Principle(OCP) [ ]  Functions/Modules Should be open for extension,but closed for modification Which means that we can add any functionality without changing the source code.
e.g:=```
const roles=["Admin","user"]
checkrole=(user)=>{
    if(roles.includes(user.role)){
        return true;
    }
    else{
        return false;
    }
}
//open for extension
add Role(role){
    roles.push(role);
}
//easily add roles without modifying the code
add("Superuser");
checkRole("Admin"); //True```
3. **L**iskov Substitution Principle(LSP)[ ] Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.
e.g:=```
class Bird {
  fly() {
    console.log("Bird is flying.");
  }
}
class Sparrow extends Bird {
  fly() {
    console.log("Sparrow is flying.");
  }
}
class Penguin extends Bird {
  // Penguins can't fly, so we don't override the fly() method
}
function makeBirdFly(bird) {
  bird.fly();
}

const genericBird = new Bird();
const sparrow = new Sparrow();
const penguin = new Penguin();

makeBirdFly(genericBird);
makeBirdFly(sparrow);
makeBirdFly(penguin);
```
4. **I**nterface Segregation Principle(ISP)[ ] Objects/classes should not depend upon methods that they do not use.
e.g:=```
class Bird {
  fly() {}
  eat() {}
}
class Penguin {
  eat() {
    console.log('Penguin is eating fish.');
  }
}

class Sparrow {
  fly() {
    console.log('Sparrow is flying.');
  }

  eat() {
    console.log('Sparrow is eating seeds.');
  }
}
```
5. **D**ependency Inversion Principle(DIP)[ ] It states that high-level modules should not depend on low-level modules. Both should depend on abstractions.
e.g:=```
class purchasehandler{
    processPayment(paymentDetails,amount){
        const paymentSuccess =PaymentHandler,requestPayment(PaymentDetails,amount);
        if(paymentSuccess){
            return true;
        }
        return false;
            }
}
//here purchase handler doesnot depend upon paypal,you can change whenever you want
class paymenthandler{
    requestPayment(PaymentDetails,amount)
    {
        return Paypal.requestPayment(paymentDetails,amount);
    }
}
```



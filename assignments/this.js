/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global - the object being called is in the global/window scope
* 2. implicit - the object indicated before the . is 'this'
* 3. new binding - this refers to the instance of the object being created
* 4. explicity binding - through the use of the .call and .apply methods we can decide which obj this is referencing
*
* write out a code example of each explanation above
*/

// Principle 1

function nameCountry(country) {
    console.log(this);
    return country;
  }
  nameCountry("USA");


  
// Principle 2

const alias = {
    greeting: 'Hello',

    intro: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  alias.intro('Janet Snakehole');
  

// Principle 3

function CatMaker(attributes) {
    this.name = attributes.name;
    this.age = attributes.age; 
    this.speak = function() {
      return `Meow! I'm` + $this.name + `the` + $this.age + `talking cat`;
    }
  }

  const tammy = new CatMaker({name: "Tammy", age: "immortal"});
  const nicola = new CatMaker({name: "Nicola", age: "1000 year old"})
  
  tammy.speak();
  nicola.speak();

// Principle 4

tammy.speak.call(nicola);
nicola.speak.apply(tammy);
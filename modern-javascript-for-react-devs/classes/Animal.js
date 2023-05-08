//
// File: Animal.mjs
// Auth: Martin Burolla
// Date: 3/21/2022
// Desc: Base class.
// ---------------------

export default class Animal {

    ///////////////////////////////////////////////////////////////////////////
    // Data members (fields or properties)
    ///////////////////////////////////////////////////////////////////////////
    
    age = 0;
    static animalCount = 0;

    ///////////////////////////////////////////////////////////////////////////
    // Constructors
    ///////////////////////////////////////////////////////////////////////////
  
    constructor (age) {
      this.age = age;
      Animal.animalCount++; // Do not use the "this" keyword here.
    }
  
    ///////////////////////////////////////////////////////////////////////////
    // Public 
    ///////////////////////////////////////////////////////////////////////////
  
    speakAge() {
        console.log(`I am ${this.age} years old.`);
    }
}

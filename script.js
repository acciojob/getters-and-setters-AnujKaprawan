// Person class
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }
}

// Student subclass
class Student extends Person {
  // Method to log studying
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher subclass
class Teacher extends Person {
  // Method to log teaching
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

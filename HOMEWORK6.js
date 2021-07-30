class Person {
  constructor (firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    this._firstName = value;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }
  get gender() {
    return this._gender;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
  toString() {
    return JSON.stringify(this);
  }
}

class Student extends Person {
  constructor (programs, year, fee, ...args) {
    super(...args);
    this._programs = programs;
    this._year = year;
    this._fee = fee;
    this.dataStor = {};
    programs.forEach((item) => this.dataStor[item] = 0);
    
  }
  get programs() {
    return this._programs;
  }
  set programs(value) {
   if (Array.isArray(value)) {
    this._programs = value;
    this.dataStor = {};
    this.programs.forEach((item) => this.dataStor[item] = 0);
    } else {
      alert('Programs should be array');
    }
  }
  get year() {
    return this._year;
  }
  set year(value) {
    this._year = value;
  }
  get fee() {
    return this._fee;
  }
  set fee(value) {
    this._fee = value;
  }

  passExam(program, grade) {
    if (this.programs.includes(program)) {
      this.dataStor[program] = grade;
      if(!Object.entries(this.dataStor).map((item) => item[1] < 50 ? true : false).includes(true)) this.year++;
    }
    }
  
  toString() {
    return JSON.stringify(this);
  }
}
// Constants for each planet
const mercurianAge = 0.24;
const venitianAge = 0.62;
const martianAge = 1.88;
const jovianAge = 11.86;

// Class object that will wrap around all our methods & functions
export class Sagan {
  constructor(birthDate, lifeTime) {
    let currentYear = new Date().getFullYear();
    this.birthYear = new Date(birthDate).getFullYear();
    this.age = currentYear - this.birthYear;
    this.lifeTime = lifeTime;
  }

  // AGE BLOCK //
  // Calculates age on Earth
  earthAge () {
    return Math.floor(this.age);
  }
  // Calculates age on Mercury
  mercuryAge () {
    return Math.floor(this.age / mercurianAge);
  }
  // Calculates age on Venus
  venusAge () {
    return Math.floor(this.age / venitianAge);
  }
  // Calculates age on mars
  marsAge () {
    return Math.floor(this.age / martianAge);
  }
  // Calculates age on Jupiter
  jupiterAge () {
    return Math.floor(this.age / jovianAge);
  }
  
  // LIFE TIME BLOCK // 
  // Calculates life time on Earth
  earthLifeTime () {
    return Math.abs(Math.abs(Math.floor(this.lifeTime - this.age)));
  }
  // Calculates life time on Mercury
  mercuryLifeTime () {
    return Math.abs(Math.floor((this.lifeTime / mercurianAge) - (this.age / mercurianAge)));
  }
  // Calculates life time on Venus
  venusLifeTime () {
    return Math.abs(Math.floor((this.lifeTime / venitianAge) - (this.age / venitianAge)));
  }
  // Calculates life time on Mars
  marsLifeTime () {
    return Math.abs(Math.floor((this.lifeTime / martianAge) - (this.age / martianAge)));
  }
  // Calculates life time on Jupiter
  jupiterLifeTime () {
    return Math.abs(Math.floor((this.lifeTime / jovianAge) - (this.age / jovianAge)));
  }
}
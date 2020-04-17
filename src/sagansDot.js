// variable multipliers for each planet
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

  // Calculates age on earth
  earthAge () {
    return Math.floor(this.age);
  }
}
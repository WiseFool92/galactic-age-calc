import { Sagan } from './../src/sagansDot.js';

// AGE BLOCK //
// Tests ages across various celestial bodies
describe('Age', () => {
  let earthTest;
  let user;

  // Activates for each subsequent test below
  beforeEach (() => {
    let testDay = new Date();
    earthTest = 27;
    testDay.setFullYear(testDay.getFullYear() - earthTest);
    user = new Sagan(testDay.toString())
  });

  // (1 - A) Test Fails
  test('Is Earth age correct?', () => {
    expect(user.earthAge()).toEqual(25);
  });
  // (1 - B) Test Passes
  test('Is Earth age correct?', () => {
    expect(user.earthAge()).toEqual(earthTest);
  });

  // (2 - A) Test Fails
  test('Is Mercury age correct?', () => {
    expect(user.mercuryAge()).toEqual(100)
  });
  // (2 - B) Test Passes
  test('Is Mercury age correct?', () => {
    let alienAge = Math.floor(earthTest / .24);
    expect(user.mercuryAge()).toEqual(alienAge);
  });

  // (3 - A) Test Fails
  test('Is Venus age correct?', () => {
    expect(user.venusAge()).toEqual(55);
  });
  // (3 - B) Test Passes
  test('Is Venus age correct?' , () => {
    let alienAge = Math.floor(earthTest / .62);
    expect(user.venusAge()).toEqual(alienAge);
  });

  // (4 - A) Test Fails
  test('Is Mars age correct?', () => {
    expect(user.marsAge()).toEqual(89);
  });
  // (4 - B) Test Passes
  test('Is Mars age correct?', () => {
    let alienAge = Math.floor(earthTest / 1.88);
    expect(user.marsAge()).toEqual(alienAge);
  });

  // (5 - A) Test Fails
  test('Is Jupiter age correct?', () => {
    expect(user.jupiterAge()).toEqual(200);
  });
  // (5 - B) Test Passes
  test('Is jupiters age correct?', () => {
    let alienAge = Math.floor(earthTest / 11.86);
    expect(user.jupiterAge()).toEqual(alienAge);
  });
});

// LIFE TIME BLOCK //
// Test life time on various celestial bodies
describe('Life Time', () => {
  let earthTest;
  let user;
  let lifeTime;

  // Activates for each subsequent test below
  beforeEach(() => {
    earthTest = 27;
    lifeTime = 79;
    let testDay = new Date();
    testDay.setFullYear(testDay.getFullYear() - earthTest);
    user = new Sagan(testDay.toString(), lifeTime);
  });

  // (6 - A) Test Fails
  test('Is Earths life time correct?', () => {
    expect(user.earthLifeTime()).toEqual(12);
  });
  // (6 -B) Test Passes
  test('Is Earths life time correct?', () => {
    expect(user.earthLifeTime()).toEqual(lifeTime - earthTest);
  });

  // (7 - A) Test Fails
  test('Is Mercurys life time correct?', () => {
    expect(user.mercuryLifeTime()).toEqual(45);
  });
  // (7 - B) Test Passes
  test('Is Mercurys life time correct?', () => {
    let alien = (earthTest / .24);
    let spaceBound = (lifeTime / .24);
    expect(user.mercuryLifeTime()).toEqual(Math.floor(spaceBound - alien)); 
  });

  // (8 - A) Test Fails
  test('Is Venus life time correct?', () => {
    expect(user.venusLifeTime()).toEqual(54);
  });
  // (8 - B) Test Passes
  test('Is Venus life time correct?', () => {
    let alien = (earthTest / .62);
    let spaceBound = (lifeTime / .62);
    expect(user.venusLifeTime()).toEqual(Math.floor(spaceBound - alien));
  });

  // (9 - A) Test Fails
  test('Is Mars life time correct?', () => {
    expect(user.marsLifeTime()).toEqual(300)
  });
  // (9 - B) Test Passes
  test('Is Mars life time correct?', () => {
    let alien = (earthTest / 1.88);
    let spaceBound = (lifeTime / 1.88);
    expect(user.marsLifeTime()).toEqual(Math.floor(spaceBound - alien));
  });

  // (10 - A) Test Fails
  test('Is Jupiter life time correct?', () => {
    expect(user.jupiterLifeTime()).toEqual(7)
  });
  // (10 - B) Test Passes
  test('Is Jupiter life time correct?', () => {
    let alien = (earthTest / 11.86);
    let spaceBound = (lifeTime / 11.86);
    expect(user.jupiterLifeTime()).toEqual(Math.floor(spaceBound - alien));
  });
});

// AM I DEAD YET BLOCK //
// Test if you have surpassed your expected life time
describe('AmIDeadYet', () => {
  let earthTest;
  let user;
  let lifeTime;

  // Activates before each subsequent test
  beforeEach(() => {
    earthTest = 100;
    lifeTime = 79;
    let testDay = new Date();
    testDay.setFullYear(testDay.getFullYear() - earthTest);
    user = new Sagan(testDay.toString(), lifeTime);
  });

  // (11 - A) Test Fails
  test('Am I Dead on Earth Yet?', () => {
    expect(user.earthLifeTime()).toEqual(112);
  });
  // (11 - B) Test Passes
  test('Am I Dead on Earth Yet?', () => {
    expect(user.earthLifeTime()).toEqual(earthTest - lifeTime);
  });

  // // (12 - A) Test Fails
  // test('Am I Dead on Mercury Yet?', () => {
  //   expect(user.mercuryLifeTime()).toEqual(96);
  // });
  // // (12 - B) Test Passes
  // test('Am I Dead on Mercury Yet?', () => {
  //   let alien = (earthTest / .24);
  //   let spaceBound = (lifeTime / .24);
  //   expect(user.mercuryLifeTime()).toEqual(Math.floor(alien - spaceBound));
  // });

  // // (13 - A) Test Fails
  // test('Am I Dead on Venus Yet?', () => {
  //   expect(user.venusLifeTime()).toEqual(149);
  // });
});
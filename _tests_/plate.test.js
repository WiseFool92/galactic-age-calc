import { Sagan } from './../src/sagansDot.js';

// tests ages across various celestial bodies
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
  })
});
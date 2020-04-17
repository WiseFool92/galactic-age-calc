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

  // Test Fails
  test('Is Earth age correct?', () => {
    expect(user.earthAge()).toEqual(25);
  });

  // Test Passes
  test('Is Earth age correct?', () => {
    expect(user.earthAge()).toEqual(earthTest);
  });
});
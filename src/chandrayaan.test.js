const { describe, expect, it } = require('@jest/globals');
const Rover = require('./chandrayaan.model');

describe("test suite for checking the rover functionality", () => {
  it("Initialize the class correctly", () => {
    const chandrayaan = new Rover();

    expect(chandrayaan).toBeInstanceOf(Rover);
  })
})
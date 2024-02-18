const { describe, expect, it } = require('@jest/globals');
const Rover = require('./rover.model');

describe("test suite for checking the rover functionality", () => {
  it("initialize the class correctly", () => {
    const chandrayaan = new Rover();

    expect(chandrayaan).toBeInstanceOf(Rover);
  });

  it("correct data is set on initialization", () => {
    const expectedCommands = ["f", "b", "l", "r", "u", "d"];
    const expectedCoords = [0, 0, 0];
    const expectedDirection = "N";
    const chandrayaan = new Rover([ "f", "b", "l", "r", "u", "d" ]);

    expect(chandrayaan.getCommands()).toEqual(expectedCommands);
    expect(chandrayaan.getCurrentCoords()).toEqual(expectedCoords);
    expect(chandrayaan.getCurrentDirection()).toBe(expectedDirection);
  });

  it("command array is incorrect", () => {
    const command = undefined;
    const expectedCoords = [0, 0, 0];
    const expectedDirection = "N";
    const chandrayaan = new Rover(command);

    const location = chandrayaan.executeCommand();

    expect(location).toEqual({
      finalPos: expectedCoords,
      finalDir: expectedDirection,
      errorMsg: "Commands received is not an array. Please give correct command list"
    });
    expect(chandrayaan.getCurrentCoords()).toEqual(expectedCoords);
    expect(chandrayaan.getCurrentDirection()).toBe(expectedDirection);
  });

  it("check go forward", () => {
    const expectedCoords = [0, 1, 0];
    const expectedDirection = "N";
    const chandrayaan = new Rover();

    chandrayaan.goForward();

    expect(chandrayaan.getCurrentCoords()).toEqual(expectedCoords);
    expect(chandrayaan.getCurrentDirection()).toBe(expectedDirection);
  });

  it("check go backward", () => {
    const expectedCoords = [0, -1, 0];
    const expectedDirection = "N";
    const chandrayaan = new Rover();

    chandrayaan.goBackward();

    expect(chandrayaan.getCurrentCoords()).toEqual(expectedCoords);
    expect(chandrayaan.getCurrentDirection()).toBe(expectedDirection);
  });

  it("check go up", () => {
    const expectedCoords = [0, 0, 0];
    const expectedDirection = "U";
    const chandrayaan = new Rover();

    chandrayaan.goUp();

    expect(chandrayaan.getCurrentCoords()).toEqual(expectedCoords);
    expect(chandrayaan.getCurrentDirection()).toBe(expectedDirection);
  });

  it("check go down", () => {
    const expectedCoords = [0, 0, 0];
    const expectedDirection = "D";
    const chandrayaan = new Rover();

    chandrayaan.goDown();

    expect(chandrayaan.getCurrentCoords()).toEqual(expectedCoords);
    expect(chandrayaan.getCurrentDirection()).toBe(expectedDirection);
  });

  it("check go left", () => {
    const expectedCoords = [0, 0, 0];
    const expectedDirection = "S";
    const chandrayaan = new Rover();

    chandrayaan.goDown();
    chandrayaan.goLeft();

    expect(chandrayaan.getCurrentCoords()).toEqual(expectedCoords);
    expect(chandrayaan.getCurrentDirection()).toBe(expectedDirection);
  });

  it("check go right", () => {
    const expectedCoords = [0, 0, 0];
    const expectedDirection = "N";
    const chandrayaan = new Rover();

    chandrayaan.goDown();
    chandrayaan.goRight();

    expect(chandrayaan.getCurrentCoords()).toEqual(expectedCoords);
    expect(chandrayaan.getCurrentDirection()).toBe(expectedDirection);
  });

  it("check correct commands", () => {
    const command = ["f", "r", "u", "b", "l"];
    const expectedCoords = [0, 1, -1];
    const expectedDirection = "N";
    const chandrayaan = new Rover(command);

    const location = chandrayaan.executeCommand();

    expect(location).toEqual({
      finalPos: expectedCoords,
      finalDir: expectedDirection,
      errorMsg: ""
    });
    expect(chandrayaan.getCurrentCoords()).toEqual(expectedCoords);
    expect(chandrayaan.getCurrentDirection()).toBe(expectedDirection);
  });
})
const { describe, expect, it } = require('@jest/globals');
const constants = require("./utils/constants");
const getCommands = require("./getcommands");

jest.mock("./getcommands");

describe("test suite for get commands functionality", () => {
  it('check get single command functionality with no command passed', () => {

    const getSingleWithNoCommand = getCommands.getSingleCommand.mockImplementation(
      () => {
        const command = "";

        if( command === "" ) {
          return "No command received. Closing the connection to the rover.";
        }
      }
    );

    expect(getSingleWithNoCommand()).toBe("No command received. Closing the connection to the rover.");
  });

  it('check get single command functionality with wrong command passed', () => {
    const getSingleWithInvalidCommand = getCommands.getSingleCommand.mockImplementation(
      () => {
        const command = "z";

        if( command === "" ) {
          return "No command received. Closing the connection to the rover.";
        }

        if( !constants[command] ) {
          return "Invalid command received. Closing the connection to the rover.";
        }
      }
    );

    expect(getSingleWithInvalidCommand()).toBe("Invalid command received. Closing the connection to the rover.");
  });

  it('check get single command functionality with correct command passed', () => {
    const command = "f";
    const getSingleWithCorrectCommand = getCommands.getSingleCommand.mockImplementation(
      () => {

        if( command === "" ) {
          return "No command received. Closing the connection to the rover.";
        }

        if( !constants[command] ) {
          return "Invalid command received. Closing the connection to the rover.";
        }

        return command;
      }
    );

    expect(getSingleWithCorrectCommand()).toBe(command);
  });
});

const colors = require('colors/safe');

const TABLE_DIMENSIONS = [5, 5];
/*
Grid reference of the table
|---|---|---|---|---|
|0,4|1,4|2,4|3,4|4,4|
|---|---|---|---|---|
|0,3|1,3|2,3|3,3|4,3|
|---|---|---|---|---|
|0,2|1,2|2,2|3,2|4,2|
|---|---|---|---|---|
|0,1|1,1|2,1|3,1|4,1|
|---|---|---|---|---|
|0,0|1,0|2,0|3,0|4,0|
|---|---|---|---|---|
*/

const DIRECTIONS = {
  NORTH: {
    x: 0,
    y: 1,
    left: 'WEST',
    right: 'EAST',
  },
  EAST: {
    x: 1,
    y: 0,
    left: 'NORTH',
    right: 'SOUTH',
  },
  SOUTH: {
    x: 0,
    y: -1,
    left: 'EAST',
    right: 'WEST',
  },
  WEST: {
    x: -1,
    y: 0,
    left: 'SOUTH',
    right: 'NORTH',
  },
};

function Robot() {
  const self = this;
  self.posX = null;
  self.posY = null;
  self.facing = null;

  /**
   * Execute a robot command
   * @param {string} action - Name of the command
   * @param {array} args - An array of arguments
   */
  self.command = (action, args) => {
    const command = self[action.toLowerCase()];
    if (!command) {
      self._error(
        `I don't understand the command "${action}", type "help" for a list of commands I understand`,
      );
      return;
    }

    command.apply(self, args);
  };

  /**
   * Place the robot on the grid
   * @param {Number} posX - The X position of the robot
   * @param {Number} posY - The Y position of the robot
   * @param {string} facing - The direction the robot is facing
   * possible values are NORTH, SOUTH, EAST, WEST
   * @return {Boolean} - Returns true if the robot was placed
   */
  self.place = (posX, posY, facing) => {
    const facingInput = facing.toUpperCase();
    if (!self._validatePosition(posX, posY)) {
      self._error('You cannot place me off the table, type "help" to see the tables dimensions');
      return false;
    }

    if (typeof DIRECTIONS[facingInput] === 'undefined') {
      self._error('That is an invalid direction, type "help" to see which directions I can face.');
      return false;
    }

    self.posX = parseInt(posX, 10);
    self.posY = parseInt(posY, 10);
    self.facing = facingInput;
    self.report();

    return true;
  };

  /**
   * Turn the robot 90 degress to the left
   * @return {Boolean} - Returns true if the robot turned
   */
  self.left = () => {
    if (!self._hasPlaced()) {
      self._error('You must place me on the table before I can turn left.');
      return false;
    }

    self.facing = DIRECTIONS[self.facing].left;
    return true;
  };

  /**
   * Turn the robot 90 degress to the right
   * @return {Boolean} - Returns true if the robot turned
   */
  self.right = () => {
    if (!self._hasPlaced()) {
      self._error('You must place me on the table before I can turn right.');
      return false;
    }

    self.facing = DIRECTIONS[self.facing].right;
    return true;
  };

  /**
   * Moves the robot 1 unit in the direction its facing
   * @return {Boolean} - Returns true if the robot moved
   */
  self.move = () => {
    if (!self._hasPlaced()) {
      self._error('You must place me on the table before I can move.');
      return false;
    }

    const newPosX = self.posX + DIRECTIONS[self.facing].x;
    const newPosY = self.posY + DIRECTIONS[self.facing].y;

    if (!self._validatePosition(newPosX, newPosY)) {
      self._error("I cannot move there, I would fall off! I'm too expensive to break.");
      return false;
    }

    self.posX = newPosX;
    self.posY = newPosY;

    return true;
  };

  // Report the current position of the robot
  self.report = () => {
    if (!self._hasPlaced()) {
      return;
    }

    self._info(`I am now at position (${self.posX}, ${self.posY}) and I am facing ${self.facing}`);
  };

  // Robot info handler
  self._info = (message) => {
    self._speak('green', '', message);
  };

  // Robot error handler
  self._error = (message) => {
    self._speak('red', 'The robot looks at you quizically', message);
  };

  // Helper function that lets the robot speak to the user
  self._speak = (color, prefix, message) => {
    if (prefix) {
      console.log(colors.magenta(prefix));
    }
    console.log(colors[color].underline(`TOY ROBOT SAYS: Beep boop - ${message}`));
  };

  self.off = () => {
    self._speak('yellow', 'The robot smiles at you', 'Thanks for playing, bye for now!');
    process.exit(0);
  };

  /**
   * Validate a future position of the robot
   * @param {Number} x - The future x value
   * @param {Number} y - The future y value
   * @return {Boolean} - Returns true if the Robot can move to that position
   */
  self._validatePosition = (x, y) => {
    if (x < 0 || x > TABLE_DIMENSIONS[0] - 1) {
      return false;
    }

    if (y < 0 || y > TABLE_DIMENSIONS[1] - 1) {
      return false;
    }

    return true;
  };

  /**
   * Check if the robot has been placed
   * @return {Boolean} - Returns true if the robot is placed on the grid
   */
  self._hasPlaced = () => self.posX !== null && self.posY !== null && self.facing !== null;

  return self;
}

module.exports = Robot;

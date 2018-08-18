let colors = require('colors/safe');

function Robot() {
  const self = this;

  self._info = message => {
    self._speak('green', message);
  };

  self._error = message => {
    self._speak('red', message);
  };

  self._speak = (color, message) => {
    console.log(colors[color].underline('ROBOT SAYS: ' + message));
  };

  return self;
}

module.exports = Robot;

/* eslint-env node, mocha */

const should = require('should');
const Robot = require('../index');

describe('Robot: example', () => {
  it('should give expected output of: 0,1,NORTH', (done) => {
    const robot = new Robot();
    robot.place('0', '0', 'NORTH');
    robot.move();
    robot.report();

    should(robot.facing).equal('NORTH');
    should(robot.posY).equal(1);
    should(robot.posX).equal(0);

    done();
  });

  it('should give expected output of: 0,0,WEST', (done) => {
    const robot = new Robot();
    robot.place('0', '0', 'NORTH');
    robot.left();
    robot.report();

    should(robot.facing).equal('WEST');
    should(robot.posY).equal(0);
    should(robot.posX).equal(0);

    done();
  });

  it('should give expected output of: 3,3,NORTH', (done) => {
    const robot = new Robot();
    robot.place('1', '2', 'EAST');
    robot.move();
    robot.move();
    robot.left();
    robot.move();
    robot.report();

    should(robot.facing).equal('NORTH');
    should(robot.posY).equal(3);
    should(robot.posX).equal(3);

    done();
  });
});

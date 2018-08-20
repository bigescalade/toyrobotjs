/* eslint-env node, mocha */

const should = require('should');
const sinon = require('sinon');
const Robot = require('../index');

describe('Robot: move', () => {
  it('should move the robot 1 unit NORTH', (done) => {
    const robot = new Robot();
    const spy = sinon.spy(robot, 'move');

    robot.place('1', '2', 'NORTH');
    robot.move();

    should(spy.calledOnce).equal(true);
    should(robot.posY).equal(3);
    should(robot.posX).equal(1);

    done();
  });

  it('should move the robot 1 unit EAST', (done) => {
    const robot = new Robot();
    const spy = sinon.spy(robot, 'move');

    robot.place('1', '2', 'EAST');
    robot.move();

    should(spy.calledOnce).equal(true);
    should(robot.posY).equal(2);
    should(robot.posX).equal(2);

    done();
  });

  it('should move the robot 1 unit SOUTH', (done) => {
    const robot = new Robot();
    const spy = sinon.spy(robot, 'move');

    robot.place('1', '2', 'SOUTH');
    robot.move();

    should(spy.calledOnce).equal(true);
    should(robot.posY).equal(1);
    should(robot.posX).equal(1);

    done();
  });

  it('should move the robot 1 unit WEST', (done) => {
    const robot = new Robot();
    const spy = sinon.spy(robot, 'move');

    robot.place('1', '2', 'WEST');
    robot.move();

    should(spy.calledOnce).equal(true);
    should(robot.posY).equal(2);
    should(robot.posX).equal(0);

    done();
  });

  it('should not move the robot, it would fall off the NORTH edge', (done) => {
    const robot = new Robot();
    const spy = sinon.spy(robot, 'move');

    robot.place('1', '4', 'NORTH');
    robot.move();

    should(spy.calledOnce).equal(true);
    should(robot.posY).equal(4);
    should(robot.posX).equal(1);

    done();
  });

  it('should not move the robot, it would fall off the WEST edge', (done) => {
    const robot = new Robot();
    const spy = sinon.spy(robot, 'move');

    robot.place('0', '2', 'WEST');
    robot.move();

    should(spy.calledOnce).equal(true);
    should(robot.posY).equal(2);
    should(robot.posX).equal(0);

    done();
  });

  it('should not move the robot, it would fall off the SOUTH edge', (done) => {
    const robot = new Robot();
    const spy = sinon.spy(robot, 'move');

    robot.place('2', '0', 'SOUTH');
    robot.move();

    should(spy.calledOnce).equal(true);
    should(robot.posY).equal(0);
    should(robot.posX).equal(2);

    done();
  });

  it('should not move the robot, it would fall off the EAST edge', (done) => {
    const robot = new Robot();
    const spy = sinon.spy(robot, 'move');

    robot.place('4', '2', 'EAST');
    robot.move();

    should(spy.calledOnce).equal(true);
    should(robot.posY).equal(2);
    should(robot.posX).equal(4);

    done();
  });
});

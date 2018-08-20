/* eslint-env node, mocha */

const should = require('should');
const sinon = require('sinon');
const Robot = require('../index');

describe('Robot: rotate', () => {
  it('should turn left, was facing NORTH, now facing WEST', (done) => {
    const robot = new Robot();
    const spy = sinon.spy(robot, 'left');

    robot.place('1', '2', 'NORTH');
    robot.left();

    should(spy.calledOnce).equal(true);
    should(robot.facing).equal('WEST');

    done();
  });

  it('should turn right, was facing NORTH, now facing EAST', (done) => {
    const robot = new Robot();
    const spy = sinon.spy(robot, 'right');

    robot.place('1', '2', 'NORTH');
    robot.right();

    should(spy.calledOnce).equal(true);
    should(robot.facing).equal('EAST');

    done();
  });

  it('should turn left, was facing EAST, now facing NORTH', (done) => {
    const robot = new Robot();
    const spy = sinon.spy(robot, 'left');

    robot.place('1', '2', 'EAST');
    robot.left();

    should(spy.calledOnce).equal(true);
    should(robot.facing).equal('NORTH');

    done();
  });

  it('should turn right, was facing EAST, now facing SOUTH', (done) => {
    const robot = new Robot();
    const spy = sinon.spy(robot, 'right');

    robot.place('1', '2', 'EAST');
    robot.right();

    should(spy.calledOnce).equal(true);
    should(robot.facing).equal('SOUTH');

    done();
  });

  it('should turn left, was facing SOUTH, now facing EAST', (done) => {
    const robot = new Robot();
    const spy = sinon.spy(robot, 'left');

    robot.place('1', '2', 'SOUTH');
    robot.left();

    should(spy.calledOnce).equal(true);
    should(robot.facing).equal('EAST');

    done();
  });

  it('should turn right, was facing SOUTH, now facing WEST', (done) => {
    const robot = new Robot();
    const spy = sinon.spy(robot, 'right');

    robot.place('1', '2', 'SOUTH');
    robot.right();

    should(spy.calledOnce).equal(true);
    should(robot.facing).equal('WEST');

    done();
  });

  it('should turn left, was facing WEST, now facing SOUTH', (done) => {
    const robot = new Robot();
    const spy = sinon.spy(robot, 'left');

    robot.place('1', '2', 'WEST');
    robot.left();

    should(spy.calledOnce).equal(true);
    should(robot.facing).equal('SOUTH');

    done();
  });

  it('should turn right, was facing WEST, now facing NORTH', (done) => {
    const robot = new Robot();
    const spy = sinon.spy(robot, 'right');

    robot.place('1', '2', 'WEST');
    robot.right();

    should(spy.calledOnce).equal(true);
    should(robot.facing).equal('NORTH');

    done();
  });
});

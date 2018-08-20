const Robot = require('../index');
const should = require('should');

describe('Robot: rotate', () => {
  it('should turn left, was facing NORTH, now facing WEST', done => {
    const robot = new Robot();
    robot.place('1', '2', 'NORTH');
    robot.left();

    robot.facing.should.equal('WEST');

    done();
  });

  it('should turn right, was facing NORTH, now facing EAST', done => {
    const robot = new Robot();
    robot.place('1', '2', 'NORTH');
    robot.right();

    robot.facing.should.equal('EAST');

    done();
  });

  it('should turn left, was facing EAST, now facing NORTH', done => {
    const robot = new Robot();
    robot.place('1', '2', 'EAST');
    robot.left();

    robot.facing.should.equal('NORTH');

    done();
  });

  it('should turn right, was facing EAST, now facing SOUTH', done => {
    const robot = new Robot();
    robot.place('1', '2', 'EAST');
    robot.right();

    robot.facing.should.equal('SOUTH');

    done();
  });

  it('should turn left, was facing SOUTH, now facing EAST', done => {
    const robot = new Robot();
    robot.place('1', '2', 'SOUTH');
    robot.left();

    robot.facing.should.equal('EAST');

    done();
  });

  it('should turn right, was facing SOUTH, now facing WEST', done => {
    const robot = new Robot();
    robot.place('1', '2', 'SOUTH');
    robot.right();

    robot.facing.should.equal('WEST');

    done();
  });

  it('should turn left, was facing WEST, now facing SOUTH', done => {
    const robot = new Robot();
    robot.place('1', '2', 'WEST');
    robot.left();

    robot.facing.should.equal('SOUTH');

    done();
  });

  it('should turn right, was facing WEST, now facing NORTH', done => {
    const robot = new Robot();
    robot.place('1', '2', 'WEST');
    robot.right();

    robot.facing.should.equal('NORTH');

    done();
  });
});

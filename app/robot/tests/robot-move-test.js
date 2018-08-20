const Robot = require('../index');
const sinon = require('sinon');
const should = require('should');

describe('Robot: move', () => {
  it('should move the robot 1 unit NORTH', function(done) {
    const robot = new Robot();
    robot.place('1', '2', 'NORTH');
    robot.move();

    robot.posY.should.equal(3);
    robot.posX.should.equal(1);

    done();
  });

  it('should move the robot 1 unit EAST', done => {
    const robot = new Robot();
    robot.place('1', '2', 'EAST');
    robot.move();

    robot.posY.should.equal(2);
    robot.posX.should.equal(2);

    done();
  });

  it('should move the robot 1 unit SOUTH', done => {
    const robot = new Robot();
    robot.place('1', '2', 'SOUTH');
    robot.move();

    robot.posY.should.equal(1);
    robot.posX.should.equal(1);

    done();
  });

  it('should move the robot 1 unit WEST', done => {
    const robot = new Robot();
    robot.place('1', '2', 'WEST');
    robot.move();

    robot.posY.should.equal(2);
    robot.posX.should.equal(0);

    done();
  });

  it('should not move the robot, it would fall off the NORTH edge', done => {
    const robot = new Robot();
    robot.place('1', '4', 'NORTH');

    robot.move();

    robot.posY.should.equal(4);
    robot.posX.should.equal(1);

    done();
  });

  it('should not move the robot, it would fall off the WEST edge', done => {
    const robot = new Robot();
    robot.place('0', '2', 'WEST');

    robot.move();

    robot.posY.should.equal(2);
    robot.posX.should.equal(0);

    done();
  });

  it('should not move the robot, it would fall off the SOUTH edge', done => {
    const robot = new Robot();
    robot.place('2', '0', 'SOUTH');

    robot.move();

    robot.posY.should.equal(0);
    robot.posX.should.equal(2);

    done();
  });

  it('should not move the robot, it would fall off the EAST edge', done => {
    const robot = new Robot();
    robot.place('4', '2', 'EAST');

    robot.move();

    robot.posY.should.equal(2);
    robot.posX.should.equal(4);

    done();
  });
});

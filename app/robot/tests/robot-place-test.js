const Robot = require('../index');
const should = require('should');

describe('Robot: place', () => {
  it('should place the robot at the position given', done => {
    const robot = new Robot();
    robot.place(1, 2, 'NORTH').should.equal(true);

    robot.posX.should.equal(1);
    robot.posY.should.equal(2);

    done();
  });

  it('should not place the robot, X position is out of bounds', done => {
    const robot = new Robot();
    robot.place(8, 0, 'NORTH').should.not.equal(true);

    should.not.exist(robot.posX);
    should.not.exist(robot.posY);

    done();
  });

  it('should not place the robot, Y position is out of bounds', done => {
    const robot = new Robot();
    robot.place(0, 8, 'NORTH').should.not.equal(true);

    should.not.exist(robot.posX);
    should.not.exist(robot.posY);

    done();
  });

  it('should not place the robot, facing direction is invalid', done => {
    const robot = new Robot();
    robot.place(1, 2, 'SOUTHWEST').should.not.equal(true);

    done();
  });
});

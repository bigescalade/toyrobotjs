const Robot = require('../index');
const sinon = require('sinon');
const should = require('should');

describe('Robot: example', () => {
  it('should give expected output of: 0,1,NORTH', function(done) {
    const robot = new Robot();
    robot.place('0', '0', 'NORTH');
    robot.move();
    robot.report();

    robot.facing.should.equal('NORTH');
    robot.posY.should.equal(1);
    robot.posX.should.equal(0);

    done();
  });

  it('should give expected output of: 0,0,WEST', function(done) {
    const robot = new Robot();
    robot.place('0', '0', 'NORTH');
    robot.left();
    robot.report();

    robot.facing.should.equal('WEST');
    robot.posY.should.equal(0);
    robot.posX.should.equal(0);

    done();
  });

  it('should give expected output of: 3,3,NORTH', function(done) {
    const robot = new Robot();
    robot.place('1', '2', 'EAST');
    robot.move();
    robot.move();
    robot.left();
    robot.move();
    robot.report();

    robot.facing.should.equal('NORTH');
    robot.posY.should.equal(3);
    robot.posX.should.equal(3);

    done();
  });
});

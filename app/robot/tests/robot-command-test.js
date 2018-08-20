/* eslint-env node, mocha */

const should = require('should');
const sinon = require('sinon');
const Robot = require('../index');

describe('Robot: command', () => {
  it('should execute the command given', (done) => {
    const robot = new Robot();

    // Sinon is used here to spy on the object method
    const spy = sinon.spy(robot, 'place');

    robot.command('PLACE', ['0', '0', 'NORTH']);

    /* Ensure that our sinon spy method executes
     * with the correct arguments
     */
    spy.calledOnce.should.equal(true);
    should(spy.calledWithExactly('0', '0', 'NORTH')).equal(true);

    done();
  });
});

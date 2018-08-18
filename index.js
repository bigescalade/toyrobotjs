let colors = require('colors/safe');
let figlet = require('figlet');
let inquirer = require('inquirer');

console.log(colors.green('*'.repeat(50)));
console.log(colors.green(figlet.textSync('toyrobotjs', {})));
console.log(colors.green('*'.repeat(50)));
console.log('\n');

const questions = [
  {
    type: 'input',
    name: 'command',
    message: 'Please input a command, or type "help" for instructions'
  }
];

const help = () => {
  console.log(
    colors.yellow(
      '\nStart by placing a robot on the table by using the following command:'
    )
  );
  console.log(colors.yellow('PLACE X,Y,F (facing direction) - for example:'));
  console.log(colors.cyan('  PLACE 0,0,NORTH\n'));
  console.log(
    colors.yellow('Then use the following commands to interact with the robot:')
  );
  console.log(
    colors.cyan('  MOVE  ') +
      colors.yellow(
        ' - (move the toy robot one unit forward in the direction it is currently facing)'
      )
  );
  console.log(
    colors.cyan('  LEFT  ') +
      colors.yellow(
        ' - (rotate the robot 90 degrees to the left without changing the position of the robot)'
      )
  );
  console.log(
    colors.cyan('  RIGHT ') +
      colors.yellow(
        ' - (rotate the robot 90 degrees to the right without changing the position of the robot)'
      )
  );
  console.log(
    colors.cyan('  REPORT') +
      colors.yellow(
        ' - (announce the X,Y and F (facing direction) of the robot)\n'
      )
  );
};

function prompt() {
  inquirer.prompt(questions).then(answers => {
    if (answers.command.toLowerCase() === 'help') {
      help();
      return prompt();
    }

    prompt();
  });
}

prompt();

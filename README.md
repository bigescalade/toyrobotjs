# toyrobotjs

### Requirements

NodeJS version 10 or above

### Getting started

Clone the repository
Inside the root folder, run the following commands:

```
npm install
npm start
```

Then follow the instructions in the terminal.

### Tests

Inside the root folder, run the following command:

```
npm test
```

### About

This is a node application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.

The grid is a 5x5 grid with the following coordinates:

```
|---|---|---|---|---|
|0,4|1,4|2,4|3,4|4,4|
|---|---|---|---|---|
|0,3|1,3|2,3|3,3|4,3|
|---|---|---|---|---|
|0,2|1,2|2,2|3,2|4,2|
|---|---|---|---|---|
|0,1|1,1|2,1|3,1|4,1|
|---|---|---|---|---|
|0,0|1,0|2,0|3,0|4,0|
|---|---|---|---|---|
```

Rules of the application:

- The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

- The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.

- MOVE will move the toy robot one unit forward in the direction it is currently facing.

- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.

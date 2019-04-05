# Title & Description

## toyrobotjs

The classic coding test. A toy robot that can be placed and move around a 5x5 grid.

# Table of Contents

1. [Environments](#environments)
2. [System Dependencies & Configuration](#system-dependencies-&-configuration)
3. [Application Installation Instructions](#application-installation-instructions)
4. [Operating Instructions](#operating-instructions)
5. [Testing Instructions](#testing-instructions)
6. [Overview](#overview)
7. [Discussion](#discussion)
8. [License](#license)
9. [Contributing](#contributing)

# Environments

NodeJS > 10

# System Dependencies & Configuration

1. Clone this repository
2. Install dependencies

- Run `nvm use` in terminal from project root

# Application Installation Instructions

- Run `npm install` in terminal from project root

# Operating Instructions

- Run `npm start` in terminal from project root
- Type `help` for instructions

# Testing Instructions

- Run `npm test` in terminal from project root

# Overview

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

# Discussion

Written while I was learning ES6, so there is a mishmash of ES5 and ES6 syntax.

# License

N/A

# Contributing

N/A

# MathJS

## Introduction
MathJS is a JavaScript math library used as a vehicle for developing an understanding of commonly used math functions as well as Unit Testing and Continuous Integration.  MathJS is not meant to replace or expand any existing math libraries.

## Unit Testing
The purpose of unit testing is to validate function outputs by comparing them to expected results.  Tests are written concurrent to function development (i.e. you should write functions without considering what specific tests will be run on them).

### Node.js
This project uses [Node.js](https://nodejs.org/en/) for the purpose of unit testing. Node.js allows the JavaScript code to be executed through a command line environment. To use the Node environment for this project, navigate to the project folder in your terminal of choice and use the command:

> node main.js

This will execute the code in the main.js file -- this file is used as a playground environment while developing the library.

### Jest
[Jest](https://jestjs.io/) is a node package which provides tools for unit testing.  Jest uses an adjecency file structure, meaning every source file will have a test file. As an example:

> /src/calculation.js

has a counterpart in 

> /test/calculation.test.js

To use jest to run unit tests, navigate to the project folder in your terminal of choice and use the command:

> npm test

The "test" command has been pre-defined for the project in the package.json file.  This command will run all available test suites and output the results.

![Test Result](/misc/images/Annotation_README.png)

## Continuous Integration
The purpose of continuous integration is to ensure that the project remains in a clean state during all iterations.  This is accomplished by running continuous tests on the repository remote origin (Github, in the case of this project).

### Github

### CircleCI

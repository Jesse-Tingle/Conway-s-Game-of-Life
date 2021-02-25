# Conway-s-Game-of-Life

You can find the deployed project at (https://jt-cgol.netlify.app/)

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)

![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)

[![Netlify Status](https://api.netlify.com/api/v1/badges/126e30b2-26d0-4bb0-bbd1-1779840fc696/deploy-status)](https://app.netlify.com/sites/jt-cgol/deploys)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Project Overview

Welcome to John Conway's "Game of Life"! This is a computer science classic from 1970, a program that simulates a cellular automaton (plural automata). It has connections to all kinds of different aspects of computer science and nature.

### Key Features
* Grid to display cells. 
* Cell objects or components that, at a minimum, should have:
  * Properties
    * current state: (alive, dead), (black, white)
    * Clickable/Tappable:
      * can be clicked to allow user to setup initial cell configuration
    * Behaviors
      * Toggle state functionality: switch between alive & dead either
        because user manually toggled cell before starting simulation or
        simulation is running and rules of life caused cell to change
        state
* An appropriate data structure to hold a grid of cells that is at least
  25x25. Go as big as you want.
* Text to display current generation # being displayed
  * Utilize a timeout function to build the next generation of cells &
    update the display at the chosen time interval
* Button(s) that start & stop the animation
* Button to clear the grid

Write an algorithm that:

* Implements the following basic steps:
  * For each cell in the current generation's grid:
    1. Examine state of all eight neighbors (it's up to you whether you
       want cells to wrap around the grid and consider cells on the
       other side or not)
    2. Apply rules of life to determine if this cell will change states
    3. When main loop completes:
       1. Swap current and next grids
       2. Repeat until simulation stopped
* Breaks down above steps into appropriate sub-tasks implemented with
  helper functions to improve readability
* Uses double buffering to update grid with next generation.
* Does something well-documented with the edge of the grid. (e.g. wrap
  around to the far side--most fun!--or assumes all edge cells are
  permanently dead.)


## Tech Stack

### Front end built using:

-   React
-   Axios

#### React

-   Familiarity with react (lower technical debt)

-   Single page application needed

-   Faster Load Times (more performant)

-   Reusable UI Components

#### Front end deployed to (https://jt-cgol.netlify.app/)

# Installation Instructions

In the root folder run "npm install"

## Other Scripts

-   npm start (starts local server)

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note I have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

-   Check first to see if your issue has already been reported.

-   Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.

-   Create a live example of the problem.

-   Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

-   Ensure any install or build dependencies are removed before the end of the layer when doing a build.

-   Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.

-   Ensure that your code conforms to our existing code conventions and test coverage.

-   Include the relevant issue number, if applicable.

-   You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).


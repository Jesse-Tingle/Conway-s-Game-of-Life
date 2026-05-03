# Conway’s Game of Life
## 🔗 Live Demo (https://jt-cgol.netlify.app/)

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)

![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)

[![Netlify Status](https://api.netlify.com/api/v1/badges/126e30b2-26d0-4bb0-bbd1-1779840fc696/deploy-status)](https://app.netlify.com/sites/jt-cgol/deploys)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## 🧠 Overview

This project is an interactive implementation of Conway’s Game of Life, a classic cellular automaton that demonstrates how complex patterns can emerge from simple rules.

The application allows users to create custom starting states and watch how patterns evolve over time based on deterministic rules.

## ✨ Features

Interactive grid with clickable cells to create custom patterns
Play / pause simulation controls
Clear grid functionality
Generation counter to track simulation progress
Dynamic state updates based on Conway’s rules
Configurable simulation speed (if implemented or planned)

## ⚙️ How It Works

Each cell in the grid exists in one of two states:

Alive
Dead

On each generation:

Every cell evaluates its 8 neighbors
The next state is determined using Conway’s rules:
Underpopulation: A live cell with fewer than 2 neighbors dies
Survival: A live cell with 2 or 3 neighbors lives
Overpopulation: A live cell with more than 3 neighbors dies
Reproduction: A dead cell with exactly 3 neighbors becomes alive

The application uses double buffering to calculate the next generation without mutating the current state.

## 🏗️ Tech Stack

React
JavaScript
CSS
Netlify (deployment)

## 🧩 Key Challenges & Solutions

Efficient Grid Updates

Updating every cell each generation can be expensive.
Solution: Implemented a structured grid system with controlled state updates to ensure predictable rendering.

State Management

Managing a rapidly updating grid while keeping UI responsive.
Solution: Separated simulation logic from UI components to keep code maintainable and easier to reason about.

Simulation Timing

Ensuring smooth and consistent updates.
Solution: Used timed intervals to control generation updates and allow user interaction (start/stop).

## 📚 What I Learned

How to model complex systems using simple rules
Managing state in dynamic, real-time applications
Structuring logic-heavy applications for readability and scalability
Breaking down algorithms into maintainable helper functions

## 🚀 Future Improvements

Adjustable grid size
Pattern presets (glider, oscillators, etc.)
Click-and-drag cell drawing
Performance optimizations for larger grids
Mobile UX improvements

## 🛠️ Installation

Clone the repo and install dependencies:

npm install
npm start

## 📌 Why This Project Matters

This project demonstrates my ability to:

Translate algorithmic rules into working applications
Manage complex state updates in React
Build interactive, user-driven simulations
Write clean, modular, and maintainable code

## 📄 License

MIT


# Classic Tetris (React + TypeScript)

**Live Demo:** https://classic-tetris.com

A production-deployed Tetris application built with React and TypeScript that emphasizes intentional state modeling, runtime layout computation, and performance conscious design.

This is an independently developed project that demonstrates frontend systems thinking, real-time interaction logic, responsive layout mathematics, and deployment from end to end.

---

## Overview

This project is a fully playable Tetris game implemented as a web application. Instead of treating it as a simple UI demo, the focus was on:

- **Deterministic game state modeling**
- **Decoupling game logic from rendering**
- **Dynamic grid layout based on viewport**
- **Efficient real-time updates and performance considerations**
- **Full deployment and infrastructure setup**

It’s designed both as an interactive experience and as a showcase of frontend architecture.

---

## Core Architecture Highlights

### 🎮 Game Loop & State Modeling

This project structures the game loop and updates in a predictable way:

- Movement, rotation, and collision detection logic run independently of rendering
- Game state (stage matrix, active tetromino, score, level, etc.) is modeled to avoid tight coupling with UI
- Collision checks short-circuit early when possible to reduce computational overhead
- State transitions are explicit and testable

---

## Dynamic Grid & Layout Logic

Rather than only styling for responsiveness, grid calculations are performed at runtime based on viewport constraints:

- Dynamically compute stage width, height, and block size
- Maintain aspect ratio while preserving usable UI space
- Adjust layout across breakpoints
- Utilities include:
  - `getStageDimensions`
  - `getBlockSize`
  - `getStageScale`

This keeps gameplay consistent and visually coherent across screen sizes.

---

## Deployment

The live application is deployed in production. Deployment steps included:

- Building optimized production bundles
- Provisioning a DigitalOcean server
- Nginx configuration for static assets and HTTPS
- DNS setup
- Continuous availability via HTTPS

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| UI | React |
| Rendering & Logic | Custom game loop, dynamic layout math |
| Deployment | DigitalOcean, Nginx, HTTPS |
| Build & Tooling | Vite, TypeScript, ESLint, Prettier |

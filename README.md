# Valentine's Quest App

An interactive multi-step Valentine's Day web application built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Authentication Page**: Name-based login (Nikita or Chinu)
- **3-Question Quiz**: Interactive quiz with animations
- **Proposal Page**: Romantic proposal with dynamic button scaling
- **Final Message**: Beautiful ending screen

## Setup

1. Install dependencies:
```bash
npm install
```

2. The app uses environment variables for allowed names. Check `.env` file:
```
VITE_ALLOWED_NAME_1=Nikita
VITE_ALLOWED_NAME_2=Chinu
```

## Development

Run the development server:
```bash
npm run dev
```

## Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- react-confetti

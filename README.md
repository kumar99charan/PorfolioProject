# Portfolio Project

This is a portfolio website built using React, Material UI, and Joy UI. It showcases personal projects, social profiles, academic background.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Directory Structure](#directory-structure)
3. [Functionality Overview](#functionality-overview)
4. [Packages Used](#packages-used)
5. [Scripts](#scripts)
6. [Installation](#installation)
7. [Running the Project](#running-the-project)

## Project Overview

This is a Portfolio Website built using react and node. .Here the user can navigate through the components like Home,Academics,PRojects,Social Profile and Resume.

## Directory Structure

```bash
root/
│
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Academics.jsx
│   │   ├── Dashbord.jsx
│   │   ├── Home.jsx
│   │   ├── PageNotFound.jsx
│   │   ├── Profile.jsx
│   │   └── Projects.jsx
│   ├── redux/
│   │   ├── slices/
│   │   │   └── navSlice.js
│   │   └── store.js
│   ├── resources/
│   │   ├── css/
│   │   │   ├── academics.css
│   │   │   ├── dashbord.css
│   │   │   ├── home.css
│   │   │   ├── profile.css
│   │   │   ├── projects.css
│   │   │   └── shared.css
│   │   └── images
│   ├── Utils/
│   │   └── Constants.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package-lock.json
├── pakage.json
└── README.md
```

## Functionality Overview

### Home Page

- A Brief Introduction


### Profile Page

- Links to social profiles

### Projects Page

- Grid of personal projects with descriptions and links

### Academics Page

- Academic Journey

### 404 Page

- Default page for error/content not found
- User data fetch (for learning express)

## Packages Used

- React
- Material UI
- Joy UI
- React Router
- Redux Toolkit
- Typewriter-effect
- Axios

## Scripts

Runs the app in development mode

```bash
npm start
```

Builds the app for production

```bash
npm run build
```

Runs tests

```bash
npm run test
```

Checks code quality

```bash
npm run lint
```

## Installation

Clone the repository:

```bash
git clone https://github.com/kumar99charan/PorfolioProject
```

Navigate to the project directory:

```bash
cd PorfolioProject
```

Install dependencies:

```bash
npm install
```

## Running the Project

After installation, run the project locally:

```bash
npm start
```

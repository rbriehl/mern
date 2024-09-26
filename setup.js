const fs = require('fs');
const path = require('path');

const createDirectory = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const createFile = (filePath, content = '') => {
  fs.writeFileSync(filePath, content);
};

const setupBackend = () => {
  const backendStructure = [
    'backend/src/config',
    'backend/src/controllers',
    'backend/src/middleware',
    'backend/src/models',
    'backend/src/routes',
    'backend/src/services',
    'backend/src/utils',
    'backend/tests',
  ];

  backendStructure.forEach(createDirectory);

  createFile('backend/.env', 'PORT=5000\nMONGODB_URI=mongodb://localhost:27017/yourdbname');
  createFile('backend/.gitignore', 'node_modules\n.env');
  createFile('backend/package.json', '{\n  "name": "backend",\n  "version": "1.0.0",\n  "main": "src/app.js"\n}');
  createFile('backend/README.md', '# Backend\n\nThis is the backend for the MERN stack application.');
  createFile('backend/src/app.js', 'console.log("Backend app");');
};

const setupFrontend = () => {
  const frontendStructure = [
    'frontend/public',
    'frontend/src/assets',
    'frontend/src/components/ui',
    'frontend/src/components/forms',
    'frontend/src/features/feature1/components',
    'frontend/src/features/feature1/hooks',
    'frontend/src/features/feature1/utils',
    'frontend/src/features/feature2/components',
    'frontend/src/features/feature2/hooks',
    'frontend/src/features/feature2/utils',
    'frontend/src/hooks',
    'frontend/src/layouts',
    'frontend/src/pages',
    'frontend/src/services',
    'frontend/src/store',
    'frontend/src/utils',
  ];

  frontendStructure.forEach(createDirectory);

  createFile('frontend/.env', 'REACT_APP_API_URL=http://localhost:5000');
  createFile('frontend/.gitignore', 'node_modules\nbuild\n.env');
  createFile('frontend/package.json', '{\n  "name": "frontend",\n  "version": "0.1.0",\n  "private": true\n}');
  createFile('frontend/README.md', '# Frontend\n\nThis is the frontend for the MERN stack application.');
  createFile('frontend/src/App.js', 'function App() {\n  return (\n    <div className="App">\n      <h1>Hello, MERN!</h1>\n    </div>\n  );\n}\n\nexport default App;');
  createFile('frontend/src/index.js', "import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);");
};

const setup = () => {
  setupBackend();
  setupFrontend();
  console.log('Project structure created successfully!');
};

setup();

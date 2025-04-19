import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App bg-black text-white">
       <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-2xl font-bold mb-4">👋 Hey Reviewer!</h1>
      <p className="text-lg">
        This project contains reusable UI components built with React, TypeScript, TailwindCSS and documented in Storybook.
      </p>
      <p className="mt-4">
        👉 To view the components, please open{' '}
        <a
          href="http://localhost:6006"
          className="text-blue-600 underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          Storybook
        </a>
      </p>
    </div>
    </div>
  );
}

export default App;

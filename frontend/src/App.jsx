// src/App.js hi
import React from 'react';
import FileUpload from './components/FileUpload';
import FileDownload from './components/FileDownload';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <h1>File Upload and Download</h1>
        <FileUpload />
        <FileDownload />
      </div>
    </>

  );
}

export default App;

import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import FileDownload from './components/FileDownload';
import FileList from './components/FileList';
import FileSearch from './components/FileSearch';
import LocalIP from './components/LocalIp';
import './App.css';

function App() {
    const [refresh, setRefresh] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleUpload = () => {
        setRefresh((prev) => !prev); // Toggle the refresh state to trigger the useEffect in FileList
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <>
            <div className="App">
                <h1>File Upload and Download</h1>
                <LocalIP />
                <FileUpload onUpload={handleUpload} />
                <FileSearch onSearch={handleSearch} />
                <FileDownload />
                <FileList refresh={refresh} searchQuery={searchQuery} />
            </div>
        </>
    );
}

export default App;

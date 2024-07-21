import React, { useEffect, useState } from 'react';

const FileList = ({ refresh, searchQuery }) => {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(null);

    const fetchFiles = async () => {
        try {
            const localIP = window.location.hostname; // Get the local IP address
            const response = await fetch(`http://${localIP}:5000/files`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const filesList = await response.json();
            setFiles(filesList);
        } catch (error) {
            setError(error.message);
            console.error('Error fetching files:', error);
        }
    };

    useEffect(() => {
        fetchFiles();
    }, [refresh]);

    const filteredFiles = files.filter((file) =>
        file.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h2>Uploaded Files</h2>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            <ul>
                {filteredFiles.map((file, index) => (
                    <li key={index}>
                        {file}
                        <button onClick={() => handleFileDownload(file)}>Download</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const handleFileDownload = async (filename) => {
    const localIP = window.location.hostname; // Get the local IP address
    const response = await fetch(`http://${localIP}:5000/download/${filename}`);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
};

export default FileList;

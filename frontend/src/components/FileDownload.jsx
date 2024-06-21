import React, { useState } from 'react';

const FileDownload = () => {
    const [filename, setFilename] = useState('');

    const handleFileDownload = async () => {
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

    return (
        <div>
            <input
                type="text"
                value={filename}
                onChange={(e) => setFilename(e.target.value)}
                placeholder="Enter filename to download"
            />
            <button onClick={handleFileDownload}>Download</button>
        </div>
    );
};

export default FileDownload;

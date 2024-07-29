import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ onUpload }) => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const localIP = window.location.hostname; // Get the local IP address

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = async () => {
        if (!file) {
            alert('Please select a file first.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        setLoading(true); // Set loading to true

        try {
            const response = await axios.post(`http://${localIP}:5000/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            alert('File uploaded successfully');
            onUpload(); // Call the onUpload function to trigger a refresh
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('File upload failed');
        } finally {
            setLoading(false); // Set loading to false
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload} disabled={loading}>
                {loading ? 'Uploading...' : 'Upload'}
            </button>
        </div>
    );
};

export default FileUpload;

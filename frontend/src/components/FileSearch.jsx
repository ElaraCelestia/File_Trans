import React, { useState } from 'react';

const FileSearch = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value); // Pass the query to the parent component
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search files..."
                value={query}
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default FileSearch;

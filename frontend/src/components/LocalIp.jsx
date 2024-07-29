import React, { useEffect, useState } from "react";
import axios from "axios";

function LocalIP() {
    const [localIP, setLocalIP] = useState('localhost'); // Default to localhost

    useEffect(() => {
        const fetchLocalIp = async () => {
            try {
                const localIP = window.location.hostname; // Get the local IP address
                const response = await axios.get(`http://${localIP}:5000/local-ip`);
                setLocalIP(response.data.localIP);
            } catch (error) {
                console.error(`Error fetching IP: ${error}`);
            }
        };
        fetchLocalIp();
    }, []); // Dependency array should be properly closed

    return (
        <div>
            <h1>{localIP}</h1>
        </div>
    );
}

export default LocalIP;

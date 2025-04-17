import { useEffect, useState } from "react";

const IPFetcher = () => {
    const [ip, setIp] = useState("Fetching...");

    useEffect(() => {
        fetch("https://api64.ipify.org/?format=json")
            .then(response => response.json())
            .then(data => setIp(data.ip))
            .catch(error => console.error("Error fetching IP:", error));
    }, []);

    return (
        <div>
            <h2>Your Public IP Address:</h2>
            <p>{ip}</p>
        </div>
    );
};

export default IPFetcher;
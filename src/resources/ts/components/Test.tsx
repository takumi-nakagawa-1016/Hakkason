import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/data');
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Data from API:</h1>
            <ul>
                {data}
            </ul>
        </div>
    );
};

export default Test;

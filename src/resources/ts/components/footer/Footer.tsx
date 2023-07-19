import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: '#f5f5f5', height: '60px', padding: '10px',}}>
            <p style={{ color: 'gray', fontSize: '14px', textAlign: 'center' }}>© {new Date().getFullYear()} @mile_calender</p>
        </footer>
    );
};

export default Footer;

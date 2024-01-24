import React from 'react';

const logoSrc = '/Syn.png';

export default function Logo() {
    return (
        <img
    src={logoSrc}
    alt="80s style pink Syntax Logo"
    className="mb-2"
    style={{
        width: '250px',
        height: 'auto',
        display: 'block',
        margin: '0 auto',
        marginTop: '50px'
        

    }}
/>
    );
}

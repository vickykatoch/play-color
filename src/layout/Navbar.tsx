import React from 'react';

const Navbar: React.FC = () => {
    return (
        <ul className='nav'>
            <li className="nav-item">
                <span className='nav-link active'>Home</span>
            </li>
            <li className="nav-item">
                <span className='nav-link'>About</span>
            </li>
        </ul>
    );
};

export default Navbar;
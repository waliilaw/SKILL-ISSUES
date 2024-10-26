// Header.jsx
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import XIcon from '@mui/icons-material/X';
import './Header.css';
import Card from '../Card/Card'

const Header = () => {
    return (
        <>
            <div className='navbar'>
                <PersonIcon className='icon' />
                <XIcon className='icon chat-icon' />
                <ChatIcon className='icon' />
            </div>


        </>
    );
};

export default Header;
// Import all file
import React from 'react';
import './Header.css'

// Start Header Part
const Header = () => {
    return (
        // Header HTML code start
        <header className="bg-teal drop-shadow-lg rounded-lg mx-2 my-2 md:my-5 px-5 md:px-12 py-2">
            <div className='flex justify-between'>
                <a className="logo text-3xl text-white">Knowledge Cafe</a>

                <img className='rounded-full w-10' src="https://randomuser.me/api/portraits/men/9.jpg" />
            </div>
        </header>
        // Header HTML end
    );
};
// End of function

export default Header;
// Export file and using on other file by using import
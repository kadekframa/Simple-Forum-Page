import React from 'react';
import MenuOption from './MenuOption';
import SearchInput from './SearchInput';
import Gap from '../Atoms/Gap';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className='navbar'>
        <div className='wrapper-nav-content'>
            <h1 className='page-name'>Forum anak IT</h1>
            <Gap width={26} />
            <SearchInput className="search-component" placeholder="Search" />
            <Gap width={24} />
            <MenuOption className="option-component" />
        </div>
    </header>
)
}

export default Navbar;

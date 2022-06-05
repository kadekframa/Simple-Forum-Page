import React from 'react';
import MenuOption from './MenuOption';
import SearchInput from './SearchInput';
import Gap from '../Gap';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
        <header className='navbar'>
            <div className='nav-content'>
                <h1 className='page-name'>Forum anak IT</h1>
                <Gap width={39} />
                <SearchInput className="search-component" />
                <Gap width={62} />
                <MenuOption className="option-component" />
            </div>
        </header>
    )
  }
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <Link to='/'>
            <div className='flex main-header'>
                <h1>ФОТОКНИГА: Элидан Пивоварцев</h1>
            </div>
        </Link>
    )
}

export default Header;
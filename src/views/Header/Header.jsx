import React from 'react';
import AddCharacter from '../../components/AddCharacter/AddCharacter'

function Header(props) {
    return (
        <div className='header'>
            Игра-угадайка Rick&Morty
            <div className='header__button'>
                <AddCharacter title='Получить персонажа'/>
            </div>
        </div>
    );
}

export default Header;
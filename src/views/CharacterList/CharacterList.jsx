import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Character from '../Character/Character';
import ButtonClick from '../../components/ButtonClick/ButtonClick'

function CharacterList() {
    const { characters } = useSelector((store) => store.mainStore);

    return (
        <div className='characters-container'>
            <h1>Угадай признак персонажа</h1>
            <h5>можешь передумать</h5>
            {
                characters.length !== 0 && (
                    <div className='buttons-store'>
                        <Link to={'/rightAnswers'}>
                            <ButtonClick title='угаданные'/>   
                        </Link>
                        <Link to={'/results'}>
                            <ButtonClick title='неугаданные'/>
                        </Link>
                    </div>
                )
            }           
    
            <div className='characters'>
                {
                    characters && characters.map((el) => (
                        <div key={el.id}>
                            <Character image={el.image} name={el.name} species={el.species} id={el.id}/>
                        </div>    
                    ))
                }
            </div>
        </div>
        
    );
}

export default CharacterList;
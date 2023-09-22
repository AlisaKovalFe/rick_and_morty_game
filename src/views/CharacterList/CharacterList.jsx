import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Character from '../Character/Character';
import ButtonAnswer from '../../components/ButtonAnswer/ButtonAnswer'

function CharacterList() {
    const { characters } = useSelector((store) => store.mainStore);


    return (
        <div className='characters-container'>           
            <div className='buttons-store'>
                <Link to={'/rigthAnswers'}>
                    <ButtonAnswer title='угаданные'/>   
                </Link>
                <Link to={'/wrongAnswers'}>
                    <ButtonAnswer title='неугаданные'/>
                </Link>
            </div>
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
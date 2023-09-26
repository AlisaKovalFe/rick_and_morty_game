import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import ButtonClick from '../../components/ButtonClick/ButtonClick'
import { useParams } from 'react-router-dom'

function ResultCards() {

    
    const { rightAnswers } = useSelector((store) => store.rigthAnswersStore);
    const { wrongAnswers } = useSelector((store) => store.wrongAnswersStore);

    const [ answer, setAnswer ] = useState(rightAnswers)
    

    return (
        <div className='answers'>
            <h2>Угаданные персонажи</h2>
            <div className='answers__info'>
                {
                    answer?.map((el) => (
                        <div className='character-info' key={el.id}>
                            <img className='character-info__image' src={el.image} alt={el.name}/>
                            <h3>{el.name}</h3>
                        </div>
                    ))
                }
            </div>

        
            <div className='button-back'>
                <Link to={'/results'}>
                    <ButtonClick title='назад'/>
                </Link>
            </div>
                
    
        </div>
    );
}

export default ResultCards;
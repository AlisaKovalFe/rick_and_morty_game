import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import ButtonClick from '../../components/ButtonClick/ButtonClick'

function ResultCards() {
    const { flag } = useSelector((store) => store.flagStore);
    const { rightAnswers } = useSelector((store) => store.rigthAnswersStore);
    const { wrongAnswers } = useSelector((store) => store.wrongAnswersStore);

    return (
        <div className='answers-container'>
            {
                flag ? (
                    <div className='answers'>
                        <h2>Угаданные персонажи</h2>
                        <div className='answers__info'>
                            {
                                rightAnswers?.map((el) => (
                                    <div className='character-info' key={el.id}>
                                        <img className='character-info__image' src={el.image} alt={el.name}/>
                                        <h3>{el.name}</h3>
                                    </div>
                                ))
                            }
                        </div>
                    </div>    
                ) : (
                    <div className='answers'>
                        <h2>Неугаданные персонажи</h2>
                        <div className='answers__info'>
                            {
                                wrongAnswers?.map((el) => (
                                    <div className='character-info' key={el.id}>
                                        <img className='character-info__image' src={el.image} alt={el.name}/>
                                        <h3>{el.name}</h3>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
            <div className='button-back'>
                <Link to={'/results'}>
                    <ButtonClick title='назад'/>
                </Link>
            </div>
        </div>
        

    );
}

export default ResultCards;
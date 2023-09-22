import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import ButtonClick from '../../components/ButtonClick/ButtonClick'

function WrongAnswers(props) {
    const { wrongAnswers } = useSelector((store) => store.wrongAnswersStore);

    return (
        <div className='wrongAnswers'>
            <h3>Неугаданные персонажи</h3>
            <div className='wrongAnswers__answers'>
                {
                    wrongAnswers.length !== 0 && wrongAnswers.map((el) => (
                        <div className='wrongAnswers__answer' key={el.id}>
                            <img className='wrongAnswers__image' src={el.image} alt={el.name}/>
                        </div>
                    ))
                }
            </div>
            
            {
                wrongAnswers.length !== 0 && (
                    <div className='button-back'>
                        <Link to={'/'}>
                            <ButtonClick title='назад'/>
                        </Link>
                    </div>
                )
            }
        </div>
    );
}

export default WrongAnswers;
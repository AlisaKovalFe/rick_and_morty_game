import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import ButtonClick from '../../components/ButtonClick/ButtonClick'

function RigthAnswers(props) {
    const { rightAnswers } = useSelector((store) => store.rigthAnswersStore);

    return (
        <div className='rightAnswers'>
            <h3>Угаданные персонажи</h3>
            <div className='rightAnswers__answers'>
                {
                    rightAnswers.length !== 0 && rightAnswers.map((el) => (
                        <div className='rightAnswers__answer' key={el.id}>
                            <img className='rightAnswers__image' src={el.image} alt={el.name}/>
                            <h4>{el.name}</h4>
                        </div>
                    ))
                }
            </div>


            <div className='button-back'>
                <Link to={'/'}>
                    <ButtonClick title='назад'/>
                </Link>
            </div>
    
        </div>
    );
}

export default RigthAnswers;
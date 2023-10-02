import React from 'react';
import { useSelector } from 'react-redux';
import ButtonClick from '../../components/ButtonClick/ButtonClick'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { changeFlagAC } from '../../store/actions/changeFlagAction'
import { useNavigate } from 'react-router-dom'
import { clearCharactersStoreAC } from '../../store/actions/mainActions'
import { clearAnswersStoresAC } from '../../store/actions/answerActions'

function ResultsOfGame() {
   
    const { rightAnswers } = useSelector((store) => store.rigthAnswersStore);
    const { wrongAnswers } = useSelector((store) => store.wrongAnswersStore);
    
    const dispatch = useDispatch();
    const navigate = useNavigate()

    function changeFlag(flag) {
        dispatch(changeFlagAC(
            flag
        ))
        navigate('/results/anwers')
    }

    function stopTheGame() {
        dispatch(clearCharactersStoreAC())
        dispatch(clearAnswersStoresAC())
    }

    return (
        <div className='results'>
            <Link to={'/'}>
                <ButtonClick onClick={stopTheGame} title='&#8592; Играть снова' className='start'/>
            </Link>
            
            <div className='results__output'>
                <h3>Игра окончена</h3>
                <p>Правильных ответов: {rightAnswers.length}</p>
                <p>Неправильных ответов: {wrongAnswers.length}</p>
            </div>
            
            <div className='results__buttons'>
                <button className='button' onClick={() => changeFlag(true)}>Правильные ответы</button>
                <button className='button' onClick={() => changeFlag(false)}>Неправильные ответы</button>
            </div>
        </div>
    );
}

export default ResultsOfGame;
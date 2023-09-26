import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ButtonClick from '../../components/ButtonClick/ButtonClick'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { changeFlagAC } from '../../store/actions/changeFlagAction'
import { useParams, useNavigate } from 'react-router-dom'


function ResultsOfGame(props) {
   
    const { rightAnswers } = useSelector((store) => store.rigthAnswersStore);
    const { wrongAnswers } = useSelector((store) => store.wrongAnswersStore);
    const { flag } = useSelector((store) => store.flagStore);
    
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [ flagNew, setFlagNew] = useState(flag)

    async function changeFlag() {
        await setFlagNew(!flag)
        await navigate('/results/wrong-anwers')
    }

    dispatch(changeFlagAC({
        flag: flagNew
    }))

    return (
        <div className='results'>
            <Link to={'/'}>
                <ButtonClick title='&#8592; Играть снова' className='start'/>
            </Link>
            
            <div className='results__output'>
                <h3>Игра окончена</h3>
                <p>Правильных ответов: {rightAnswers.length}</p>
                <p>Неправильных ответов: {wrongAnswers.length}</p>
            </div>
            
            <div className='results__buttons'>
                <Link to={'/results/right-anwers'}>
                    <ButtonClick title='Правильные ответы' />
                </Link>
                {/* <Link to={'/results/wrong-anwers'}>
                    <ButtonClick title='Неправильные ответы' onClick={() => changeFlag()}/>
                </Link> */}
                <ButtonClick title='Неправильные ответы' onClick={() => changeFlag()}/>
            </div>
        </div>
    );
}

export default ResultsOfGame;
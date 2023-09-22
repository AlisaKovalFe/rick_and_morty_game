import React from 'react';
import ButtonAnswer from '../../components/ButtonAnswer/ButtonAnswer'
import { useSelector, useDispatch } from 'react-redux';
import { addRightAnswerAC } from '../../store/actions/answerActions'
import { addWrongAnswerAC } from '../../store/actions/answerActions'

function Character({name, image, species, id}) {
    const dispatch = useDispatch();
    const { rightAnswers } = useSelector((store) => store.rigthAnswersStore);

    function handleClickHuman() {
        console.log('year', species)
        if (species === 'Human') {
            dispatch(addRightAnswerAC({
                image,
                name
            }))
        }
    }    
    console.log(rightAnswers)

    function handleClickNotHuman() {
        console.log('no', species)
        if (species !== 'Human') {
            dispatch(addWrongAnswerAC({
                image,
                name
            }))
        }
    }  

    return (
        <div className='character' key={name} >
            <img className='character__image' src={image} alt={name}/>
            <div className='buttons'>
                <div onClick={handleClickHuman} >
                    <ButtonAnswer title='человек'/>
                </div>
                <div onClick={handleClickNotHuman} >
                    <ButtonAnswer title='не человек'/>
                </div>
            </div>
        </div>
    );
}

export default Character;
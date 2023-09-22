import React, { useState } from 'react';
import ButtonClick from '../../components/ButtonClick/ButtonClick'
import { useSelector, useDispatch } from 'react-redux';
import { addRightAnswerAC } from '../../store/actions/answerActions'
import { addWrongAnswerAC } from '../../store/actions/answerActions'
import { deleteWrongAnswerAC } from '../../store/actions/answerActions'

function Character({name, image, species, id}) {
    const dispatch = useDispatch();
    const { characters } = useSelector((store) => store.mainStore);
    const { rightAnswers } = useSelector((store) => store.rigthAnswersStore);
    const [ isDisabled, setIsDisabled ] = useState(false) //хотела сделать 2ю кнопку неактивной при нажатии 1й

    function handleClickHuman() {

        setIsDisabled(!isDisabled) // почему не работает setState ???

        const findOnlyNewCharacter = characters.find((el) => rightAnswers?.find((item) => el.id === item.id))

        console.log(findOnlyNewCharacter)
   
        if (species === 'Human') {
            dispatch(addRightAnswerAC({
                image,
                name,
                id
            }))
            dispatch(deleteWrongAnswerAC({
                id
            }))
        }

        if (species !== 'Human') {
            dispatch(addWrongAnswerAC({
                image,
                name,
                id
            }))
        }
    }    

    function handleClickNotHuman() {
        if (species !== 'Human') {
            dispatch(addRightAnswerAC({
                image,
                name,
                id
            }))
            dispatch(deleteWrongAnswerAC({
                id
            }))
        }

        if (species === 'Human') {
            dispatch(addWrongAnswerAC({
                image,
                name, 
                id
            }))
        }
    }  

    return (
        <div className='character' key={name} >
            <img className='character__image' src={image} alt={name}/>
            <div className='buttons'>
                <div onClick={handleClickHuman}>
                    <ButtonClick title='человек'/>
                </div>
                <div onClick={handleClickNotHuman} >
                    {/* {
                        isDisabled ? <ButtonClick disabled title='не человек'/> : <ButtonClick title='не человек'/>
                    } */}
                    
                    <ButtonClick title='не человек'/>
                </div>
            </div>
        </div>
    );
}

export default Character;
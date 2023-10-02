import React, { useState, useEffect } from 'react';
import ButtonClick from '../../components/ButtonClick/ButtonClick'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { addRightAnswerAC } from '../../store/actions/answerActions'
import { addCharacterThunk } from '../../store/actions/mainActions'
import { addWrongAnswerAC } from '../../store/actions/answerActions'
import { genders } from '../../data/data'
import { species } from '../../data/data'
import { statusOfVitality } from '../../data/data'

function CharacterCard() {
    const dispatch = useDispatch();

    const [ features, setFeatures ] = useState(species)
    const storeOfFeatures = [species, statusOfVitality, genders]

    const { characters } = useSelector((store) => store.mainStore);
    const lastCharacterInList = characters[characters.length - 1]

    useEffect(() => {   
        dispatch(addCharacterThunk())
    }, [])

    function handlerClick(title) {
        const variableOfFeatures = Math.round(Math.random() * 10) % storeOfFeatures.length 

        dispatch(addCharacterThunk())

        if (title === lastCharacterInList.species || title === lastCharacterInList.status || title === lastCharacterInList.gender) {
            dispatch(addRightAnswerAC({
                image: lastCharacterInList.image,
                name: lastCharacterInList.name,
                id: lastCharacterInList.id
            }))
        } else {
            dispatch(addWrongAnswerAC({
                image: lastCharacterInList.image,
                name: lastCharacterInList.name,
                id: lastCharacterInList.id
            }))
        }
        
        if (variableOfFeatures === 2) {   
            setFeatures(genders) 
        } else if(variableOfFeatures === 1) {
            setFeatures(statusOfVitality) 
        } else if (variableOfFeatures === 0) {
            setFeatures(species) 
        }
    }

    return (
        <div className='character'>
            <h1>Угадай признак персонажа</h1>

            <img className='character__image' src={lastCharacterInList?.image} alt={lastCharacterInList?.name}/>
            <h2>{lastCharacterInList?.name}</h2>
            <div className='buttons'>
                {
                    features?.map((el) => (
                        <div key={el.id}>
                            <ButtonClick title={el.title} onClick={()=>handlerClick(el.title)}/>
                        </div>                        
                    ))
                }
            </div>

            <Link to={'/results'}>
                <ButtonClick title='Закончить игру'/>
            </Link>

        </div>
    );
}

export default CharacterCard;
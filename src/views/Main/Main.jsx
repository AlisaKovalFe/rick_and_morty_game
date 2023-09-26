import React from 'react';
import { Routes, Route } from 'react-router-dom'
import CharacterCard from '../CharacterCard/CharacterCard';
import ResultsOfGame from '../ResultsOfGame/ResultsOfGame'
import ResultCards from '../ResultCards/ResultCards';



function Main() {
    return (
        <div className='main'>
            <Routes>
                <Route path='/' element={<CharacterCard/>}></Route>
                <Route path='/results' element={<ResultsOfGame/>}></Route>
                <Route path='/results/right-anwers' element={<ResultCards/>}></Route>
                <Route path='/results/wrong-anwers' element={<ResultCards/>}></Route>
            </Routes>
        </div>
    );
}

export default Main;
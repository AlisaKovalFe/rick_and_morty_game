import React from 'react';
import { Routes, Route} from 'react-router-dom'
import CharacterList from '../CharacterList/CharacterList';
import RigthAnswers from '../RightAnswers/RigthAnswers';
import WrongAnswers from '../WrongAnswers/WrongAnswers';

function Main() {
    return (
        <div className='main'>
            <Routes>
                <Route path='/' element={<CharacterList/>}></Route>
                <Route path='/rigthAnswers' element={<RigthAnswers/>}></Route>
                <Route path='/wrongAnswers' element={<WrongAnswers/>}></Route>
            </Routes>
        </div>
    );
}

export default Main;
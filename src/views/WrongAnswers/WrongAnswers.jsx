import React from 'react';
import { useSelector } from 'react-redux';

function WrongAnswers(props) {
    const { wrongAnswers } = useSelector((store) => store.wrongAnswersStore);

    return (
        <div>
        {
            wrongAnswers && wrongAnswers.map((el) => (
                <div>
                    <img src={el.image} alt={el.name}/>
                </div>
            ))
        }
    </div>
    );
}

export default WrongAnswers;
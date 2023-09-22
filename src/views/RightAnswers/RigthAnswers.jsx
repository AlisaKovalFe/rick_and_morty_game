import React from 'react';
import { useSelector } from 'react-redux';

function RigthAnswers(props) {
    const { rightAnswers } = useSelector((store) => store.rigthAnswersStore);

    return (
        <div>
            {
                rightAnswers && rightAnswers.map((el) => (
                    <div>
                        <img src={el.image} alt={el.name}/>
                    </div>
                ))
            }
        </div>
    );
}

export default RigthAnswers;
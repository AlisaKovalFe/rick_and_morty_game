import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { addCharacterThunk } from '../../store/actions/mainActions';

function AddCharacter({title}) {
    const dispatch = useDispatch();

    function handleClick(event) {
        dispatch(addCharacterThunk())
    }

    return (
        <Button onClick={handleClick}>{title}</Button>
    );
}

export default AddCharacter;
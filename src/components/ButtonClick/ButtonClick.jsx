import React from 'react';
import { Button } from 'antd';

function ButtonClick({title, onClick}) {

    return (
        <div>
            <Button onClick={onClick}>{title}</Button>
        </div>
    );
}

export default ButtonClick;
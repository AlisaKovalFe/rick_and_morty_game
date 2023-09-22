import React from 'react';
import { Button } from 'antd';

function ButtonClick({title}) {

    return (
        <div>
            <Button>{title}</Button>
        </div>
    );
}

export default ButtonClick;
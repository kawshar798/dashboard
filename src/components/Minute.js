import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const Minute = () => {
    const [minutes, setMinutes] = useState(5);
    return (
        <div>

            {/* <div>
                <Button onClick={() => { setMinutes(minutes <= 1 ? 1 : minutes - 1) }}>-</Button>

                <p> <Badge badgeContent={minutes} color="secondary">Minutes</Badge></p>
                <Button onClick={() => setMinutes(minutes + 1)}>+</Button>
            </div> */}

            <div style={{ display:'flex',width:'100%',justifyContent:'center',padding: '100px',boxSizing:'border-box'}}>
            <Button onClick={() => { setMinutes(minutes <= 1 ? 1 : minutes - 1) }}><RemoveIcon/></Button>
            <Badge badgeContent={minutes} color="secondary">Minutes</Badge>
            <Button onClick={() => { setMinutes(minutes + 1) }}><AddIcon/></Button>
            </div>


        </div>
    );
};

img.tp-kbimg {
    height: 300px!important;
}

export default Minute;
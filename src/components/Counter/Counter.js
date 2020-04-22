import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Card from '@material-ui/core/Card';
import './Counter.css'
const Minute = () => {
    const [minutes, setMinutes] = useState(5);
    const [error, setError] = useState(null);
    const handleMinus = () => {
        if (minutes > 1) {
            setMinutes(minutes - 1)
        } else {
            setError("Greater then 0 plz 😡")
        }
    }

    const handleAdd = () => {
        setMinutes(minutes + 1)
        setError(null);
    }


    return (
        <>

            {/* <div>
                <Button onClick={() => { setMinutes(minutes <= 1 ? 1 : minutes - 1) }}>-</Button>

                <p> <Badge badgeContent={minutes} color="secondary">Minutes</Badge></p>
                <Button onClick={() => setMinutes(minutes + 1)}>+</Button>
            </div> */}
           
                <Card>
                <h4 className="custom-padding">Simple Counter </h4>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', padding: '100px', boxSizing: 'border-box' }}>
                    <Button onClick={handleMinus}><RemoveIcon /></Button>
                    <Badge badgeContent={minutes} color="secondary"></Badge>
                    <Button onClick={handleAdd}><AddIcon /></Button>
                </div>
                <div><p>{error}</p></div>
                </Card>
              
        </>
    );
};


export default Minute;
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';


const logout =() =>{
    const [minutes,setMinutes] = useState(5);
    return(
        <div>
        <Button>-</Button>
    <span>{minutes}</span>
        <Button>+</Button>
        </div>
    )
}
export default logout;


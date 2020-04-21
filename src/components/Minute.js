import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './Minute.css'



const Minute = () => {
    const [minutes, setMinutes] = useState(5);
    const [error, setError] = useState(null);
    const [selectItem,setSelectItem] = useState("login");

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
        <div>

            {/* <div>
                <Button onClick={() => { setMinutes(minutes <= 1 ? 1 : minutes - 1) }}>-</Button>

                <p> <Badge badgeContent={minutes} color="secondary">Minutes</Badge></p>
                <Button onClick={() => setMinutes(minutes + 1)}>+</Button>
            </div> */}

            <div style={{ display: 'flex', width: '100%', justifyContent: 'center', padding: '100px', boxSizing: 'border-box' }}>
                <Button onClick={handleMinus}><RemoveIcon /></Button>
                <Badge badgeContent={minutes} color="secondary">Minutes</Badge>
                <Button onClick={handleAdd}><AddIcon /></Button>

            </div>
            <div><p>{error}</p></div>
            <Container>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Button onClick={()=>setSelectItem("login")} className={selectItem==="login"?'active':''}>
                                Login
                                </Button>
                                
                                <Button onClick={()=>setSelectItem("logout")} className={selectItem==="logout"?'active':''}>Logout</Button>
                        </CardContent>
                        <div   className={selectItem==="login"?' login tab-active':'login'}>
                        <input type="text"placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <Checkbox
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                         <Button>Login</Button>
                        </div>


                        <div   className={selectItem==="logout"?' signup tab-active':'signup'}>
                        <input type="text" placeholder="Name " />
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password" />
                        <Checkbox
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                         <Button>Sign Up</Button>
                        </div>
                        
                        
                    </Card>
                </Grid>

            </Container>


        </div>
    );
};


export default Minute;
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import './Login.css';
const Login = () => {
    const [selectItem, setSelectItem] = useState("login");

    const [showPassword, setShowPassword] = useState(true);

    return (
        <>
         
                    <Card>
                        <h4 className="custom-padding">tab and show password option </h4>
                        <CardContent>
                            <Button onClick={() => setSelectItem("login")} className={selectItem === "login" ? 'active' : ''}>
                                Login
                                </Button>

                            <Button onClick={() => setSelectItem("logout")} className={selectItem === "logout" ? 'active' : ''}>Logout</Button>
                        </CardContent>
                        <div className={selectItem === "login" ? ' login tab-active' : 'login'}>
                            <input type="text" placeholder="Email" />
                            <input type={showPassword ? 'text' : 'password'} placeholder="Password" />

                            <Checkbox onChange={() => setShowPassword(!showPassword)} defaultChecked={showPassword}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />Show password
                         <Button>Login</Button>
                        </div>


                        <div className={selectItem === "logout" ? ' signup tab-active' : 'signup'}>
                            <input type="text" placeholder="Name " />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <Checkbox onChange={() => setShowPassword(!showPassword)} defaultChecked={showPassword}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            <br />
                            <Button>Sign Up</Button>
                        </div>


                    </Card>
        

        </>
    );
};

export default Login;
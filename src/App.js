import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Minute from "./components/Minute";
import Todo from './components/Todos/Todo';
import Counter from './components/Counter/Counter';
import  Login from './components/Login/Login';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
function App() {

  const [theme, setTheme] = useState('blue');
  return (
    <div className={theme}>
     
      
      {theme === 'blue' &&  <Button variant="contained" color="secondary"  onClick={() => setTheme("red")} >Secondary</Button>}
      {theme === 'red' && <Button variant="contained" color="primary"  onClick={() => setTheme("blue")} >Primary</Button>}

      {/* {theme === 'light' && <button onClick={() => setTheme("dark")} >Dark</button>}
      {theme === 'dark' && <button onClick={() => setTheme("light")} >Light</button>} */}
      <Container>
        <Grid container  spacing={3}>
          <Grid item xs={4}>
            <Counter />
          </Grid>

          <Grid item xs={4}>
            <Todo />
          </Grid>
          <Grid item xs={4}>
            <Login />
          </Grid>
        </Grid>
      </Container>


    </div>
  );
}

export default App;

import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Minute from "./components/Minute";
import Todo from './components/Todos/Todo';

function App() {

  const [theme,setTheme] = useState('light');
  return (
    <div className={theme}>
      {theme==='light' && <button onClick={ () => setTheme("dark")} >Dark</button> }
      {theme==='dark' && <button onClick={ () => setTheme("light")} >Light</button> }
     
   <Minute/>
   <Todo/>
    </div>
  );
}

export default App;

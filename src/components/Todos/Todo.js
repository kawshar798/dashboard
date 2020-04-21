import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const Todo = () => {
    const [todos,setTodos] = useState([]);
    const [input,setInput] = useState('');

  function generateid(){
      return '_' + Math.random().toString(36).substr(2,9);
  }


    const handleSubmit = () =>{
setTodos(
    (items) => items.concat({
        text:input,
        id:generateid
    })

)
    //clear input field
    setInput('')
    }

    const handleRemove  = (id) =>{
       const newItem =  todos.filter(item=>item.id !== id);
       setTodos(newItem);
    }

    return (
        <div>
            <Container>
                <Grid item xs={4}>
                    <Card>
                        <h2>Simple ToDo with useHook </h2>
                        <Input onChange={ e =>setInput(e.target.value) } placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
                        <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                       
                            { todos.map(item=>(
                                 <List component="nav" aria-label="main mailbox folders" key={item.id}>
                                 <ListItem button >

                                 <ListItemText primary={item.text}/>
                                 <ListItemIcon onClick={()=>handleRemove(item.id)}>
                                    <IconButton>
                                        <DeleteIcon></DeleteIcon>
                                    </IconButton>
                                     </ListItemIcon>
                             </ListItem>
                             </List>
                            ))}
                            
                        
                    </Card>
                </Grid>
            </Container>
        </div>
    );
};

export default Todo;
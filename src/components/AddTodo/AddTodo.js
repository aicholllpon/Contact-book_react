import React, {useState} from 'react';
import './AddTodo.css';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const AddTodo = (props) => {

    let [value1, setValue1] = useState('');
    let [value2, setValue2] = useState('');
    let [value3, setValue3] = useState('');

    function handleClick(){  
        if(!value1.trim() || !value2.trim() || !value3.trim()) return alert('Заполните поля')
        let newObj = {
            name: value1,
            surname: value2,
            phone: value3,
            id: Date.now(),
            status: false
        }
        props.handleInp(newObj)
        setValue1('')
        setValue2('')
        setValue3('')
    }       

    return (
        <div className="inputs">
            <h3 className="h3">Add Contact</h3>
            <input value={value1} onChange={(e) => setValue1(e.target.value)} type="text" placeholder="name" />
            <input value={value2} onChange={(e) => setValue2(e.target.value)} type="text" placeholder="surname"/>
            <input value={value3} onChange={(e) => setValue3(e.target.value)} type="number"placeholder="phone"/>
            <span className="add-btn">
            <Button className="add-btn" 
            onClick={handleClick} 
            variant="outlined" 
            color="primary"
             href="#outlined-buttons">
                 Add
                 </Button></span>
        </div>
    );
};

export default AddTodo;
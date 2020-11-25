import React from 'react';
import './TodoList.css';

const TodoList = (props) => {
    let style = {
        listStyleType: 'none',
        color: 'black'
    }
    return (
        <ul className="ul" style={style}>
            {props.todos.map((item, index) => (

               <li key={item.id} className={item.status ? 'completed': ''}>
                   {item.name} {item.surname} {item.phone}
                   <button onClick={() => props.handleDelete(item.id)}>&times;</button>
                   <button onClick={() => props.handleEdit(index)}>Edit</button>
                   </li>
            ))}
        </ul>
    );
};

export default TodoList;
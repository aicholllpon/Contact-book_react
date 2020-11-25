import React, { useState } from 'react';
import './EditModal.css';

const EditModal = (props) => {
    let [item, setItem] = useState(props.editTodo)

    function handleSave() {
        props.handleSaveTask(item)
    }

    return (
        <div className="main-modal">
            <div className="inner-modal">
                <div className="close">
                    <button onClick={props.handleCloseModal}>&times;</button>
                </div>
                <input
                    onChange={e => {
                        let newObj = { ...item }
                        newObj.name = e.target.value
                        setItem(newObj)
                    }}
                    type="text"
                    value={item.name}
                    className="inp-edit1"
                />
                   <input
                    onChange={e => {
                        let newObj = { ...item }
                        newObj.surname = e.target.value
                        setItem(newObj)
                    }}
                    type="text"
                    value={item.surname}
                    className="inp-edit2"
                />
                   <input
                    onChange={e => {
                        let newObj = { ...item }
                        newObj.phone = e.target.value
                        setItem(newObj)
                    }} 
                    type="number"
                    value={item.phone}
                    className="inp-edit3"
                />
                <button onClick={handleSave} className="btn-save">save</button>
                
            </div>

        </div>
    );
};

export default EditModal;
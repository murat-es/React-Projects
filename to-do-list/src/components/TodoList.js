import React from 'react'
import { MdDone, GiCancel } from 'react-icons/all';
import './TodoList.css';


const TodoList = (props) => {
 

    return (
        <div>

            {props.todo.map((t) => (
                <div className="todo" key={t.id}>
                    {t.isDone ? <div id="todoText" style={{ textDecoration: "line-through" }}>{t.task} </div> :
                        <div id="todoText" style={{ textDecoration: "none" }}>{t.task} </div>}

                    <span id="cancel" onClick={(event) => props.deleteTodoProp(t)}><GiCancel /></span>
                    <span id="done" onClick={(event) => props.isDoneProp(t)}><MdDone /></span>
                </div>
            ))}

        </div>
    )
}

export default TodoList;
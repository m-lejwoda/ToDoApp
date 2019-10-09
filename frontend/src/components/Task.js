import React from 'react';
import './bootstrap.min.css';
const Task = (props) => {
    const {text,date,id,active,important,finishDate}  = props.task
    const style = {
        color: 'red'
    }
    if(active === true ){

    
    return (
        <div>
            <p>
            <strong style={important  ? style : null}>{text}</strong> - do <span>{date} </span>
            <button class="btn btn-danger" onClick={() => props.change(id)}>Zostało zrobione</button>
            <button class="btn btn-danger" onClick={() =>props.delete(id)}>X</button>
            </p>
            
            
        </div>

    );
}else{
    const finish = new Date(finishDate).toLocaleDateString()
    return(
        <div>
            <p>
            <strong >{text}</strong> - (zrobic do {date})
            <br/>
            - potwierdzenie wykonania <span>{finish}
            </span>
            <button class="btn btn-danger"  onClick={() => props.change(id)}>Zostało zrobione</button>
            <button class="btn btn-danger" onClick={() =>props.delete(id)}>X</button>
            </p>
    
    
        </div>
    )}
}
export default Task;
import React from 'react'
import Task from './Task';
const TaskList = (props) => {
    //const tasks=props.tasks.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    const active = props.tasks.filter(task => task.active === true);
    const done =props.tasks.filter(task => !task.active);
    done.sort((a,b)=> {
        return a.finishDate-b.finishDate;
    })




    const activeTasks =active.map(task => <Task key={task.id}
    task={task} delete={props.delete} change={props.change} />) 
    const doneTasks =done.map(task => <Task key={task.id}
        task={task} delete={props.delete} change={props.change} />)
    return (
        <>
        <div className="active">
            <h2>Zadania do Zrobienia ({activeTasks.length})</h2>
            {activeTasks}
        </div>
        <hr />
        <div className="done">
            <h2>Zadania Zrobione ({doneTasks.length})</h2>
            {doneTasks.slice(0,5)}
        </div>
        </>

    );
}
export default TaskList;
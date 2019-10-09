import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AddTask from './AddTask';
import TaskList from './TaskList';



class App extends Component {
    counter = 5;
    state={
        tasks : [
            {
                id: 1,
                text: 'zagrac w wiedzmina',
                date: '2018-02-15',
                important: true,
                active: true,
                finishDate: null
            },
            {
                id: 2,
                text: 'zagrac w darksiders',
                date: '2018-02-13',
                important: true,
                active: true,
                finishDate: null
            },
            {
                id: 3,
                text: 'zagrac w watch dogs',
                date: '2014-02-15',
                important: false,
                active: true,
                finishDate: null
            },
            {
                id: 4,
                text: 'zagrac w farcry',
                date: '2019-02-25',
                important: true,
                active: true,
                finishDate: null
            },
        ]
    }
    deleteTask = (id) => {
        //const tasks=[...this.state.tasks];
        //console.log("delete elementu " + id)
        //const index = tasks.findIndex(task => task.id === id)
        //tasks.splice(index,1)
        //this.setState({
        //    tasks
        //})
        let tasks = [...this.state.tasks];
        tasks=tasks.filter(task=>task.id !== id)
        this.setState({
            tasks
        })

    }
    changeTaskStatus= (id) =>
    {
        let tasks = [...this.state.tasks];
        tasks.forEach(task => {
            if(task.id===id){
                task.active = false;
                task.finishDate = new Date().getTime();
            }
        })
        this.setState({
            tasks
        })

    }
    addTask=(text,date,important)=>{
        const task={
            id: this.counter,
            text: text,//tekst z inputa
            date: date, //tekst z inputa
            important: important, //wartosc z inputa
            active: true,
            finishDate: null
        }
        this.counter++
        this.setState(prevState => ({
            tasks:[...prevState.tasks,task]

        }))
        return true
    }
    render(){
        return (
        <div>
        <h1>To Do App</h1>
            <AddTask add={this.addTask} />
            <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
        </div>

        );
        
    }
}
ReactDOM.render(<App />, document.getElementById('app'))
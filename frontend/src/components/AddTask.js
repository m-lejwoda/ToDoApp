import React, {Component} from 'react'

class AddTask extends Component {
    minDate= new Date().toISOString().slice(0,10);
    state={
        text: '',
        checked: false,
        date: this.minDate
    }
    handleText=(e)=>{
        this.setState({
            text: e.target.value
        })
    }
    handleCheckbox=(e)=>{
        this.setState({
            checked: e.target.checked
        })
    }
    handleDate=(e)=>{
        this.setState({
            date: e.target.date
        })
    }
    handleClick=()=>{
        const{text,checked,date}= this.state;
        const add = this.props.add(text,date,checked);
        if(add){
            this.setState({
                text: '',
                checked: false,
                date: this.minDate
            })
        }
    }
    render(){
        
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    // console.log(maxDate);
        maxDate = maxDate + "-12-31";
        return(
            <div className="form">
                <div>Dodaj Task</div>
                <input type="text" placeholder= "dodaj zadanie" value={this.state.text} onChange={this.handleText}/>
                <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckbox}/>
                <label htmlFor="important">Priorytet</label>
                <br/>
                <label htmlFor="date">Do kiedy zrobic </label>
                <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate}/>
                <button onClick={this.handleClick}>Dodaj</button>
                <hr />
            </div>    
        );
    }
}
export default AddTask

import React, {Component} from 'react';
//other Component imports
import Navbar from './Components/navbar';
import Input from './Components/input';
import Taskcard from './Components/taskcard';
import Quote from './Components/quote';


class App extends Component{
    idVal=1;
    state = {
        tasks : []
    }

    onAddHandler = () => {
        let val = document.getElementById('in_form');
        if(val.value !== ""){
            const updatedTasks = [...this.state.tasks];
            updatedTasks.push({name:val.value,id:this.idVal++, status:false});
            this.setState({tasks : updatedTasks});
        }
        val.value="";
    }
    onCheckedChangeHandler = (event, id) => {
        const index = this.state.tasks.findIndex(p => {
            return p.id === id;
        })
        const task = {...this.state.tasks[index]};
        task.status = task.status?false:true;
        const updateList = [...this.state.tasks];
        updateList[index]=task;
        this.setState({tasks:updateList});
    }

    onDeleteHandler = (id) => {
        const index = this.state.tasks.findIndex(p => {
            return p.id === id;
        })
        const updateList = [...this.state.tasks];
        updateList.splice(index,1);
        this.setState({tasks:updateList});
    }

    enterKeyHandler = (event) => {
        let val = document.getElementById('in_form');
        if(event.key === 'Enter' && val.value !== ""){
            this.onAddHandler();
        }
    }
    render(){
        const TaskCard = this.state.tasks.map(task => {
            return <Taskcard 
            key={task.id}
            name={task.name}
            status={task.status}
            deleteBtn={() => this.onDeleteHandler(task.id)}
            checkedHandler = {(event) => this.onCheckedChangeHandler(event,task.id)} />
        });
        return (
            <>
                <Navbar />
                <Input addBtn={this.onAddHandler} keyPress={this.enterKeyHandler}/>
                <Quote />
                {TaskCard}
            </>
        )
    }
}

export default App;
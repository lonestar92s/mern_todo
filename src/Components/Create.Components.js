import React, { Component } from 'react';

export default class CreateTodo extends Component {
	state = {
			todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
	}


	    onChangeTodoDescription(event) {
        this.setState({
            todo_description: event.target.value
        });
    }

    onChangeTodoResponsible(event) {
        this.setState({
            todo_responsible: event.target.value
        });
    }

    onChangeTodoPriority(event) {
        this.setState({
            todo_priority: event.target.value
        });
    }
    render() {
        return (
            <div>
                <p>Welcome to Create Todo Component!!</p>
            </div>
        )
    }
}
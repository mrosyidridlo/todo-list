import React, { Component } from 'react';
import { addTodo } from '../actions/actions';
import { connect } from 'react-redux';

class AddToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            time: '',
            isfullfiled: false
        }
    }

    handleInput(e){
        this.setState({
            input: e.target.value
        }, () => this.validateData());
    }

    handleTime(e){
        this.setState({
            time: e.target.value
        }, () => this.validateData());
    }
    
    validateData(){
        if (
            this.state.input !== '' &&
            this.state.time !== ''
        ) {
            this.setState({
                isfullfiled: true
            })
        } else {
            this.setState({
                isfullfiled: false
            })
        }
    }

    submit(){
        const text = {
            todo:this.state.input,
            time:this.state.time
        };

        this.props.simpan(text);

        this.setState({
            input: '',
            time: ''
        })
    }

    render(){
        return (
            <div>
                <h3>To Do List</h3>
                <input 
                    type="text"
                    placeholder="to do"
                    onChange={(e) => this.handleInput(e)}
                    value={this.state.input}
                    />
                <br/>
                <input 
                    type="text"
                    placeholder="time"
                    onChange={(e) => this.handleTime(e)}
                    value={this.state.time}
                    />
                <br/>
                <button onClick={() => this.submit()}
                disabled={ !this.state.isfullfiled}>Add To Do</button>
            </div>
        )
    }
}

const propsRedux = dispatch => ({
    simpan: text => dispatch(addTodo(text))
})

// const stateRedux = () => {};

export default connect(null, propsRedux)(AddToDo);
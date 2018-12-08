import React, { Component } from 'react';

class AddTodo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content : '',
        }
    }

handleChange = (event) => {

this.setState({
    content : event.target.value
})

}

handleSubmit = (event) => {
event.preventDefault();

console.log(this.state.content);

this.props.addData(this.state);
//after submitting data we make input field null;
this.setState({
    content : '',
})
}

render() {
    return(
        <div className="container">

<form onSubmit={this.handleSubmit}>
<label>Add New todo:</label>
<input type="text" onChange={this.handleChange} value={this.state.content}/>
</form>
        </div>
    )
}

}

export default AddTodo;
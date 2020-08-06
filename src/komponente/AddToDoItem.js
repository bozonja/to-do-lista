import React, { Component } from 'react'

class AddToDoItem extends Component {

  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addToDoItem(this.state.title);
    this.setState({title: ''})
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  render() {
    return (
      <form onSubmit={this.onSubmit} className="d-flex">
        <input 
          type="text" 
          name="title" 
          placeholder="Type your todo thing here"
          style={{flex: '10'}}
          value={this.state.title}
          onChange={this.onChange}  
        />
        <input type="submit" value="submit" style={{flex: '2'}} className="btn"/>
      </form>
    ) 

  }
}

export default AddToDoItem;
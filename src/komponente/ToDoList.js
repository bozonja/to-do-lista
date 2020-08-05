import React, { Component } from 'react';

class ToDoList extends Component {
  render() {
    return this.props.getToDoListData.map((toDoItem) => (
      <h3>{toDoItem.naslov}</h3>
    ));
  }
}

export default ToDoList;
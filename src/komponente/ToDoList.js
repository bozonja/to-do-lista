import React, { Component } from 'react';
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  render() {
    return this.props.getToDoListData.map((toDoItemData) => (
      <ToDoItem toDoItemData={toDoItemData}/>
    ));
  }
}

export default ToDoList;
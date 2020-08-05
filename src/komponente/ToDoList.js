import React, { Component } from 'react';
import ToDoItem from "./ToDoItem";
import PropTypes from "prop-types";

class ToDoList extends Component {
  render() {
    return this.props.getToDoListData.map((toDoItemData) => (
      <ToDoItem  key={toDoItemData.id} toDoItemData={toDoItemData}/>
    ));
  }
}

ToDoList.propTypes = {
  getToDoListData: PropTypes.array.isRequired
}

export default ToDoList;
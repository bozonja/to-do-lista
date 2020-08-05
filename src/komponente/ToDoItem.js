import React, {Component} from "react";

class ToDoItem extends Component {

  render() {
    return (
      <p>{this.props.toDoItemData.naslov}</p>
    )
  }
}

export default ToDoItem;
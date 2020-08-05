import React, {Component} from "react";
import PropTypes from "prop-types";

class ToDoItem extends Component {

  render() {
    return (
      <p>{this.props.toDoItemData.naslov}</p>
    )
  }
}

ToDoItem.propTypes = {
  toDoItemData: PropTypes.object.isRequired
}

export default ToDoItem;
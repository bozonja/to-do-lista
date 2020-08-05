import React, {Component} from "react";
import PropTypes from "prop-types";

class ToDoItem extends Component {

  ifCompletedAddLineThrough = () => {
    return {
      textDecoration: this.props.toDoItemData.completed ?
      'line-through' : 'none'
    }
  }

  render() {
    return (
      <div style={this.ifCompletedAddLineThrough()}>
        <p>
          {this.props.toDoItemData.title}
        </p>
      </div>
    )
  }
}

ToDoItem.propTypes = {
  toDoItemData: PropTypes.object.isRequired
}

export default ToDoItem;
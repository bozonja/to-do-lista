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
    const {id, title} = this.props.toDoItemData;
    return (
      <div style={this.ifCompletedAddLineThrough()} className="todo-item">
        <div className="d-flex align-items-center">
          <input type="checkbox" onChange={this.props.toggleCompleted.bind
          (this, id)} /> {''}
          {title}
          <button 
            onClick={this.props.delToDoItem.bind(this, id)}
            className="todo-item-button">x</button>
        </div>
      </div>
    )
  }
}

ToDoItem.propTypes = {
  toDoItemData: PropTypes.object.isRequired
}

export default ToDoItem;
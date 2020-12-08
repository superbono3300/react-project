import React, {Component} from 'react';

class Control extends Component {
  render() {
    return(
      <div>
        <ul className="todo_ul">
          <li className="todo_li">
            <a 
              href="/todo/create"
              onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('create');
              }.bind(this)}
            >
              CREATE
            </a>
          </li>
          <li className="todo_li">
            <a 
              href="/todo/update"
              onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('update');
              }.bind(this)}
            >
              UPDATE
            </a>
          </li>
          <li className="todo_li">
            <input
              type="button"
              value="DELETE"
              className="deleteBtn"
              onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('delete');
              }.bind(this)}
            />
          </li>
        </ul>
      </div>
    )
  }
}

/*
<li className="todo_li">
            <input
              type="button"
              value="DELETE"
              className="deleteBtn"
              onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('delete');
              }.bind(this)}
            />
          </li>
*/

export default Control;
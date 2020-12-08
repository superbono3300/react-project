import React, {Component} from 'react';

class Main extends Component {
  render() {

    var lists = [];
    var i = 0;
    var todoItems = this.props.todoItems;
    
    while(i<todoItems.length) {
      lists.push(
        <li key={todoItems[i].id}>
          <a
            href={"/todo/"+todoItems[i].id}
            onClick={function(e){
              e.preventDefault();
              this.props.onParamItem(e.target.dataset.id);
            }.bind(this)}
            data-id={todoItems[i].id}
            className="main_item"
          > 
            <span className="subject">NO : </span>{todoItems[i].id}<span className="space"/>
            <span className="subject">닉네임 : </span>{todoItems[i].nickName}<span className="space"/>
            <span className="subject">제목 : </span>{todoItems[i].title}<span className="space1"/>
            <span className="subject">할일 : </span>{todoItems[i].desc}<span className="space"/>
          </a>
        </li>
      );
      i++;
    }

    return (
      <div className="main_container">
        <ul className="main_ul">
          {lists}
        </ul>
      </div>
    );
  }
}

export default Main;

/*
            <input
              type="button"
              value="X"
              className="deleteBtn"
              onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('delete');
              }.bind(this)}
            />
            */
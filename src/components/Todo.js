import React, {Component} from 'react';
//import {NavLink, Route} from 'react-router-dom';
//import Topic from './Topic';
import Header from '../todoComponents/Header';
import Control from '../todoComponents/Control';
import Main from '../todoComponents/Main';
import CreateContents from '../todoComponents/CreateContents';
import UpdateContents from '../todoComponents/UpdateContents';
import ckimg from '../img/checklist.png';

/*
var contents = [
  {id:1, title:'HTML', desc: 'HTML은 ...입니다.'},
  {id:2, title:'CSS', desc: 'CSS는 ...입니다.'},
  {id:3, title:'JavaScript', desc: 'JavaScript는 ...입니다.'},
]
*/


class Todo extends Component {
  constructor(props) {
    super(props);
    this.max_todo_id = 2;
    this.state = {
      todoTitle:'Todo List',
      mode:'read',
      selected_item_id: 1,
      todoContents:[
        {id:1, nickName:"user01", title:"test01", desc:"test입니다.test입니다.test입니다.test입니다."},
        {id:2, nickName:"user02", title:"test02", desc:"testsf입니다.test입니다.test입니다.test입니다."}
      ]
    }
  }

  getReadTodoItem() {
    var i = 0;
    while (i < this.state.todoContents.length) {
      var data = this.state.todoContents[i];
      if (data.id === this.state.selected_item_id) {
        //_title = data.title;
        //_desc = data.desc;
        return data;
        //break;
      }
      i++;
    }
  }

  getTodoItemContnets() {
    var _article = null;

    if(this.state.mode === 'read') {
      
    } else if (this.state.mode === 'create') {
      _article = <CreateContents
                  onSubmit={function(_nick,_title,_desc){
                    console.log("원본",this.state.todoContents[1].desc);
                    this.max_todo_id = this.max_todo_id+1;
                    console.log(this.max_todo_id);
                    var _todoItem = Array.from(this.state.todoContents);
                    console.log("복사본",_todoItem);
                    _todoItem.push(
                      {
                        id: this.max_todo_id,
                        nickName: _nick,
                        desc: _desc,
                        title: _title     
                      }
                    );

                    console.log(_todoItem);

                    this.setState({
                      todoContents:_todoItem,
                      mode:'read',
                      selected_item_id: this.max_todo_id
                    })

                  }.bind(this)}
                 >   
                 </CreateContents>
    } else if (this.state.mode === 'update') {
      var todoItem = this.getReadTodoItem();

      console.log(todoItem);
      _article = <UpdateContents
                    data = {todoItem}
                    onSubmit = {
                      function(_id,_title,_desc,_nick){
                        var _todoItem = Array.from(this.state.todoContents);

                        //console.log(_todoItem);
                        var i = 0;
                        while(i < _todoItem.length) {
                            if(_todoItem[i].id === _id) {
                              _todoItem[i] = {
                                  id:_id, 
                                  title:_title,
                                  desc:_desc,
                                  nickName:_nick
                                  };
                              break;
                            }
                            i++;
                        }
                        this.setState({
                            todoContents:_todoItem,
                            mode:'read'
                        });
                    }.bind(this)}
                    
                 >
                 </UpdateContents>
    }
    return _article;
  }

  render() {
    return (
      <div className="todo_container"> 
        <div className="todo_logo">
          <img src={ckimg} alt="ckimg" />
          <h2>{this.state.todoTitle}</h2>
        </div>
        <Header></Header>
        <Control
          onChangeMode={function(_mode){
            //console.log(_mode)
            var mode_ = _mode
            if(mode_ === 'delete') {
              if(window.confirm('정말 삭제하시겠습니까?')) {
                var todoItem = Array.from(this.state.todoContents);
                var i = 0;
                while(i<todoItem.length) {
                  if(todoItem[i].id === this.state.selected_item_id) {
                    todoItem.splice(i,1);
                    break;
                  }
                  i++;
                }
              }
              this.setState({
                mode:'read',
                todoContents:todoItem
              });
            } else {
              this.setState({
                mode:_mode
              })
            }
          }.bind(this)}
        ></Control>
        <Main
          todoItems={this.state.todoContents}
          onParamItem={function(id){
            this.setState({
              selected_item_id: Number(id),
              mode:'read'
            })
          }.bind(this)}
        >
        </Main>
        {this.getTodoItemContnets()}
      </div>
    );
  }
}

/*
onChangeMode={function(_mode){
            //console.log(_mode)
            var mode_ = _mode
            if(mode_ === 'delete') {
              if(window.confirm('정말 삭제하시겠습니까?')) {
                var todoItem = Array.from(this.state.todoContents);
                var i = 0;
                while(i<todoItem.length) {
                  if(todoItem[i].id === this.state.selected_item_id) {
                    todoItem.splice(i,1);
                    break
                  }
                  i++;
                }
              }
              this.setState({
                mode:'read',
                todoContents:todoItem
              });
            } else {
              this.setState({
                mode:_mode
              })
            }
          }.bind(this)}
*/



/*
  var lists = [];
  for(var i=0;i<contents.length;i++) {

    lists.push(
      <li key={contents[i].id} >
        <NavLink
          to={"/todo/"+contents[i].id}
        >
          {contents[i].title}
        </NavLink>
      </li>
    );
  }

  
  return (
    <div className="todo_container">
      <div className="todo_logo">
        <img src={ckimg} alt="ckimg" />
        <h2>ToDo List</h2>
      </div>
      <Header></Header>
      <ul>
        {lists}
      </ul>
      
      <article id="topic_Contents">
        <Route
          path="/topics/:topics_id"
        >
          <Topic></Topic>
        </Route>
      </article>
    </div>
  );
}
*/
export default Todo;
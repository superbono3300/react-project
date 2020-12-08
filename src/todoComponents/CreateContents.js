import React, {Component} from 'react';


class CreateContents extends Component {
  render() {
    return (
      <article className="create_container">
      <form action="/create_process" 
            method="post"
            onSubmit={function(e){
              e.preventDefault();
              //console.log(e.target.title.value);
              //console.log(e.target.desc.value);
              //debugger;
              this.props.onSubmit(
                e.target.title.value, 
                e.target.nickName.value,
                e.target.desc.value
              );
              //console.log(e.target.desc.value);
            }.bind(this)}
      >
        <h2>Todo List 추가하기</h2>
        <p>
          <input 
            type="text" 
            name="nickName" 
            placeholder="닉네임을 입력하세요." 
            className="nic_input" />
        </p>
        <p>
          <input 
            type="text" 
            name="title" 
            placeholder="제목을 입력하세요." 
            className="title_input" />
        </p>
        <p>
          <textarea 
            name="desc" 
            placeholder="내용을 입력하세요." 
            className="desc_box" />
        </p>
        <p>
          <input
              type="reset"
              className="reset_btn"
              value="취소"
            />
            <input
              type="submit"
              className="submit_btn"
              value="완료"
            />
        </p>
      </form>
    </article>
    );
  }
}

export default CreateContents;

/*
<div className="create_container">
        <form
          action="/create-process"
          method="post"
          onSubmit={function(e){
            e.preventDefault();
            this.props.onSubmit(
                e.target.title.value, 
                e.target.desc.value,
                e.target.nickName.value
              );
              
          }.bind(this)}
        >
          <h2>Todo List 추가하기</h2>
          <p> 
            <input 
              type="text"
              name="nickName"
              className="nic_input" 
              placeholder="닉네임을 입력하세요." 
            />
          </p>
          <p> 
            <input 
              type="text"
              name="title"
              className="title_input" 
              placeholder="제목을 입력하세요." 
            />
          </p>
          <p> 
            <textarea
              name="desc" 
              className="desc_box"   
              placeholder="내용을 입력하세요." 
            />
          </p>
          <p> 
            <input
              type="reset"
              className="reset_btn"
              value="취소"
            />
            <input
              type="submit"
              className="submit_btn"
              value="완료"
            />
          </p>
        </form>
      </div>
      */
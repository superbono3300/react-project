import React, {Component} from 'react';


class CreateContents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      nickName: this.props.data.nickName,
      desc: this.props.data.desc
    }
  }
  /*
  inputFormHandler(e) {
    this.setState({
      //title: e.target.value
      [e.target.name]: e.target.value
    });
  }
  */
  render() {
    
    return (
      <div className="update_container">
        <form
          action="/update_process"
          method="post"
          onSubmit={function(e){
            e.preventDefault();
            this.props.onSubmit(
              this.state.id,
              this.state.nickName,
              this.state.title,
              this.state.desc
              );
          }.bind(this)}
        >
          <h2>Todo List 수정하기</h2>
          <p> 
            <input 
              type="text"
              readOnly
              name="id"
              className="idBox"
              value={this.state.id}
            />
          </p>
          <p> 
            <input 
              type="text"
              name="nickName"
              className="nic_input" 
              placeholder="닉네임을 입력하세요." 
              value={this.state.nickName}
              onChange={function(e){
                this.setState({
                  nickName : e.target.value
                });
              }.bind(this)}
            />
          </p>
          <p> 
            <input 
              type="text"
              name="title"
              className="title_input" 
              placeholder="제목을 입력하세요." 
              value={this.state.title}
              onChange={function(e){
                this.setState({
                  title : e.target.value
                });
              }.bind(this)}
            />
          </p>
          <p> 
            <textarea
              className="desc_box"
              name="desc" 
              placeholder="내용을 입력하세요." 
              value={this.state.desc}
              onChange={function(e){
                this.setState({
                  desc : e.target.value
                });
              }.bind(this)}
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
    );
  }
}

export default CreateContents;
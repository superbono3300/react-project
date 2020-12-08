import React, {Component} from 'react';
import ResumeContent from '../contactComponents/ResumeContent'
import SocialContent from '../contactComponents/SocialContent'
import ContentHome from '../contactComponents/ContentHome'
import CareerContent from '../contactComponents/CareerContent'
import AboutContent from '../contactComponents/AboutContent'
import OtherContent from '../contactComponents/OtherContent'

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'home'
    } 
  }

  getReadMode() {
    if(this.state.mode === 'home') {
      var _article = <ContentHome></ContentHome>
    } else if (this.state.mode === 'resume') {
      _article = <ResumeContent></ResumeContent>
    } else if (this.state.mode === 'social') {
      _article = <SocialContent></SocialContent>
    } else if (this.state.mode === 'career') {
      _article = <CareerContent></CareerContent>
    } else if (this.state.mode === 'about') {
      _article = <AboutContent></AboutContent>
    } else if (this.state.mode === 'other') {
      _article = <OtherContent></OtherContent>
    }
    return _article;
  }

  render() {     

      return (
      <div className="contact_container">
        <div className="ct_box">
          <ul className="ct_ul">
            <li>
              <a
                href={"/contact"}
                onClick={function(e){
                  e.preventDefault();
                  this.setState({
                    mode: 'resume'
                  })
                }.bind(this)}
              >이력사항</a>
            </li>
            <li>
              <a
                href={"/contact"}
                onClick={function(e){
                  e.preventDefault();
                  this.setState({
                    mode: 'social'
                  })
                }.bind(this)}
              >사회경험</a>
            </li>
            <li>
              <a
                href={"/contact"}
                onClick={function(e){
                  e.preventDefault();
                  this.setState({
                    mode: 'career'
                  })
                }.bind(this)}
              >경력사항</a>
            </li>
            <li>
              <a
                href={"/contact"}
                onClick={function(e){
                  e.preventDefault();
                  this.setState({
                    mode: 'about'
                  })
                }.bind(this)}
              >자기소개</a>
            </li>
            <li>
              <a
                href={"/contact"}
                onClick={function(e){
                  e.preventDefault();
                  this.setState({
                    mode: 'other'
                  })
                }.bind(this)}
              >기타사항</a>
            </li>
          </ul>
          <div className="ct_content">
            {this.getReadMode()}
          </div>
        </div>
      </div>
    );
  }
}
  

export default Contact;
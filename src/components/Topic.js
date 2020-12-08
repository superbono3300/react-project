import React from 'react';
//import {NavLink, Route, Switch} from 'react-router-dom';
import {useParams} from 'react-router-dom';

function Topic() {
  

  var contents = [
    {id:1, title:'HTML', desc: 'HTML은 ...입니다.'},
    {id:2, title:'CSS', desc: 'CSS는 ...입니다.'},
    {id:3, title:'JavaScript', desc: 'JavaScript는 ...입니다.'},
  ]
  
  var params = useParams();
  var topic_id = params.topics_id;
  var selected_topic = {
    title:"NotFoundData!",
    desc:"NotFoundData!"
  }

  //console.log(params);

  for(var i=0;i<contents.length;i++) {

    if(contents[i].id === Number(topic_id)) {
      selected_topic = contents[i]; 
      break;
    }

  }

  return (
    <div>
      <h2>{selected_topic.title}</h2>
      <p>{selected_topic.desc}</p>
    </div>
  );
}

export default Topic;
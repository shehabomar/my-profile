import React from 'react';
import {MediaSection,Social,Icon,SocialDesc,Span,SpanInfo2} from './style.js';
import axios from 'axios';
class SocialMedia extends React.Component {
  state={
    social:[]
  }
  componentDidMount=()=>{
    axios.get('js/data.json')
    .then( res=> 
      { this.setState({social:res.data.social }
        )}); 
  }
  render(){
    const {social}=this.state;
    const socialList= social.map( (socialItem)=>{
      return(
        <Social item ={socialItem.id}key={socialItem.id}>
            <Icon className={socialItem.icon}></Icon>
            <SocialDesc>
                <Span>{socialItem.title}</Span>
                <SpanInfo2>{socialItem.body}</SpanInfo2>
            </SocialDesc>
        </Social>
      )
    })
    return (
      <MediaSection> 
        {socialList}
      </MediaSection>
    );
  }
}
export default SocialMedia;
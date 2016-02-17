import React from 'react';
import { Panel } from 'react-bootstrap';
import HttpLink from './HttpLink.jsx';
import EmailLink from './EmailLink.jsx';
import PhoneLink from './PhoneLink.jsx';

class LinksDemo extends React.Component {
  constructor(){
    super();
  }

  render(){

    return (
      <Panel header="Links Helpers">
        <div><HttpLink displayText="EMB Engineering" isHttps value="github.com/embengineering" /></div>
        <div><EmailLink value="emorales0024@gmail.com" /></div>
        <div><PhoneLink displayText="1.777.777.7777" value="17777777777" /></div>
      </Panel>
    );
  }
}

export default LinksDemo;

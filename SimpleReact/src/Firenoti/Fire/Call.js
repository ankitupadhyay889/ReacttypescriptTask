import React, { Component } from 'react'
import {getMessaging} from "firebase/messaging"

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={}
  }

  componentDidMount(){
    const messaging = getMessaging();
    messaging.requestPermission().then(() => {
        return messaging.getToken()
    }).then(token => {
        console.log("Token is : ",token );
    }).catch(() => {
        console.log("error in code.");
    })
  }

  render() {
    return (
      <div>Push Notification</div>
    )
  }
}

import React, { Component } from 'react'
import firebase from './firebase';

export default class Firecall extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        const messaging = firebase.messaging()
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
      <div>
          <p>Push</p>
      </div>
    )
  }
}

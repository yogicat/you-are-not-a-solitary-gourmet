import React, { Component } from 'react'

export default class GoogleLoginButton extends Component {
  handleSignInClick = () => {
    const { firebase } = window
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  render () {
    return (
      <button type="button" onClick={this.handleSignInClick}>SignIn with google</button>
    )
  }
}

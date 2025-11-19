import React, { Component } from 'react'

export default class ContactClass extends Component {
  render() {
    return (
      <div>
        <h4>Contact</h4>
        <h1>The contact name is {this.props.n}</h1>
      </div>
    )
  }
}

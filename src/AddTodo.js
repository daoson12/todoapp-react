import React, { Component } from 'react'

export default class AddTodo extends Component {

  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state)
  }

  render() {
    return (
      <div className=''>
        <form onSubmit={this.handleSubmit}>


          <div className="input-field s6">
          <label htmlFor="content">Add new todo:</label>
            <input placeholder="Enter content" id="content" type="text" className="validate" onChange={this.handleChange} />
          </div>
          <button type='submit' className="waves-effect waves-light btn">button</button>

        </form>
      </div >
    )
  }
}


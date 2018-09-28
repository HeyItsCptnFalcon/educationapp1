import React, { Component } from 'react';
import { ReactPlayer } from 'react-player';
import { connect } from 'react-redux';


class Userspage extends Component {
  state = {  }

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0
    })
  }

  onUrlChange = e => {
    this.setState({
      url: e.target.value
    })
  }


  formSubmit = e => {
    e.preventDefault();


    let newLink = [...this.state.links, this.state.url]
    this.setState({
      links: newLink,
      url: ''
    })
  }




  render() {
    return (
      <div className='container'>
        <div className='page-header'>
          <p>This is our user page</p>
        </div>
        <form onSubmit={this.formSubmit}>
          <div className='form-group'>
            <label htmlFor="userUrl">Paste the URL below</label>
            <input  />
          </div>
          <button type='submit' className="btn btn-dark">Submit</button>
        </form>
        <div className='col-md react-player'>
          <div className='row'>
            {this.state.links.map(url => (
              <ReactPlayer
                url={url}
                width='210px'
                height='148px'

              />
            ))}
          </div>
        </div>

      </div>
    );
  }
}
 
export default Userspage;
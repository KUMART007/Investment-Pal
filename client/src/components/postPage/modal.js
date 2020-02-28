import React, { Component } from 'react';
import API from "../UserFunctions";

class MakePost extends Component {
  constructor() {
    super()
    this.state = {
      user_name: '',
      title: '',
      body: '',
      likes: 0,
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    const post = {
      user_name: this.state.user_name,
      title: this.state.title,
      body: this.state.body,
      likes: this.state.likes
    }
    API.post(post).then(res => {
    })
  }

  refreshPage() {
    window.location.reload(false);
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Create Post
         </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Post</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="user_name">Username</label>
                    <input type="text"
                      className="form-control"
                      name="user_name"
                      placeholder="Enter Username"
                      minLength="2"
                      value={this.state.user_name}
                      onChange={this.onChange}
                      required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text"
                      className="form-control"
                      name="title"
                      placeholder="Enter title"
                      minLength="2"
                      value={this.state.title}
                      onChange={this.onChange}
                      required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea style={{ height: '100px' }} type="text"
                      className="form-control"
                      name="body"
                      minLength="5"
                      placeholder="Say Something Here"
                      value={this.state.body}
                      onChange={this.onChange}
                      required />
                  </div>
                  <button onClick={this.refreshPage} type="submit"
                    className="btn btn-lg btn-primary btn-block" data-toggle="modal" data-target="#exampleModal">
                    Post
               </button>
                  <button type="submit"
                    className="btn btn-lg btn-primary btn-block" data-dismiss="modal">
                    Cancel
               </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MakePost;
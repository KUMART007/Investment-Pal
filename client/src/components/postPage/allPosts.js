import React from 'react';
import axios from 'axios';

export default class Posts extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`/api/v1/allposts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
        console.log(posts)
      })
  }

  render() {
    return (
      <ul>
        { this.state.posts.map(post => <li key={post.pid}>{post.title}</li>)}
      </ul>
    )
  }
}

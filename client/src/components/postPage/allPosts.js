import React from 'react';
import axios from 'axios';
import {
  Card, CardText, CardBody,
  Button, CardHeader
} from 'reactstrap';
import './postpage.css'

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
      <div className="posts">
        {this.state.posts.map(post =>
          <div className="pad" key={post.pid}>
            <Card> 
              <CardHeader tag='h3'>{post.title}</CardHeader>
              <CardBody>
                <CardText>{post.body}</CardText>
                <Button>like</Button>
              </CardBody>
            </Card>
          </div>
        )}
      </div>
    )
  }
}

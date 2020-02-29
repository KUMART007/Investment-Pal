import React from 'react';
import axios from 'axios';
import Buttons from './like'
import {
  Card, CardText, CardBody,
  CardHeader
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
            <Card className="cardPost">
              <CardHeader className="title-text1" tag='h3'>{post.title}</CardHeader>
              <CardBody className="cardBodyPost">
                <div className='lineup'>
                  <h6 className="inline right">Posted by: </h6>
                  <h2 className="inline right">{post.user_name}</h2>
                </div>
                <br />
                <CardText className="cardText">{post.body}</CardText>
                <Buttons />
              </CardBody>
            </Card>
          </div>
        )}
      </div>
    )
  }
}

import React from 'react';
import { Container, Jumbotron, Card, CardBody } from 'reactstrap';
import MakePost from './modal';
import Posts from './allPosts';
import './postpage.css'

function PostPage() {
    return (
        <div className="wide-container1">
            <Jumbotron className="row post-container">
                <div className="col-sm-12 post-div">
                    <Container className="post-container2" style={{ margin: 'auto' }}>
                        <div className="text-left mb-2">
                            <MakePost />
                        </div>
                    </Container>
                    <Container className="post-container2" style={{ margin: 'auto' }}>
                        <Card>
                            <CardBody className="card3">
                                <Posts />
                            </CardBody>
                        </Card>
                    </Container>
                </div>
            </Jumbotron>
        </div>
    );
}

export default PostPage;
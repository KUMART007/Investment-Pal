import React from 'react';
import { Container, Jumbotron, Card, CardBody } from 'reactstrap';
import MakePost from './modal';
import Posts from './allPosts';
import './postpage.css'

function PostPage() {
    return (
        <div>
            <Jumbotron className="row">
                <div className="col-sm-12">
                <Container style={{margin: 'auto'}}>
                    <div className="text-left mb-2">
                        <MakePost />
                    </div>
                    </Container>
                    <Container style={{margin: 'auto'}}>
                    <Card>
                        <CardBody>
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
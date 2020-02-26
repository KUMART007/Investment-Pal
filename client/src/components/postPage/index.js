import React from 'react';
import { Container, Jumbotron, Card, CardBody } from 'reactstrap';
import MakePost from './modal';
import Posts from './allPosts';

function PostPage() {
    return (
        <div>
            <Jumbotron>
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
            </Jumbotron>
        </div>
    );
}

export default PostPage;
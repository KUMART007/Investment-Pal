import React from 'react';
import { Container, Jumbotron, Card, CardBody } from 'reactstrap';
import PostModal from './modal';
import Posts from './allPosts';

function PostPage() {
    return (
        <div>
        <Jumbotron>
            <div className="text-center">
            <PostModal />
            </div>
            <Container className="allPosts">
            </Container>
        </Jumbotron>

        <Jumbotron>
                <Container>
                <Card>
                    <CardBody>
                    <Posts/>
                    </CardBody>
                </Card>

            </Container>
        </Jumbotron>
        </div>
    );
}

export default PostPage;
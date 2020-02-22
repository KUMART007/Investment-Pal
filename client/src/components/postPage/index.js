import React from 'react';
import { Container, Jumbotron, Card, CardBody } from 'reactstrap';
import PostModal from './modal';

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
                        <p></p>
                    </CardBody>
                </Card>

            </Container>
        </Jumbotron>
        </div>
    );
}

export default PostPage;
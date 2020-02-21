import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import PostModal from './modal';

function PostPage() {
    return (
        <Jumbotron>
            <div className="text-center">
            <PostModal />
            </div>
            <Container className="allPosts">
            </Container>
        </Jumbotron>

    );
}

export default PostPage;
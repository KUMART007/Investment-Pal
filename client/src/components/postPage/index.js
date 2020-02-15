import React from 'react';
import { Button, Jumbotron, Container} from 'reactstrap';
import PostModal from 'components/postPage/modal';

function PostPage() {
    return (
        <Jumbotron>
            <PostModal />
            <Container ClassName="allPosts">
            </Container>
        </Jumbotron>

    );
}

export default PostPage;
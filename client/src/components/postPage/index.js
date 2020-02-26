import React from 'react';
import { Container, Jumbotron, Card, CardBody } from 'reactstrap';
import MakePost from './modal';
import Posts from './allPosts';
// import ToggleBox from './toggle'

function PostPage() {
    return (
        <div>
            {/* <Jumbotron style={{height: '100px', width: '30%'}}> */}
                <div className="text-left">
                    {/* <ToggleBox> */}
                        <MakePost />
                    {/* </ToggleBox> */}
                </div>
                {/* <Container className="allPosts"> */}
                {/* </Container> */}
            {/* </Jumbotron> */}

            <Jumbotron>
                <Container>
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
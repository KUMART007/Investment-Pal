import React from 'react';
import { Container, Jumbotron } from 'reactstrap';

function Home() {
    return (
        <Jumbotron className="bg-success">
            <Container className="text-center text-white">
                <h1>Welcome to InvestmentPal</h1>
                <hr />
                <h3>The forum that helps you with all your investment decisions</h3>
            </Container>
        </Jumbotron>
    );
}

export default Home;
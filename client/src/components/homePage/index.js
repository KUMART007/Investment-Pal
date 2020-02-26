import React from 'react';
import { Container, Jumbotron, Row, Col} from 'reactstrap';
import './jumbotron.css'

function Home() {
    return (
        <div>
        <Jumbotron className="bg-success">
            <Container className="text-center text-white">
                <h1>Welcome to InvestmentPal</h1>
                <hr />
                <h3>The forum that helps you with all your investment decisions</h3>
            </Container>
        </Jumbotron>

      
        <Row className="container" >
        <Col lg="6">
        <div className="card">
            <img src="https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__340.jpg" className="card-img-top" alt="stock image" />
            <div className="card-body">
                <p className="card-text">Learn how you can grow your investments</p>
                </div>
        </div>
        </Col>
        <Col lg="6">
        <div className="card">
            <img src="https://img.etimg.com/thumb/width-640,height-480,imgsize-95463,resizemode-1,msid-64758447/six-investment-options-for-your-post-retirement-needs.jpg" className="card-img-top" alt="stock image" />
            <div className="card-body">
                <p className="card-text">Get answers to your most important decisions</p>
                </div>
        </div>
        </Col>
        </Row>
        <Row className="container" id="bottomRow">
        <Col lg="6">
        <div className="card">
            <img src="https://store-images.s-microsoft.com/image/apps.15035.13718473831208693.d5dce06b-a7b1-4d73-a0c5-f14168621c9c.da833820-5775-40e9-9713-300eb1dff286?mode=scale&q=90&h=1080&w=1920" className="card-img-top" alt="stock image" />
            <div className="card-body">
                <p className="card-text">Industry experts guiding you along the way</p>
                </div>
        </div>
        </Col>
        <Col lg="6">
        <div className="card">
            <img src="https://www.investors.com/wp-content/uploads/2019/01/Stock-VRdata-04-adobe.jpg" className="card-img-top" alt="stock image" />
            <div className="card-body">
                <p className="card-text">Build a portfolio driven on success</p>
                </div>
        </div>
        </Col>
        </Row>
        </div>
    
    );
}

export default Home;
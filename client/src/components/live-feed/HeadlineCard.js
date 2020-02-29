import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import "./feed.css";


import { AllHtmlEntities } from 'html-entities';

const entities = new AllHtmlEntities();

export default class RetrieveHeadlines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headlines: []
        }
    }

    componentDidMount() {
        axios.get("/api/v1/livefeed")
            .then(res => {
                const headlines = res.data;
                this.setState({ headlines });
            })
    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <div className="cardsize">
                        <Card className="card1" align="center" width={1}>
                            <CardContent style={{ padding: '0px' }}>
                                <h1 className="cardHeadline">Headlines source: </h1>
                                <h4 className="cardContent"><a href="https://soundmindinvesting.com/articles" target="_blank" rel="noopener noreferrer">https://soundmindinvesting.com/articles</a></h4>
                            </CardContent>
                        </Card>
                    </div>
                    <br />
                    <div>
                        {this.state.headlines.map(headline =>
                            <Box p="5px" mt="15px" key={headline.id}>
                                <Card>
                                    <CardContent>
                                        <div>
                                            <h2 className="headlineBody1">{entities.decode(headline.title)}</h2>
                                            <h3 className="headlineBody2">{entities.decode(headline.summary)}</h3>
                                            <h4 className="headlineBody3">
                                                <a href={headline.link} target="_blank" rel="noopener noreferrer">Continue Reading</a>
                                            </h4>
                                            <br />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Box>
                        )}
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
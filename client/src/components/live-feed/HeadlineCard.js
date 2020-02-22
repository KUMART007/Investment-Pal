import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';


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
        axios.get("http://localhost:3001/api/v1/livefeed")
            .then(res => {
                const headlines = res.data;
                this.setState({ headlines });
            })
    }

    render() {
        return (
            <div>
                <React.Fragment>
                <div>
                <Card align="center" width={1}>
                <CardContent>
                <h1>Headlines source: </h1>
                <h4><a href="https://soundmindinvesting.com/articles">https://soundmindinvesting.com/articles</a></h4>
                </CardContent>
                </Card>
                </div>
                <br />
                <div>
                    {this.state.headlines.map(headline =>
                        <Box mt="15px" key={headline.id}>
                        <Card>
                        <CardContent>
                        <div >
                                <h2>{entities.decode(headline.title)}</h2>
                                <h3>{entities.decode(headline.summary)}</h3>
                                <h4>
                                    <a href={headline.link}>Continue Reading</a>
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
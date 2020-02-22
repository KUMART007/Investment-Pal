import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';



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
                console.log(headlines);
            })
    }

    render() {
        return (
            <div>
                <React.Fragment>
                <div>
                <Card align="center" width={1}>
                <CardContent>
                <h1>Headlines source: <h4><a href="https://soundmindinvesting.com/articles">https://soundmindinvesting.com/articles</a></h4></h1>
                </CardContent>
                </Card>
                </div>
                <br />
                <div>
                                {this.state.headlines.map(headline =>
                                <Box mt="15px">
                                <Card>
                                <CardContent>
                                <div>
                                <div key={headline.id}>
                                    <h2>{headline.title}</h2>
                                    <h4>{headline.summary}</h4>
                                <br/>
                                <h5>
                                    <a href={headline.title}>{headline.link}</a>
                                </h5>
                            </div>
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
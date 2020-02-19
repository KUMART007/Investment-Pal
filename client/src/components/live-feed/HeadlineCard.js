import React, { Component } from 'react';
import axios from 'axios';

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

                <div>
                    <h1>Headlines source: <a href="https://soundmindinvesting.com/articles">https://soundmindinvesting.com/articles</a></h1>
                </div>
                <br />
                <div>
                    {this.state.headlines.map(headline =>
                        <div className>
                            <div key={headline.id}>
                                <h2>{headline.title}</h2>
                                <h3>{headline.summary}</h3>
                                <h4>
                                    <a href={headline.title}>{headline.link}</a>
                                </h4>
                            </div>
                            <br/>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
import React, { Component } from 'react';
import axios from 'axios';
import { AllHtmlEntities } from 'html-entities';

const entities = new AllHtmlEntities();

export default class RetrieveHeadlines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headlines: [],
            output:[]
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
                        <div key={headline.id}>
                                <h2>{entities.decode(headline.title)}</h2>
                                <h3>{entities.decode(headline.summary)}</h3>
                                <h4>
                                    <a href={headline.link}>Continue Reading</a>
                                </h4>
                            <br />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
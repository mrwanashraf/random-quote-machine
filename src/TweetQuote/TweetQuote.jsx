import React from 'react';
import './TweetQuote.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter } from  "@fortawesome/free-brands-svg-icons";
library.add(faTwitter);

// tweet the current quote
export default class TweetQuote extends React.Component {
    render() {
        return (
            <a 
                id="tweet-quote" 
                href={"https://twitter.com/intent/tweet?text=\""+this.props.quote+"\"%0a%0a— "+this.props.author}
                target="_blank"
                title="tweet quote"
            >
                <button><FontAwesomeIcon id="twitter" icon={faTwitter} /></button>
            </a>
        );
    }
}
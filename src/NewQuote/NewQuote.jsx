import React from 'react';
import './NewQuote.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
library.add(faQuoteRight);

// generate a new quote
export default class NewQuote extends React.Component {
    render() {
        return(
            <button 
                id="new-quote" 
                onClick={this.props.randomQuote}
                title="new quote"
            >
                <FontAwesomeIcon id="quote" icon={faQuoteRight} />
            </button>
        );
    }
}
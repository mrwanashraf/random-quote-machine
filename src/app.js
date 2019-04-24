import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Header from './Header/Header.jsx';
import Text from './Text/Text.jsx';
import Author from './Author/Author.jsx';
import NewQuote from './NewQuote/NewQuote.jsx';
import TweetQuote from './TweetQuote/TweetQuote.jsx';

class RandomQuoteMachine extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: ''
        };
        this.Mount = false;
        this.fetchQuotes = this.fetchQuotes.bind(this);
        this.randomQuote = this.randomQuote.bind(this);
    }

    // fetch the quotes then store it in localStorage
    fetchQuotes() {
        fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(res => res.json())
        .then(data => {            
            localStorage.setItem('data', JSON.stringify(data.quotes));
            this.randomQuote();
        })
        .catch((error) => console.log(error));
    }
    
    // randomly generate a quote, set it to the quote, author state then change the background color
    
    randomQuote() {
        if ( localStorage.hasOwnProperty('data') ) {
            const data = JSON.parse(localStorage.getItem('data'));
            const random = Math.floor(Math.random() * data.length);
            const quote = data[random].quote;
            const author = data[random].author;
            const Hue = Math.floor(Math.random() * 50);
            const Saturation = Math.floor(Math.random() * 10);
            const Lightness = Math.floor(Math.random() * 25) + 75;
    
            this.setState({
                quote,
                author
            });
    
            // change background color randomly
            document.body.style.backgroundColor = `hsl(${Hue}, ${Saturation}%, ${Lightness}%)`;
        }
    };

    // fetch the quotes when the component will mount
    componentWillMount() {
        this.fetchQuotes();
    }

    // generate a random quote whenever the component mounts
    componentDidMount() {
        this.randomQuote();
    }

    render() {
        return (
            <section id="quote-box">
                <Header />
                <Text quote={this.state.quote}/>
                <Author author={this.state.author}/>
                <section id="buttons">
                    <NewQuote randomQuote={this.randomQuote} />
                    <TweetQuote quote={this.state.quote} author={this.state.author} />
                </section>
            </section>
        );
    }
}

ReactDOM.render(<RandomQuoteMachine />, document.querySelector('#app'));
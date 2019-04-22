import React from 'react';
import './Author.scss';

// show author
export default class Author extends React.Component {
    render() {
        return(
            <section id="author">
                    <p>—{this.props.author}</p>
            </section>
        );
    }
}
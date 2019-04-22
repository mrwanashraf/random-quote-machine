import React from 'react';
import './Text.scss';

// show quote
export default class Text extends React.Component {
    render() {
        return (
            <section id="text">
                    <p>"{this.props.quote}"</p>
            </section>
        );
    }
}
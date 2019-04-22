import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from  "@fortawesome/free-brands-svg-icons";
import './Header.scss';

library.add(faGithub);

export default class Header extends React.Component {
    render() {
        return (
            <header id="Header">
                <h1>Random Quote Machine — </h1>
                <a href="https://github.com/mrwanashraf/random-quote-machine" target="_blank">
                    <FontAwesomeIcon id="github" icon={faGithub} />
                </a>
            </header>
        );
    }
}
import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Container } from 'react-responsive-grid';
import Nav from '../components/Nav.js';
import { rhythm, scale } from '../utils/typography';
import customCSS from '../css/custom.css';

class Template extends Component {
    render() {
        const { location, children } = this.props;
        let header;
        if (location.pathname === '/') {
            header = (
                <h3
                    style={{
                        marginBottom: rhythm(1.5),
                        marginTop: 0,
                    }}
                >
                    <Link
                        style={{
                            boxShadow: 'none',
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                        to={'/'}
                    >
                        Steve Frost | Front-End Engineer
                    </Link>
                </h3>
            );
        } else {
            header = (
                <h3
                    style={{
                        marginTop: 0,
                        marginBottom: rhythm(-1),
                    }}
                >
                    <Link
                        style={{
                            boxShadow: 'none',
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                        to={'/'}
                    >
                        Steve Frost | Front-End Engineer
                    </Link>
                </h3>
            );
        }

        return (
            <Container
                style={{
                    maxWidth: rhythm(28),
                    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                }}
            >
                {header}
                {children()}
            </Container>
        );
    }
}

Template.propTypes = {
    children: React.PropTypes.func,
    location: React.PropTypes.object,
    route: React.PropTypes.object,
};

export default Template;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

class ImageRoute extends Component {
    render() {
        let style = this.props.title.description[0].title ? {} : { pointerEvents: 'none' };
        const className = this.props.title.description[0].title===''?'menu-item-info blocked':'menu-item-info';
        return (
            <div className="menu-item">
                <Link to={`/month/${this.props.title.id}`} style={style}>
                    <Image filename={this.props.title.image} />
                    <div className={className}>
                        <h3>{this.props.title.name}</h3>
                    </div>
                </Link>
            </div>
        );
    }
}

export default ImageRoute;
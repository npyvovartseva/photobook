import React, { Component } from 'react';
import ImageRoute from '../elements/ImageRoute';

class MainMenu extends Component {
    ImagesRender = this.props.titles.map(title => (
        <ImageRoute title={title} key={title.id} />
    ))
    render() {
        return (
            <div className="main-menu-container">
                <div className="main-menu">
                    {this.ImagesRender}
                </div>
            </div>
        );
    }
}

export default MainMenu;
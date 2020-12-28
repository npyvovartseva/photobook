import React, { Component } from 'react';

class Image extends Component {
    state = {
        image: null
    };

    loadImage = imageName => {

        import(`../../utils/images/${imageName}`).then(image => {
            this.setState({
                image: image.default
            });
        });
    };

    componentDidMount() {
        if (/.jpg|.jpeg|.gif|.mp4/.test(this.props.filename)) {
            this.props.filename && this.loadImage(this.props.filename);
        }

    }

    render() {
        const { image } = this.state;
        const isVideo = /mp4/.test(image);
        return (
            <>
                {image && !isVideo && <img src={image} alt="" />}
                {image && isVideo &&
                    <video controls autoPlay loop muted>
                        <source src={image} type="video/mp4" />
                    </video>}
                
            </>
        );
    }
}

export default Image;
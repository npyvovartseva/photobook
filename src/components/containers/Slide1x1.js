import React from 'react';

import Image from '../elements/Image';

const Slide1x1 = ({ images }) => {
    const imageList = images.map(image => (
        <div key={image} className='slide-item size1x1' data-aos="zoom-in">
            <Image filename={image} />
        </div>
    ))
    return (
        <div className="slide">
            {imageList}
        </div>
    )
}

export default Slide1x1;
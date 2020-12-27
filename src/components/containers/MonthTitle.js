import React from 'react';
import { useParams } from 'react-router-dom';
import Image from '../elements/Image';
import MonthDesc from '../elements/MonthDesc';

const MonthTitle = (props) => {
    const { id } = useParams();
    const findTitles = () => props.titles.find(title => title.id == id);

    return (
        <div className="month-title">
            <div className="month-title-image">
                <Image filename={findTitles().image} />
            </div>
            <div className="month-title-description">
                <MonthDesc text={findTitles().description} />
            </div>
        </div>
    )
}

export default MonthTitle;
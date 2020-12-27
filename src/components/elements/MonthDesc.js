import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

const MonthDesc = ({ text }) => {
    const {url } = useRouteMatch();
    return (
        <div className="month-desc">
            <h2>{text[0].title}</h2>
            <div className="month-desc-item">
                {text[0].description}
            </div>
            <div className="month-desc-footer">
                <Link to={`${url}/slider`}>
                    <button>СМОТРЕТЬ КАК Я РОСТУ</button>
                </Link>
            </div>
        </div>
    )
}

export default MonthDesc;
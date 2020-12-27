import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Slider = (props) =>{
    const { id } = useParams();

    const slides = props.gallery[id];

    const next = ()=>{
        return id*1+1 <= 12 ? id*1+1: id;
    }
    const back = ()=>{
        return id*1-1 >= -1 ? id*1-1: id;
    }

    return (
        <>
        {slides?
        <div>{slides}</div>
        :
        <div className="slider-nophotos"> Пока нет фотографий </div>
        }
        <div className="slider-footer">
        <Link to={`/month/${back()}`}><button>Прошлый месяц</button></Link>
        <Link to='/'><button>Вернуться к уткам</button></Link>
        <Link to={`/month/${next()}`}><button>Следующий месяц</button></Link>
        </div>
    </>
    )

}

export default Slider;
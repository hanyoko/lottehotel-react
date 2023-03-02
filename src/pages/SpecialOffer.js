import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import { API_URL } from '../config/apiurl';
import './SpecialOffer.css';

function SpecialList({list}){
    return(
        <li>
            <div className='imgdiv'>
                <img src={`${API_URL}/upload/event/${list.e_img1}`} alt="" />
            </div>
            <div className='textdiv'>
                <h3>{list.e_title}</h3>
                <p>
                    {list.e_titledesc}
                </p>
                <div>
                    <Link to={`/special/${list.e_no}`}>
                    +<br/>
                    READ MORE
                    </Link>
                </div>
            </div>
        </li>
    )
    
}
const SpacialOffer = ({ data }) => {
    return (
        <div className='specialpage'>
            <div className='inner'>
                <Title title="special"/>
                <ul>
                    {data.map(d=><SpecialList list={d} key={d.e_no} />)}
                </ul>
            </div>
        </div>
    );
};

export default SpacialOffer;
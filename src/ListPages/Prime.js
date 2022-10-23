import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
const Prime = () => {
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub6_00.png'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                </div>
            </div>


        </>
    )
}

export default Prime
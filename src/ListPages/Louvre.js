import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Louvre.scss'


const Louvre = () => {
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='Louvre'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub11_00.png'} alt="" className='banner' />
                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub11_01.png'} alt="" className='img01' />
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub11_02.png'} alt="" />

                    <div className="bottom">
                        <h3>{matchId.title}</h3>
                        <p>{matchId.field}</p>
                        <strong>Tools. {matchId.tools}</strong><br />
                        <small>Period. {matchId.period}</small>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Louvre
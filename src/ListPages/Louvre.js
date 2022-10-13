import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';


const Louvre = () => {
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub11_00.png'} alt="" className='banner' />
                <div className="inner1200">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                    <div className="img">
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub12_01.png'} alt="" className='img01' />
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub12_02.gif'} alt="" className='img02' />
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub12_03.png'} alt="" className='img03' />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Louvre
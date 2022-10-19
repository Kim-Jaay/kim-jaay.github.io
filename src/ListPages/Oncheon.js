import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Oncheon.scss'

const Oncheon = () => {
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='Oncheon'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub02_00.png'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>{matchId.title}</h2>
                        <p>{matchId.des2}</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub02_01.png'} className='img01' />
                </div>

                <div className="inner_sec overview">
                    <div className="inner1200 subcon">
                        <h2>{matchId.title}</h2>
                        <p>{matchId.des2}</p>
                    </div>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>{matchId.title}</h2>
                        <p>{matchId.des2}</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub02_03.png'} />
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + '/assets/img/sub02_04.png'} />
                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>{matchId.title}</h2>
                        <p>{matchId.des2}</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub02_05.png'} />
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + '/assets/img/sub02_06.png'} />
                <img src={process.env.PUBLIC_URL + '/assets/img/sub02_07.png'} />
                <div className='image'>
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub02_08.png'} />
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub02_09.png'} />
                </div>






                <div className="inner1200 subcon">
                    <div className="bottom">
                        <h3>{matchId.title}</h3>
                        <p>{matchId.field}</p>
                        <strong>Tools. {matchId.tools}</strong><br />
                        <small>Period. {matchId.period}</small>
                    </div>
                </div>
            </div>



        </div >
    )
}

export default Oncheon
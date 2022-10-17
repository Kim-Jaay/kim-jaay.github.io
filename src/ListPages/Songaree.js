import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Songaree.scss'

const Songaree = () => {
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='Songaree'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub05_00.png'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>{matchId.title}</h2>
                        <p>{matchId.des2}</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub05_01.svg'} className='img01' />
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>{matchId.title}</h2>
                        <p>{matchId.des2}</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub05_02.svg'} className='img02' />
                </div>

                <div className="inner_sec iot">
                    <div className="inner1200 subcon">
                        <h2>Songaree Baby IoT</h2>
                        <p>의료진과 긴밀한 초연결이 필요한 호흡기 질환 환자나<br />
                            갓난아기의 산소포화도 정보를
                            무선으로 보호자의 스마트폰<br />
                            어플리케이션으로 전달하는 시스템.</p>
                    </div>
                </div>

                <div className="inner_sec needs">
                    <div className="inner1200 subcon">
                        <h2>Songaree Baby IoT</h2>
                        <p>의료진과 긴밀한 초연결이 필요한 호흡기 질환 환자나<br />
                            갓난아기의 산소포화도 정보를
                            무선으로 보호자의 스마트폰<br />
                            어플리케이션으로 전달하는 시스템.</p>
                    </div>
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


        </div>
    )
}

export default Songaree
import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Modivoa.scss'

const Modivoa = () => {
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='Modivoa'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub01_00.png'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>Songaree Baby IoT</h2>
                        <p>의료진과 긴밀한 초연결이 필요한 호흡기 질환 환자나<br />
                            갓난 아기의 산소포화도 정보를
                            무선으로 보호자의 스마트폰<br />
                            어플리케이션으로 전달하는 시스템.</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub01_01.png'} alt="" className='img01' />
                </div>


                <div className="inner_sec over">
                    <div className="inner1200 subcon">
                        <h2>{matchId.title}</h2>
                        <p>{matchId.des2}</p>
                    </div>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>Persona & Journey Map</h2>
                        <p>영아 돌연사 예방을 위해 송아리베이비 IoT 제품을 사용하는 신생아-유아 까지의 자녀를 둔<br />
                            부모를 가상의 페르소나로 설정하여 현재 패키지 사용과정을 블루프린트 및 고객여정지도로 작성</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub01_03.png'} />
                    </div>
                </div>

                <div className="inner_sec idea">
                    <div className="inner1200 subcon">
                        <h2>Persona & Journey Map</h2>
                        <p>영아 돌연사 예방을 위해 송아리베이비 IoT 제품을 사용하는 신생아-유아 까지의 자녀를 둔<br />
                            부모를 가상의 페르소나로 설정하여 현재 패키지 사용과정을 블루프린트 및 고객여정지도로 작성</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub01_04.png'} />
                    </div>
                </div>


                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub01_05.png'} />
                    </div>
                </div>

                <div className="inner_sec develp01">
                    <div className="inner1200 subcon">
                        <h2>{matchId.title}</h2>
                        <p>{matchId.des2}</p>
                    </div>
                </div>
                <div className="inner_sec develp02">
                    <div className="inner1200 subcon">
                        <h2>{matchId.title}</h2>
                        <p>{matchId.des2}</p>
                    </div>
                </div>




                <img src={process.env.PUBLIC_URL + '/assets/img/sub01_08.png'} />







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

export default Modivoa
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
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub05_01.png'} className='img01' />
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>{matchId.title}</h2>
                        <p>{matchId.des2}</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub05_02.png'} className='img02' />
                </div>

                <div className="inner_sec iot">
                    <div className="inner1200 subcon">
                        <h2>Songaree Baby IoT</h2>
                        <p>의료진과 긴밀한 초연결이 필요한 호흡기 질환 환자나<br />
                            갓난 아기의 산소포화도 정보를
                            무선으로 보호자의 스마트폰<br />
                            어플리케이션으로 전달하는 시스템.</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub05_03.png'} className='img02' />
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

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>Persona & Journey Map</h2>
                        <p>영아 돌연사 예방을 위해 송아리베이비 IoT 제품을 사용하는 신생아-유아 까지의 자녀를 둔<br />
                            부모를 가상의 페르소나로 설정하여 현재 패키지 사용과정을 블루프린트 및 고객여정지도로 작성</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub05_05.png'} />
                    </div>
                </div>
                <div className="inner_sec strategy">
                    <div className="inner1200 subcon">
                        <h2>Persona & Journey Map</h2>
                        <p>영아 돌연사 예방을 위해 송아리베이비 IoT 제품을 사용하는 신생아-유아 까지의 자녀를 둔<br />
                            부모를 가상의 페르소나로 설정하여 현재 패키지 사용과정을 블루프린트 및 고객여정지도로 작성</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub05_06.png'} />
                    </div>
                </div>
                <div className="inner_sec develop01">
                    <div className="inner1200 subcon">
                        <h2>Persona & Journey Map</h2>
                        <p>영아 돌연사 예방을 위해 송아리베이비 IoT 제품을 사용하는 신생아-유아 까지의 자녀를 둔<br />
                            부모를 가상의 페르소나로 설정하여 현재 패키지 사용과정을 블루프린트 및 고객여정지도로 작성</p>
                    </div>
                </div>
                <div className="inner_sec develop02">
                    <div className="inner1200 subcon">
                        <h2>Persona & Journey Map</h2>
                        <p>영아 돌연사 예방을 위해 송아리베이비 IoT 제품을 사용하는 신생아-유아 까지의 자녀를 둔<br />
                            부모를 가상의 페르소나로 설정하여 현재 패키지 사용과정을 블루프린트 및 고객여정지도로 작성</p>
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + '/assets/img/sub05_09.png'} />












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
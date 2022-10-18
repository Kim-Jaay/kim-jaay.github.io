import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Namkwang.scss'

const Namkwang = () => {
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='Namkwang'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub04_00.png'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                </div>


                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>{matchId.title}</h2>
                        <p>사용자와 의료인의 커뮤니케이션을 제공하는  ‘송아리베이비 IoT’
                            사용성 개선을 위해<br />
                            사용자 경험 기반의 문제 해결을 바탕으로 이에 맞는
                            패키지 구조 및 비주얼 전략개발.</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub04_01.png'} className='img01' />
                </div>

                <div className="inner_sec strategy">
                    <div className="inner1200 subcon">
                        <h2>{matchId.title}</h2>
                        <p>사용자와 의료인의 커뮤니케이션을 제공하는  ‘송아리베이비 IoT’
                            사용성 개선을 위해<br />
                            사용자 경험 기반의 문제 해결을 바탕으로 이에 맞는
                            패키지 구조 및 비주얼 전략개발.</p>
                    </div>
                </div>

                <div className="inner_sec ">
                    <div className="inner1200 subcon">
                        <h2>{matchId.title}</h2>
                        <p>사용자와 의료인의 커뮤니케이션을 제공하는  ‘송아리베이비 IoT’
                            사용성 개선을 위해<br />
                            사용자 경험 기반의 문제 해결을 바탕으로 이에 맞는
                            패키지 구조 및 비주얼 전략개발.</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub04_03.png'} />
                    </div>
                </div>
                <div className="inner_sec develop01">
                    <div className="inner1200 subcon">
                        <h2>{matchId.title}</h2>
                        <p>사용자와 의료인의 커뮤니케이션을 제공하는  ‘송아리베이비 IoT’
                            사용성 개선을 위해<br />
                            사용자 경험 기반의 문제 해결을 바탕으로 이에 맞는
                            패키지 구조 및 비주얼 전략개발.</p>
                    </div>
                </div>
                <div className="inner_sec develop02">
                    <div className="inner1200 subcon">
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub04_05.png'} />
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

export default Namkwang
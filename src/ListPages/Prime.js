import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Prime.scss'
const Prime = () => {
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (

        <div className='Prime'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub06_00.png'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>Design Development Process</h2>
                        <p>기업이 직면한 문제를 진단하고 이를 디자인을 통해<br />
                            체계적으로 해결하는 디자인 컨설팅 서비스 진행</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub06_01.png'} alt="" className='img01' />
                </div>


                <div className="inner_sec charts">
                    <div className="inner1200 subcon">
                        <h2>Brand Concept</h2>
                        <p>다양한 측면을 검토하여 브랜드의 정체성이 될 핵심가치를 도출하고<br />
                            동종기업의 이미지와 컬러, 트렌드를 반영하여 차별화된 컨셉 수립</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub06_02.png'} />
                    </div>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>Brand Concept</h2>
                        <p>다양한 측면을 검토하여 브랜드의 정체성이 될 핵심가치를 도출하고<br />
                            동종기업의 이미지와 컬러, 트렌드를 반영하여 차별화된 컨셉 수립</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub06_03.png'} />
                    </div>
                </div>

                <div className="inner_sec blueprints">
                    <div className="inner1200 subcon">
                        <h2>Brand Concept</h2>
                        <p>다양한 측면을 검토하여 브랜드의 정체성이 될 핵심가치를 도출하고<br />
                            동종기업의 이미지와 컬러, 트렌드를 반영하여 차별화된 컨셉 수립</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub06_04.png'} />
                    </div>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>Brand Concept</h2>
                        <p>다양한 측면을 검토하여 브랜드의 정체성이 될 핵심가치를 도출하고<br />
                            동종기업의 이미지와 컬러, 트렌드를 반영하여 차별화된 컨셉 수립</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub06_05.png'} />
                    </div>
                </div>

                <div className="inner_sec keyidea">
                    <div className="inner1200 subcon">
                        <h2>Brand Concept</h2>
                        <p>다양한 측면을 검토하여 브랜드의 정체성이 될 핵심가치를 도출하고<br />
                            동종기업의 이미지와 컬러, 트렌드를 반영하여 차별화된 컨셉 수립</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub06_06.png'} />
                    </div>
                </div>







            </div>
        </div>

    )
}

export default Prime
import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Louvre.scss'

import Highlight, { defaultProps } from "prism-react-renderer";


const Louvre = () => {
    const exampleCode = `


    코드 보여주세요
    (function someDemo() {
      var test = "Hello World!";
      console.log(test);
    })();
    
    return () => <App />;
    코드 보여주기 



    `;
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

                    <div className="inner_sec">
                        <h2>Check the Code : React</h2>
                        <p>React Library 활용하여 전체 페이지 구축 <br />
                            Router Dom 사용하여 서브페이지 구성</p>
                        <Highlight {...defaultProps} code={exampleCode} language="jsx">
                            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                <pre className={className} style={style}>
                                    {tokens.map((line, i) => (
                                        <div {...getLineProps({ line, key: i })}>
                                            {line.map((token, key) => (
                                                <span {...getTokenProps({ token, key })} />
                                            ))}
                                        </div>
                                    ))}
                                </pre>
                            )}
                        </Highlight>
                    </div>

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
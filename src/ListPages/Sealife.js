import React from 'react'
import { useParams } from 'react-router-dom';
import '../css/Sealife.scss'
import LIST from '../data/List';

import Highlight, { defaultProps } from "prism-react-renderer";




const Sealife = () => {
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
        <div className='Sealife'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub12_00.png'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                    <div className="img">
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub12_01.png'} alt="" className='img01' />
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub12_02.gif'} alt="" className='img02' />
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub12_03.png'} alt="" className='img03' />
                    </div>




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

export default Sealife
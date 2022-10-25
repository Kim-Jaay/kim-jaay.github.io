import React from 'react'
import { useParams } from 'react-router-dom';
import '../css/Sealife.scss'
import LIST from '../data/List';

import Highlight, { defaultProps } from "prism-react-renderer";




const Sealife = () => {

    const exampleCode = `
    //App.js
    const App = () => {
        return (
          <>
            <div className='Wrapper'>
              <Header />
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/show' element={<Show />}></Route>
                <Route path='/ticket' element={<Ticket />}></Route>
                <Route path='/sealife/*' element={<Sealife />}></Route>
              </Routes>
      
      
              <Footer />
              <ToTop />
            </div>
          </>
        )
      }
      
      export default App



      //Main.js


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

export default Sealife
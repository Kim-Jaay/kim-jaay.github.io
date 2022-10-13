import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../css/SubPageBanner.scss'
import LIST from '../data/List';


import Modivoa from '../ListPages/Modivoa';
import Oncheon from '../ListPages/Oncheon';
import Sososai from '../ListPages/Sososai';
import Prime from '../ListPages/Prime';
import Songaree from '../ListPages/Songaree';
import Namkwang from '../ListPages/Namkwang';
import Usm from '../ListPages/Usm';
import Tamburins from '../ListPages/Tamburins';
import Nasa from '../ListPages/Nasa';
import HM from '../ListPages/H&M';
import Louvre from '../ListPages/Louvre';
import Sealife from '../ListPages/Sealife'


const SubPageBanner = () => {
    const navigate = useNavigate();
    const backBtn = () => { navigate(-1); }
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);




    return (
        <div className='SubBanner'>
            <div className="inner">
                <div className="inner1200">
                    <div className='Banner'>
                        <div className="button">
                            {
                                matchId.outlink
                                    ?
                                    <a href={matchId.outlink} target='_blank' >View Page</a>
                                    : null
                            }
                            <i className="xi-close" onClick={backBtn}></i>
                        </div>

                        <div className="con">
                            <h2>{matchId.title}</h2>
                            <div>
                                <span>{matchId.tools}</span>
                                <p>{matchId.des1}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* {
                matchId.map((it, idx) => {
                    return (
                        <div>
                            {id == idx + 1 && < ${it.name} />}
                        </div>
                    )
                })
            } */}

            <div className='SubContent'>
                {id == 1 && <Modivoa />}
                {id == 2 && <Oncheon />}
                {id == 3 && <Sososai />}
                {id == 4 && <Namkwang />}
                {id == 5 && <Songaree />}
                {id == 6 && <Prime />}
                {id == 7 && <Usm />}
                {id == 8 && <Tamburins />}
                {id == 9 && <Nasa />}
                {id == 10 && <HM />}
                {id == 11 && <Louvre />}
                {id == 12 && <Sealife />}
            </div>


        </div>
    )
}

export default SubPageBanner
import React from 'react'
import '../css/Sealife.scss'

const Sealife = () => {
    return (
        <>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub12_00.png'} alt="" />
                <div className="inner1200">
                    <div className="img">
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub12_01.png'} alt="" className='img01' />
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub12_02.gif'} alt="" className='img02' />
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub12_03.png'} alt="" className='img03' />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Sealife
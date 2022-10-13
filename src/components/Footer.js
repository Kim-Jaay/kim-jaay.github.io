import React from 'react'
import '../css/Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="inner">
                <div className="logo">
                    <h1>
                        <Link to='/'>
                            <img src={process.env.PUBLIC_URL + '/assets/img/logo01.svg'} alt="" />
                        </Link>
                    </h1>
                    <h1>
                        <a href="https://namecard.kakao.com/kimjay" target='_blank'>
                            <img src={process.env.PUBLIC_URL + '/assets/img/logo02.svg'} alt="" />
                        </a>
                    </h1>
                </div>
                <p>Service Designer & Front-End Developer</p>

                <div className="contact">
                    <a href="tel:010-7578-8546">+8210 7578 8546</a>
                    <a href="mailto:jjjjuhyuneee@naver.com">jjjjuhyuneee@naver.com</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
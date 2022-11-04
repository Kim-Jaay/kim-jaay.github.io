import React from 'react'
import { Link } from 'react-router-dom'
import NAV from '../data/Nav.js'

const MainNav = () => {
    return (
        <ul className="main_nav">
            <li><a href="https://github.com/Kim-Jaay" target='_blank'><i className="xi-github"></i></a></li>
            <li><a href="https://namecard.kakao.com/kimjay" target='_blank'><i className="xi-kakaotalk"></i></a></li>
            <li><a href={process.env.PUBLIC_URL + '/assets/img/Resume_KimJuHyun.pdf'} download="Resume_김주현"><i className="xi-folder-download"></i></a></li>
            {/* {
                NAV.map((it, idx) => {
                    return (
                        <li>
                            <a href={it.link}>{it.menu}</a>

                        </li>
                    )
                })
            } */}
        </ul>
    )
}

export default MainNav
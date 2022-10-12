import React, { useEffect } from 'react'
import Footer from './Footer'
import '../css/Main.scss'
import LIST from '../data/List.js'
import { Link } from 'react-router-dom'

import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
    useEffect(() => {
        AOS.init({
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            //useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        });
    }, [])
    return (
        <div className='MainWrap'>
            <main className='Main'>
                <div className="inner">
                    <ul className="list">
                        {
                            LIST
                                .map((it, idx) => {
                                    return (
                                        <li data-aos="fade-up" data-aos-delay={100 * idx} data-aos-duration="300"  >
                                            <Link to={it.link}>
                                                <img src={process.env.PUBLIC_URL + `/assets/img/main_0${idx + 1}.png`} alt="" />
                                            </Link>
                                        </li>
                                    )
                                })
                                .reverse()
                        }

                    </ul>
                </div>
            </main >
            <footer className="Footer">
                <Footer />
            </footer>
        </div >
    )
}

export default Main
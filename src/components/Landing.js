import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import hoverEffect from 'hover-effect';
import image from "../assets//bg.jpeg";
import image2 from "../assets/image2.jpg";
import overlay from "../assets/overlay.png";

function Landing() {

    const header = useRef(null)
    const leftColumn = useRef(null)
    const paraRef = useRef([])

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: '3' } })
        tl.to(header.current, { opacity: '1', duration: '3' });
        tl.to(header.current, { left: '50%' });
        tl.to(leftColumn.current, { left: '0' }, "-=3")
        tl.to(header.current, { top: '10%' });
        tl.to(paraRef.current, { y: '0', stagger: '0.3' })

        var image_animate = new hoverEffect({
            parent: document.querySelector(".left"),
            intensity: .3,
            image1: image,
            image2: image2,
            displacementImage: overlay
        })
    }, [])

    return (
        <div className="container">
            <div ref={header} className="header">
                <h1 className="ml12">Gowtham Eswaran</h1>
            </div>
            <div ref={leftColumn} className="left column">
                <div className="leftHeader">
                    <p><span ref={el => paraRef.current[0] = el}>web developer /</span></p>
                    <p><span ref={el => paraRef.current[1] = el}>build the things to make a dent in the web universe</span></p>
                    <p><span ref={el => paraRef.current[2] = el}>.....</span></p>
                    <p><span ref={el => paraRef.current[3] = el} >since 2017</span></p>
                </div>
            </div>
            <div className="right column">
                {/* <div className="circular_div">
                    <div class="circular-text">
                        <span id="rotated">stone • fox • swim • tapcheck • wolves • fox • swim • tapcheck • wolves</span>
                    </div>
                    <div class="arrow">
                        <ion-icon name="arrow-down"></ion-icon>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Landing;

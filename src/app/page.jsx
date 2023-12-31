"use client"
import React, {useState,useEffect, useRef,useLayoutEffect} from 'react';
import {Slide1} from '@/components/Slide1';
import {Slide2} from '@/components/Slide2';
import {Slide3} from '@/components/Slide3';
import {Slide8} from '@/components/Slide8';
import {Slide7} from '@/components/Slide7';
import Slide4 from '@/components/Slide4';
import Slide9 from '@/components/Slide9';
import Slide5 from '@/components/Slide5';
import useMouse from "@react-hook/mouse-position";
import {motion} from "framer-motion";
import VideoBackground from '@/components/VideoBackground';
import TextRevolve from '@/components/TextRevolve';


function Landing() {


    const [cursorVariant, setCursorVariant] = useState("default");
    const [isMobile, setIsMobile] = useState(false);

    const ref = useRef(null);
    const mouse = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100
    });

    let mouseXPosition = 0;
    let mouseYPosition = 0;

    if (mouse.x !== null) {
        mouseXPosition = mouse.clientX;
    }

    if (mouse.y !== null) {
        mouseYPosition = mouse.clientY;
    }

    const variants = {
        default: {
            opacity: 1,
            height: 0,
            width: 0,
            fontSize: "16px",
            x: mouseXPosition,
            y: mouseYPosition,
            transition: {
                type: "spring",
                mass: 0.6
            },
            cursor: "pointer",
            rotate:180
        },
        chakra: {
            opacity: 1,
            backgroundColor: "#FF6D2B",
            color: "#000",
            height: 80,
            width: 80,
            fontSize: "18px",
            x: mouseXPosition - 32,
            y: mouseYPosition - 32,
            rotate:360
        },
        workshop: {
            opacity: 1,
            backgroundColor: "#DE397D",
            color: "#000",
            height: 64,
            width: 64,
            fontSize: "32px",
            x: mouseXPosition - 48,
            y: mouseYPosition - 48,
            rotate:360
        },
        proshow: {
            opacity: 1,
            backgroundColor: "#3280E1",
            color: "#000",
            height: 72,
            width: 72,
            fontSize: "32px",
            x: mouseXPosition - 48,
            y: mouseYPosition - 48,
            rotate:180
        },
        rocket: {
            opacity: 1,
            backgroundColor: "#28E024",
            color: "#000",
            height: 90,
            width: 90,
            fontSize: "32px",
            x: mouseXPosition - 48,
            y: mouseYPosition - 48,
            cursor: "none",
            rotate:180
        },
        robo: {
            opacity: 1,
            backgroundColor: "#28E024",
            color: "#000",
            height: 90,
            width: 90,
            fontSize: "32px",
            x: mouseXPosition - 48,
            y: mouseYPosition - 48,
        }
    };

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28
    };

    function chakraEnter(event) {
        setCursorVariant("chakra");
    }

    function chakraLeave(event) {

        setCursorVariant("default");
    }

    function proshowEnter(event) {

        setCursorVariant("proshow");
    }

    function proshowLeave(event) {

        setCursorVariant("default");
    }

    function workshopEnter(event) {

        setCursorVariant("workshop");
    }

    function workshopLeave(event) {

        setCursorVariant("default");
    }

    function rocketEnter(event) {

        setCursorVariant("rocket");
    }

    function rocketLeave(event) {

        setCursorVariant("default");
    }
    useLayoutEffect(() => {
        const checkIsMobile = () => {
          setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };
    
        // Initial check
        checkIsMobile();
    
        // Run the check when the window is resized
        const resizeObserver = new ResizeObserver(checkIsMobile);
        resizeObserver.observe(document.body);
    
        // Clean up the ResizeObserver when the component unmounts
        return () => {
          resizeObserver.disconnect();
        };
      }, []); 

    const videoRef = useRef(null);
    const [percent, setPercent] = useState(0);
    const [lastPercent, setLastPercent] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [rev, setRev] = useState(false)

    useEffect(() => {
        // Tried to reverse video on scroll up (no smooth yet)
        // let y = window.scrollY;
        // let height = document.body.clientHeight;
        // let currentPercent = y * 3 / height;
        // const video = videoRef.current;
        // let stopTime = 3.791606 * currentPercent;
        // const handleScroll = (e) => {
        //     setPercent(currentPercent);
        //     y = window.scrollY;
        //     height = document.body.clientHeight;
        //     currentPercent = y * 3 / height;
        //     stopTime = 3.791606 * currentPercent;
        //     if (!videoRef.current || currentPercent === 0) return;
        //     if(e.deltaY < 0){
        //         video.currentTime -= 0.01
        //     }else{
        //         video.play()
        //     }
        // };
        // const videoPlayed = () => video.currentTime > stopTime ? video.pause() : null;

        // document.addEventListener("wheel", handleScroll);
        // video.addEventListener("timeupdate", videoPlayed);
        // return () => document.removeEventListener("wheel", handleScroll);
        
        const handleScroll = (e) => {
            const y = window.scrollY;
            const height = document.body.clientHeight;
            const currentPercent = y * 3 / height;
            setPercent(currentPercent);
        };
        
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!videoRef.current || percent === 0) return;

        const video = videoRef.current;
        const stopTime = video.duration * percent;


        setLastPercent(percent);
        if (percent > 1) {
            setIsPlaying(false)
        }
        else {
            setIsPlaying(true)
        }


        // if (last > percent) {
        //     video.pause();
        //     video.currentTime = stopTime;
        //     return;
        // }

        if( video.currentTime >= stopTime) {
            video.pause();
            return;
        }

        const videoPlayed = () => video.currentTime > stopTime ? video.pause() : null;
        video.play()

        video.addEventListener("timeupdate", videoPlayed);
        return () => video.removeEventListener("timeupdate", videoPlayed);
    }, [percent, videoRef]);



    return (



        <div className=' relative' ref={ref}>
              { percent<1 &&  <video
            ref={videoRef}
            src="/jeevan.mp4"
            playsInline={true}
            preload="eager"
            muted={true}
            loop={false}
            className="fixed top-0 hidden md:block"
        ></video>}
            {isMobile && <VideoBackground/>}
            <Slide1/>
            <TextRevolve/>
            <Slide2/>
            <Slide3/>
            <motion.div
                variants={variants}
                className="circle hidden md:block"
                animate={cursorVariant}
                transition={spring}
            >
                <p className="cursorText"></p>

            </motion.div>
            <div className='container1'>
                <div id="chakra" onMouseEnter={chakraEnter} onMouseLeave={chakraLeave}>
                    <Slide4 />
                </div>
                <div id="proshow" onMouseEnter={proshowEnter} onMouseLeave={proshowLeave}>
                    <Slide5/>
                </div>
                <div  onMouseEnter={workshopEnter} onMouseLeave={workshopLeave}>
                    <Slide7/>
                </div>
            </div>
            <div id="robo">

            <Slide8/>
            </div>
            <div className='container1'>
                <div id="rocket" onMouseEnter={rocketEnter} onMouseLeave={rocketLeave}>
                    <Slide9/>
                </div>
            </div>
        </div>
    )
}

export default Landing

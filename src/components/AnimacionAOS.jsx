import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export function AnimacionAOS(props){
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-left">
            {props.children}
        </div>
      );


}
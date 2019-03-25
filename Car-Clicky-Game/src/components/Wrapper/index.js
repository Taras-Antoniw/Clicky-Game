import React from "react";
import "./style.css";

const Wrapper = props =>  
    <div className={props.shakeWrapper==="true" ? "wrapperShake" : "wrapper"}>{props.children}</div>

export default Wrapper;
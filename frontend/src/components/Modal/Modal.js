import React, { useState } from "react";
import "../Modal/Modal.css";
import {useHistory,useRouteMatch} from "react-router-dom";
import { GiPlanePilot } from "react-icons/gi";
import {CgCloseR}from "react-icons/cg";
const Modal =()=>{
    
    let {path,url}=useRouteMatch();
    const history=useHistory();

    return (
     
        <div className="modal-wrapper">
        <div className="modal-header">
         <p>Welcome To <span style={{ color: "rgb(19,145,210)" }}>Tre</span>
        <span style={{ color: "rgb(252,158,21)" }}>val</span>
        <GiPlanePilot style={{ fontSize: "3vw" }} />
        <span style={{ color: "rgb(227,64,61)" }}>eo</span></p>
         <span className="close-modal-btn" onClick={()=>{
             history.push(`/main/login`)
         }} ><CgCloseR style={{position:"relative",top:"-30px",right:"0px"}}/></span>
        </div>

        <div className="modal-content">
            <div className="modal-body">
            <p>We are happy to have you join us</p>
            </div>
            <div className="modal-footer">
             <button onClick={()=>{
            
            // console.log("ahmed",url)
             history.push(`/main/login`)
            
             }}   className="btn-cancel">Close</button>
            
            </div>

        </div>
        </div>
    )
}
export default Modal 
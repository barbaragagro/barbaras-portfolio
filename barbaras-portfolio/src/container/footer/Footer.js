import React from "react";
import "./Footer.css";
import ScrollService from "../../utilities/ScrollService";
export default function Footer() {
  return (
    <div className="scroll-container">
      <button  onClick={() =>ScrollService.scrollHandler.scrollToHome()} className="btn-scroll"
       
      >
        {" "} 
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}
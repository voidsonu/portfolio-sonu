import React from 'react'
import './Header.css'

export const Footer = () => {
    return (
        <>
        <div>
           <div className="footer">
           <div className="socialShare">
            <h5>Check me out on social media</h5>
        <a href="https://www.facebook.com/sonudraco"><i className="fa fa-facebook-official fa-lg"></i></a>
        <a href="https://www.linkedin.com/in/sonu-c-8225a9139"><i className="fa fa-linkedin-square fa-lg"></i></a>
        <i className="fa fa-instagram fa-lg"></i>
        </div>
           </div>
        </div>
        </>
    )
}
// (function smoothscroll(){
//     var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
//     if (currentScroll > 0) {
//          window.requestAnimationFrame(smoothscroll);
//          window.scrollTo (0,currentScroll - (currentScroll/5));
//     }
// })(); smooth scrolls
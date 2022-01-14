import React from 'react';
import './Header.css';

export const Header =() =>{
    return(
        <div className='top-header'>
            <div className="main-header">
            <div className="logo">
                <h1>Sonu Chandara</h1>
            </div>
            <div className="menus">
                <ul>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact Me</a></li>
                </ul>
            </div>
            </div>
        </div>
    )
}
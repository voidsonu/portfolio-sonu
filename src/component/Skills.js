import React from "react";
import './Skills.css';

export const Skills = ()=>{
    return(
        <>
        <div className="main-container">
            <h2 className="skills" id="Skills">Skills</h2>
            <div className="container1">
                <div className="info1">
                <h3>Technical :</h3>
                    <ul>
                        <li>Reactjs</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>Css</li>
                        <li>Html</li>
                        <li>Github</li>
                    </ul>
                </div>
                <div className="info2">
                <h3>Tools/Software :</h3>
                    <ul>
                        <li>Vs-Code</li>
                        <li>Adobe Illustrator</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
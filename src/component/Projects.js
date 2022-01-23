import React from 'react';
import './Projects.css';

export const Projects =() =>{
    return(
        <>
        <div className="main-container">
                <h2 id="Projects">Projects</h2>
                <ul id='project'>
                    <li><h4>Hospital Management System</h4></li>
                    <p>A portal made for booking hospital services like arranging a appointment and checking either doctor is available or admit patient etc. by help of "Html, Css, javaScript, Bootstrap, Php and Mysql." </p>
                </ul>
                <ul id='project2'>
                    <li><h4>Todo list</h4></li>
                    <p>Creative Todo-list which you could add any task as well as modify. link to github:</p>
                     <a href="https://github.com/voidsonu/Todo_list.git" target="_blank"> Todo-List</a>             
                </ul>
            
        </div>
        </>
    )
}
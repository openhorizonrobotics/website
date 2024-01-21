import React from 'react';
import ReactDOM from 'react-dom/client';
import './Error404.css';

const HOME_PAGE_URL = "";

const ROBOT_404_URL = "/img/ROBO404.png";
const ERR_404 = "img/ERROR_text.png";
const TEXT_404 = "img/404_text.png";
const BKGND_404 = "img/background_404.png";

function Error404() {
    return (
        <div
            
        >
            <div className='split_vert_parent'>
                <div className='split_vert_child'>
                    <img src={ROBOT_404_URL} />
                </div>
                <div className='split_vert_child_center_align'>
                    <div>
                        <img src={ERR_404} />
                        <img src={TEXT_404} />
                        <p>This robot cannot localise itself.
Did you load in the correct ROS package?</p>
                        <p>Go back to <a href={HOME_PAGE_URL}>Home page</a></p>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Error404;
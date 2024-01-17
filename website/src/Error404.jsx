import React from 'react';
import ReactDOM from 'react-dom/client';
import './Error404.css';

const ROBOT_404_URL = "/img/ROBO404.png";

function Error404() {
    return (
        <div >
            <div className='split_vert_parent'>
                <div className='split_vert_child'>
                    <img src={ROBOT_404_URL} />
                </div>
                <div className='split_vert_child_center_align'>
                    <div>404 message goes here</div>
                </div>
            </div>

        </div>
    );
}


export default Error404;
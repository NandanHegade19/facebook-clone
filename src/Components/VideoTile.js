import React from 'react';
import '../Styles/VideoTile.css';

function VideoTile({image, title}) {
    return (
        <div className = "videotile">
            <img className = "videotile__thumbnail" src = {image} alt = ""/>
            <div className = "videotile__info">
                <div className = "videotile__title">
                    <h4> {title} </h4>
                    
                </div>
            </div>
        </div>
    )
}

export default VideoTile;

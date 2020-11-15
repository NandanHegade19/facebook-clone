import React from 'react';
import '../Styles/VideoContent.css';
import VideoTile from './VideoTile';

function VideoContent() {
    return (
        <div className = "videocontent">
            <h2>Trending</h2>
            <div className = "videocontent__recomended"> 
                <VideoTile 
                    image = "https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821__340.jpg" 
                    title = "Peak Fall Foliage in New England (Experience Autumn)" 
                    
                /> 
                <VideoTile 
                    image = "https://i.ytimg.com/vi/512y6VuTVz0/maxresdefault.jpg" 
                    title = "*SNOWY* TREEHOUSE CABIN FULL TOUR! | The Beech Treehouse by Levi Kelly" 
                   
                /> 
                <VideoTile 
                    image = "https://cdn.pixabay.com/photo/2020/11/04/19/22/windmill-5713337__340.jpg" 
                    title = "Windmill"
                /> 
                <VideoTile 
                    image = "https://cdn.pixabay.com/photo/2020/07/17/19/22/landscape-5415202__340.jpg" 
                    title = "Switzerland Summer Alps" 
                /> 
                <VideoTile 
                    image = "https://images.unsplash.com/photo-1543055932-84b75bfd3a77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" 
                    title = "View from above" 
                /> 
                <VideoTile 
                    image = "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" 
                    title = "Volcano, Hawaii" 
                />
                <VideoTile 
                    image = "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" 
                    title = "Manhattan, New York, United States" 
                /> 
                <VideoTile 
                    image = "https://images.unsplash.com/photo-1505976231433-d7ebe8382bb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" 
                    title = "Street market, food tour, Portland, United States" 
                /> 
            </div>

        </div>
    )
}

export default VideoContent;

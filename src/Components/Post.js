import { Avatar } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import '../Styles/Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import AccountCircleIclon from '@material-ui/icons/AccountCircle'
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import firebase from 'firebase';

const Post = ({postId, profilePic, imgURL, username, timestamp, message }) => {

    const [{ user }, dispatch] = useStateValue()
    const randmLikes = Math.floor(Math.random() * 200)
    const [thisLike, setThisLike] = useState(randmLikes);
    const [thisComment, setThisComment] = useState([]);
    const [allComments, setAllComments] = useState([]);
   
    useEffect(() => {
        let unsubscribe;
        if(postId){
            unsubscribe = db
                            .collection("posts")
                            .doc(postId)
                            .collection("comments")
                            .orderBy('timestamp', 'desc')
                            .onSnapshot((snapshot) => {
                                setAllComments(snapshot.docs.map((doc) => doc.data()));
                            });
        }
        return () => {
            unsubscribe();
        }
    }, [postId])
    const postComment = (evt) => {
        evt.preventDefault();

        db.collection("posts").doc(postId).collection("comments").add({
            text: thisComment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setThisComment('');
    }
    
    return (
        <div className='post' >
            <div className="post__top">
                <Avatar src={profilePic} className='post__avatar' />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>

            {
                imgURL ? (
                    <div className="post__image">
                        <img src={imgURL} />
                    </div>
                ) : (
                        console.log('DEBUG >>> no image here')
                    )
            }
            <div className = "counters">
                <div className = "counter_likes">
                    Likes: {thisLike}
                </div>
                <div className = "counter_comments">
                     {allComments.length} Comments
                </div>
            </div>
            <div className="post__options">
                <div className="post__option" >
                    <ThumbUpIcon />
                    <button onClick = {e => setThisLike(thisLike+1)} className = "postbtn">Like</button>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <button className = "postbtn">Comment</button>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <button className = "postbtn">Share</button>
                </div>
            </div>
            {
                user && (
                    <div className = "post__commentBox">
                    <form >
                        <input type = "text" value = {thisComment} onChange = {e => setThisComment(e.target.value)} placeholder = "Write a comment..." className = "post__comment-input"/>
                        <button type = "submit" disabled = {!thisComment} onClick = {postComment} className = "post__comment-button">Post</button>
                    </form></div>
                )
            }
            {
                <div className = "post__comments">
                    {allComments.map((comm) => (
                        <p><strong> {comm.username} </strong> {comm.text} </p>
                    ))}
                </div> 
            
            }
        </div>
    )
}

export default Post
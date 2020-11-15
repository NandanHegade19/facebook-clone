import React, { useEffect, useState } from 'react'
import '../Styles/Feed.css'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from './Post'
import db from '../firebase'

const Feed = () => {
   const [posts, setPosts] = useState();

    useEffect(() => {
       db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
           setPosts(snapshot.docs.map((doc) => ({
               id: doc.id,
               data: doc.data()
           })))
       ))
    }, [])

    return (
        <div className='feed' >
            <StoryReel />
            <MessageSender />
            {posts?.map((post) => (
                <Post key = {post.id} 
                postId = {post.id}
                profilePic={post.data.profilePic}
                timestamp={post.data.timestamp}
                message={post.data.message}
                username = {post.data.username}
                imgURL={post.data.image}/>
            ))}
            
        </div>
    )
}

export default Feed
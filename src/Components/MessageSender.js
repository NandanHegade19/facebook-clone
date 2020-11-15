import React, { useState } from 'react'
import '../Styles/MessageSender.css'
import { Avatar, Input } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import { useStateValue } from '../StateProvider'
import db from '../firebase';
import {storage} from '../firebase';
import firebase from 'firebase';


const MessageSender = () => {
    const [input, setInput] = useState('')
    //const [imageUrl, setImageUrl] = useState('')
    const [image, setImage] = useState(null)
    const [{ user }, dispatch] = useStateValue()
    const [progressbar, setProgressbar] = useState(0);
    console.log(user)

    const chooseFile = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(image){
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
        
        //const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                //progress function ...
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgressbar(progress);
            },
            (error) => {
                //error function...
                //console.log(error);
                alert(error.message);
            },
            () => {
                //storage in db
                storage.ref('images')
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    //post image in db
                    db.collection('posts').add({
                        message: input,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        profilePic: user.photoURL,
                        username: user.displayName,
                        image: url
                    });
                    setProgressbar(0);
                    setInput('')
                    setImage(null)
                })
            }
        )
    }else{
        //no image post
            db.collection('posts').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                profilePic: user.photoURL,
                username: user.displayName,
                image: ''
            });
            setInput('')
        }
    }


    return (
        <div className='messageSender' >
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form >
                    <input type="text" className='messageSender__input' placeholder= {`Whats on your mind? ${user.displayName}`}
                    value = {input} onChange = {e => setInput(e.target.value)} />
                    <Input type="file" className='messageSender__fileSelector' onChange = {chooseFile} />
                    <button onClick={handleSubmit} type='submit' >Hidden Submit</button>
                </form>
            </div>
            <progress value = {progressbar} max = "100" className = "imageUpload__progress" /><br/>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
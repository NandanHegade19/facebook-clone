import { Button } from '@material-ui/core'
import React from 'react'
import '../Styles/Login.css'
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
import Grid from '@material-ui/core/Grid';


const Login = () => {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })

            }).catch(error => alert(error.message))
    }
    return (
        <Grid container spacing={2}>
            <Grid container spacing={3} className = "loginpage">
                <Grid item xs={12} sm={6} className = "logo">
                    <img src = "https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="fb_logo"/>
                    <h2>Facebook helps you connect and share with the people in your life.</h2>
                </Grid>
                <Grid item xs={12} sm={6} className = "login">
                    <input type = "text" placeholder = "Email address or phone number" className = "inputs"/>
                    <input type = "password" placeholder = "Password" className = "inputs"/>
                    <Button type='submit' disabled onClick={signIn}>Sign In</Button>
                    <a>Forgotten password?</a>
                    <hr/>
                    <Button type='submit' onClick={signIn}>Sign In with Google</Button>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} className = "footer">
                
                <hr className = "hr"/>
                
                <p>THIS IS A FACEBOOK CLONE WEBSITE - No Facebook © 2020</p>
            </Grid>
        </Grid> 
    )
}

export default Login

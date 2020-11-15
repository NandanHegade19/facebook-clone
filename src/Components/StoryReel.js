import React from 'react'
import Story from './Story'
import '../Styles/StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel' >
            <Story
                image='https://cdn.pixabay.com/photo/2015/02/25/07/39/church-648430__340.jpg'
                profileSrc='https://cdn.pixabay.com/photo/2013/07/13/13/24/snow-160956__340.png'
                title='Christmas'
            />
            <Story
                image='https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg'
                profileSrc='https://cdn.pixabay.com/photo/2017/12/17/21/44/coffee-3025022__340.jpg'
                title='Food Blog'
            />
            <Story
                image='https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg'
                profileSrc='https://cdn.pixabay.com/photo/2017/05/23/17/54/summer-2337955__340.jpg'
                title='Vacation Ideas'
            />
            <Story
                image='https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg'
                profileSrc='https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg'
                title='Pets funny'
            />
            <Story
                image='https://cdn.pixabay.com/photo/2016/11/18/15/44/audience-1835431__340.jpg'
                profileSrc='https://cdn.pixabay.com/photo/2020/11/03/09/42/violin-5709254__340.jpg'
                title='Music'
            />
        </div>
    )
}

export default StoryReel
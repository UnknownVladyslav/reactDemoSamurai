import React from 'react'
import classes from './StartScreen.module.css'

const StartScreen = (props) => {
   return (
       <div className={classes.startPageWrapper}>
        <h1 className={classes.startTitle}>Welcome to the club</h1>
       </div>
   )
}

export default StartScreen
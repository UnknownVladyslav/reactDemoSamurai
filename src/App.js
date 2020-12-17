import React from 'react'
import classes from './App.module.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {BrowserRouter, Route} from 'react-router-dom'
import StartScreen from "./components/startScreen/StartScreen";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



const App = props => {
    // debugger
    return (
        // <BrowserRouter>
            <div className={classes.appWrapper}>
                <HeaderContainer />
                <div className={classes.flexContainer}>
                    <Navbar
                        // state={props.state.sidebar}
                    />
                    <div className={classes.appWrapperContent}>
                        <Route render={ () => <StartScreen /> } exact path={'/'} />

                        <Route render={ () =>  <DialogsContainer />} exact path={'/dialogs'}/>

                        <Route render={ () => <ProfileContainer />} exact path={'/profile/:userId?'} />

                        <Route exact path={'/users'} render={ () => <UsersContainer /> } />

                        <Route render={ () => <News />} exact path={'/news'}/>
                        <Route render={ () => <Music />} exact path={'/music'}/>
                        <Route render={ () => <Settings />} exact path={'/settings'}/>
                    </div>
                </div>
            </div>
        // </BrowserRouter>
    );
}

export default App;

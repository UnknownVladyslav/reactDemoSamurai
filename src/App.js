import React from 'react'
import classes from './App.module.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {BrowserRouter, Route} from 'react-router-dom'
import StartScreen from "./components/startScreen/StartScreen";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = props => {
    // debugger
    return (
        <BrowserRouter>
            <div className={classes.appWrapper}>
                <Header/>
                <div className={classes.flexContainer}>
                    <Navbar state={props.state.sidebar} />
                    <div className={classes.appWrapperContent}>
                        <Route render={ () => <StartScreen /> } exact path={'/'} />

                        <Route render={ () =>  <DialogsContainer
                            store={props.store}

                        />} exact path={'/dialogs'}/>

                        <Route render={ () => <Profile
                            store={props.store}

                        />} exact path={'/profile'}/>

                        <Route render={ () => <News />} exact path={'/news'}/>
                        <Route render={ () => <Music />} exact path={'/music'}/>
                        <Route render={ () => <Settings />} exact path={'/settings'}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

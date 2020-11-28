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


const App = props => {
    return (
        <BrowserRouter>
            <div className={classes.appWrapper}>
                <Header/>
                <div className={classes.flexContainer}>
                    <Navbar/>
                    <div className={classes.appWrapperContent}>
                        {/*<Route component={Dialogs} exact path={'/dialogs'}/>*/}
                        {/*<Route component={Profile} exact path={'/profile'}/>*/}
                        {/*<Route component={News} exact path={'/news'}/>*/}
                        {/*<Route component={Music} exact path={'/music'}/>*/}
                        {/*<Route component={Settings} exact path={'/settings'}/>                */}


                        <Route render={ () =>  <Dialogs posts={props.posts} dialogs={props.dialogs} messages={props.messages}  />} exact path={'/dialogs'}/>
                        <Route render={ () => <Profile posts={props.posts} />} exact path={'/profile'}/>
                        <Route render={ () => <News posts={props.posts} />} exact path={'/news'}/>
                        <Route render={ () => <Music posts={props.posts} />} exact path={'/music'}/>
                        <Route render={ () => <Settings posts={props.posts} />} exact path={'/settings'}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

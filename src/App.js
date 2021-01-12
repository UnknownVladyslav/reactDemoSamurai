import React from 'react'
import {Route, withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import StartScreen from "./components/startScreen/StartScreen";
import classes from './App.module.css'
import Loader from "./assets/Loader/Loader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Loader />
        }
        return (
            <div className={classes.appWrapper}>
                <HeaderContainer/>
                <div className={classes.flexContainer}>
                    <Navbar/>
                    <div className={classes.appWrapperContent}>
                        <Route render={() => <StartScreen/>} exact path={'/'}/>

                        <Route render={() => <DialogsContainer/>} exact path={'/dialogs'}/>

                        <Route render={() => <ProfileContainer/>} exact path={'/profile/:userId?'}/>

                        <Route exact path={'/users'} render={() => <UsersContainer/>}/>

                        <Route render={() => <Login/>} exact path={'/login'}/>

                        <Route render={() => <News/>} exact path={'/news'}/>
                        <Route render={() => <Music/>} exact path={'/music'}/>
                        <Route render={() => <Settings/>} exact path={'/settings'}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)


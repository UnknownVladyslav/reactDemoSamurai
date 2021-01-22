import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = this.props.authorizedUserId
            // Если не имеем айди, делаем программный редирект через метод push у history
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         userId={this.props.match.params.userId}
                         authorizedUserId={this.props.authorizedUserId}
                         updateStatus={this.props.updateStatus}
                         posts={this.props.posts}
                />
            </div>
        )
    }
}


let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    posts: state.profilePage.posts
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter
    // withAuthRedirect
)(ProfileContainer)


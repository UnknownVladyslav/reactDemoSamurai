import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow, toggleFollowingProgress,
    getUsersThunkCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import Loader from "../../assets/Loader/Loader";
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";




class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }


    onPageChanged = pageNumber => {
         this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.loading ? <Loader/> :
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                    // loading={this.props.loading}
                />
            }
        </>
    }
}


let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        // loading: state.usersPage.loading,
        followingInProgress: state.usersPage.followingInProgress
    }
}



export default compose(
    connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsersThunkCreator
    }),
    withAuthRedirect
)(UsersContainer)
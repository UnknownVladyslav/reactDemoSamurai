import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow, toggleFollowingProgress,
    requestUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import Loader from "../common/Loader/Loader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress, getLoading,
    getTotalUsersCount,
    getUsers,
    pageSize
} from "../../redux/users-selectors";




class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }


    onPageChanged = pageNumber => {
        let {pageSize} = this.props
         this.props.requestUsers(pageNumber, pageSize)
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
                    loading={this.props.loading}
                />
            }
        </>
    }
}

let mapStateToProps = state => {
    return {
        users: getUsers(state),
        pageSize: pageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        loading: getLoading(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers
    })
)(UsersContainer)
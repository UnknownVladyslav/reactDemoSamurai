import React from 'react'
import {connect} from "react-redux";
import * as axios from 'axios'
import {
    finishLoadingAC,
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC
} from "../../redux/users-reducer";
import Users from "./Users";


class UsersContainer extends React.Component {

    componentDidMount() {
        // alert('NEW')
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.finishLoading()
            })
    }


    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.finishLoading()
            })
    }

    render() {
          return  <Users
              totalUsersCount={this.props.totalUsersCount}
              pageSize={this.props.pageSize}
              currentPage={this.props.currentPage}
              onPageChanged={this.onPageChanged}
              users={this.props.users}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
              loading={this.props.loading}
          />
    }
}



let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        loading: state.usersPage.loading
    }
}

let mapDispatchToProps = dispatch => {
    return {
        follow: userID => {
            dispatch(followAC(userID))
        },
        unfollow: userID => {
            dispatch(unfollowAC(userID))
        },
        setUsers: users => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: pageNumber => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: totalCount => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        finishLoading: () => {
            dispatch(finishLoadingAC())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
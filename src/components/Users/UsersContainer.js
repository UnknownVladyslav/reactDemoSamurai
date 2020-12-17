import React from 'react'
import {connect} from "react-redux";
import * as axios from 'axios'
import {
    follow,
    setCurrentPage, toggleLoading,
    setUsers,
    setUsersTotalCount,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Loader from "../../assets/Loader/Loader";


class UsersContainer extends React.Component {

    componentDidMount() {
        // alert('NEW')
        this.props.toggleLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials: true
        })
            .then(response => {
                this.props.toggleLoading(false)
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
            })
    }


    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
            withCredentials: true
        })
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.toggleLoading(false)
            })
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
        loading: state.usersPage.loading
    }
}

// let mapDispatchToProps = dispatch => {
//     return {
//         follow: userID => {
//             dispatch(followAC(userID))
//         },
//         unfollow: userID => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: users => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: pageNumber => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: totalCount => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleLoading: loading => {
//             dispatch(setLoadingAC(loading))
//         }
//     }
// }

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setUsersTotalCount,
        toggleLoading
    })(UsersContainer)
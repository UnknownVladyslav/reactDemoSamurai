import * as axios from 'axios'

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    baseURL: baseUrl,
    headers: {
        'API-KEY': '9b74af9a-8d65-4cc8-8515-3ab319e99ba4'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize = 10) {
        return instance(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
        getProfile(userId) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}


// export const profileAPI = {
//     getProfile(currentPage, pageSize = 10) {
//         return instance(`follow?page=${currentPage}&count=${pageSize}`)
//             .then(response => response.data)
//     }
// }
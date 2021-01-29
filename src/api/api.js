import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "31b70b9e-d7aa-4632-a4ef-7523f1a6b385"
        //"API-KEY": "3ab00cd7-4e1c-4926-882c-72487ff87092"
    }
});

export const userAPI = {

    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile(userID) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userID)
    }
}

export const profileAPI = {
    getProfile(userID) {
        return instance.get(`profile/${userID}`)
            .then(response => response.data)
    },
    getStatus(userID) {
        return instance.get(`profile/status/` + userID)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status })
            .then(response => response.data)
    }
}

// после рефактора функции
export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}



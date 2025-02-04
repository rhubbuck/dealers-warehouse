import { defineStore } from "pinia";
import axios from 'axios';


export const useAuthStore = defineStore('auth', {
    state: () => ({ //global auth state
        username: null,
        error: null
    }),
    getters: {
        userName: (state) => state.name,
    },
    actions: {
        // Authenticate user using token
        async getUser() {
            if (localStorage.getItem('token')) {
                const config = {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }

                await axios
                    .get('/api/user', config)
                    .then(res => {
                        if (res.status >= 200 && res.status < 300) {
                            this.username = res.data.name
                        }
                    })
                    .catch(error => {
                        if (error.response) {
                            return alert('Error: ' + error.response.data.message)
                        } else if (error.request) {
                            console.log(error.request)
                        } else {
                            console.log('Error - ', error);
                        }
                    })
            }
        },

        // Register or Login user 
        async authenticateUser(formData, endpoint) {
            const body = JSON.stringify(formData);
            await axios
                .post(`/api/${endpoint}`, body)
                .then(res => {
                    localStorage.setItem('token', res.data.token)
                    this.username = res.data.user
                    this.router.push('/')
                })
                .catch(error => {
                    if (error.response) {
                        this.error = error.response.data.message
                    } else if (error.request) {
                        console.log(error.request)
                    } else {
                        console.log('Error - ', error);
                    }
                })
        },

        // Logout user
        async logoutUser() {
            const res = await fetch('/api/logout', {
                method: 'post',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            })

            const data = await res.json()

            if (res.ok) {
                this.user = null
                localStorage.removeItem('token')
                this.router.push('/')
                location.reload()
            }
        }
    },
})
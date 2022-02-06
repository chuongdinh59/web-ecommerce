import { API } from "constant";


const authService = {
    login(data) {
        //username
        //password
        return fetch(`${API}/login`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => res.json())
    },
    register(data) {
        //username
        //password
        //name
        return fetch(`${API}/register`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => res.json())
    },
    refreshToken() {
        const token = JSON.parse(localStorage.getItem('token'))
        return fetch(`${API}/register`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(token.refreshToken)
        }).then(res => res.json())
    },
}

export default authService;
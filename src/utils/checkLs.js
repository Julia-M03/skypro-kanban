export function getEmptyUser() {
    return {
        token: "",
        name: "",
        isAuth: false,
    }
}

export function checkLs() {
    const userData = window.localStorage.getItem('userInfo')

    if (userData)
        return {...JSON.parse(userData), isAuth: true}
    else
        return getEmptyUser()
}

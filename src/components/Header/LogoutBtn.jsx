import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth';
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout()
            .then(() => { dispatch(logout()) })
    }
    return (
        <button
            className='inline-block px-3 duration-200 hover:bg-blue-100 rounded-full items-center'
            onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default LogoutBtn

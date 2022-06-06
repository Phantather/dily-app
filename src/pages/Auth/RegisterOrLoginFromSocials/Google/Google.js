import React from 'react';
import {auth, provider} from "../../../../firebase/firebase";
import {AiFillGoogleCircle} from 'react-icons/ai'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {registerUser} from "../../../../redux/reducers/user";

const Google = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createOrLoginUser = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                dispatch(registerUser({obj: user}));
                localStorage.setItem('user', JSON.stringify(user));
                navigate('/')
            }).catch((error) => console.log(error));
    };

    return (
        <p className='auth__icon' onClick={createOrLoginUser}><AiFillGoogleCircle/></p>

    );
};

export default Google;
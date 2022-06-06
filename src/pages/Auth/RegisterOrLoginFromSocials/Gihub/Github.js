import React from 'react';
import {auth, providerGithub} from "../../../../firebase/firebase";
import {FaGithub} from 'react-icons/fa'
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {registerUser} from "../../../../redux/reducers/user";

const Github = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createOrLoginUserGithub = () => {
        signInWithPopup(auth, providerGithub)
            .then((result) => {
                const user = result.user;
                dispatch(registerUser({obj: user}));
                localStorage.setItem('user', JSON.stringify(user));
                navigate('/')
            }).catch((error) => console.log(error));
    };

    return (
        <p className='auth__icon' onClick={createOrLoginUserGithub}><FaGithub/></p>

    );
};

export default Github;
"use client";

import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import Login from './Login';
import Regis from './Regis';
import ChangePass from './ChangePass';

const FormLogin = () => {
    const [numberPage, setNumberPage] = useState(0);
    const [stores, setStores] = useState('')
    const printfLogin = () => {
        setNumberPage(1)
    }
    const printfLogout = () => {
        setNumberPage(0)
    }
    const printfChangePass = () => {
        setNumberPage(2)
    }
    useEffect(() => {
        if(sessionStorage.accessToken){
            setStores(sessionStorage.accessToken)
        }
        else{
            setStores('')
        }
    })
    return (
        <>
            {stores === '' ?
                <>
                    {numberPage === 0 ?
                        <Login template={printfLogin}/>
                        :
                        <>
                            {numberPage === 1 ?
                                <Regis templateOne={printfLogout} templateTwo={printfChangePass}/>
                                :
                                <ChangePass templateOne={printfLogin} templateTwo={printfLogout}/>
                            }
                        </>
                    }
                </>
            :
                <Profile/>
            }
        </>
    );
};

export default FormLogin;
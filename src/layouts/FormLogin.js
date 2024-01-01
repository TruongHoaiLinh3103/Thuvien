"use client";

import React, { useState } from 'react';
import Profile from './Profile';
import Login from './Login';
import Regis from './Regis';
import ChangePass from './ChangePass';

const FormLogin = () => {
    const [numberPage, setNumberPage] = useState(0);
    const printfLogin = () => {
        setNumberPage(1)
    }
    const printfLogout = () => {
        setNumberPage(0)
    }
    const printfChangePass = () => {
        setNumberPage(2)
    }
    const stores = sessionStorage.getItem("accessToken");
    return (
        <>
            {!stores ?
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
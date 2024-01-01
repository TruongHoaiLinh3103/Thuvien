"use client";

import React,  { useRef } from 'react';
import logo from "../../public/ic-logo.png";
import google from "../../public/ic-google.png";
import facebook from "../../public/ic-facebook.png";
import direita from "../../public/ic-background-direita.svg";
import Image from 'next/image';
import "../styles/formlogin.scss";
import axios from 'axios';
import {changePassScheme } from '@/utils/ViewForm';

const ChangePass = (props) => {
    const userChangePass = useRef("")
    const passOld = useRef("");
    const passNew = useRef("");
    const cFPassNew = useRef("");
    const changePassBTN = async () => {
        if(userChangePass.current.value === ""){
            userChangePass.current.focus();
        }else if(passOld.current.value === ""){
            passOld.current.focus();
        }else if(passNew.current.value === ""){
            passNew.current.focus();
        }else if(cFPassNew.current.value === ""){
            cFPassNew.current.focus();
        }else{
            if(cFPassNew.current.value !== passNew.current.value){
                alert("Confirm password is incorrect!");
                cFPassNew.current.value = ""
                cFPassNew.current.focus();
            }else{
                const data = {
                    user: userChangePass.current.value,
                    oldPassword: passOld.current.value,
                    newPassword: passNew.current.value,
                }
                const isValid = await changePassScheme.isValid(data);
                if(isValid){
                    axios.patch("http://localhost:4000/auth/changepassword", data).then((res) => {
                        if (res.data.error) {
                            alert(res.data.error);
                        }
                        else{
                            alert(res.data.success)
                        }
                    });
                }else{
                    alert("Password minimum 4 characters and maximum 20 characters!")
                }
            }
        }
    }
    return (
        <div className='Login'>
            <div className='User'>
                <section className="esquerda">
                    <Image src={logo} alt="Imagem logo" className="imagem__logo" />
                    <h3 className="titulo__login">Change Password</h3>
                    <span className="subtitulo">Visit LisohAnikey&apos;s platform</span>
                    <form>
                        <section className="caixa__input">
                            <label>User name</label>
                            <input type="text" placeholder="User name" ref={userChangePass}/>
                        </section>
                        <section className="caixa__input">
                            <label htmlFor='passOld'>Old password</label>
                            <input type='password' ref={passOld} name="passOld" placeholder="Old password"/>
                        </section>
                        <section className="caixa__input">
                            <label htmlFor='passNew'>New password</label>
                            <input type='password' ref={passNew} name="passNew" placeholder="New password"/>
                        </section>
                        <section className="caixa__input">
                            <label htmlFor='cFPassNew'>Confirm new password</label>
                            <input type='password' ref={cFPassNew} name="cFPassNew" placeholder="Confirm new password"/>
                        </section>
                    </form>
                    <section className="controle__acesso">
                        <button type="submit" onClick={() => changePassBTN()}>Change password</button>
                        <button className="botao__registrar" onClick={() => props.templateOne()}>
                            <span className="botao__registrar--texto">Register</span>
                        </button>
                        <button className="botao__registrar" onClick={() => props.templateTwo()}>
                            <span className="botao__registrar--texto">Login</span>
                        </button>
                    </section>
                    <section className="separador">
                        <span></span>
                        <span>You can log in to social networks</span>
                        <span></span>
                    </section>
                    <section className="controle__login_social">
                        <a href="*">
                            <Image src={google} alt="Logo Google" />
                            Login com Google
                        </a>
                        <a href="*">
                            <Image src={facebook} alt="Logo Facebook" />
                            Login com Facebook
                        </a>
                    </section>
                </section>
                <section className="direita">
                    <div className="background__imagem">
                        <div className="detalhe__vidro">
                            <div className="detalhe__vidro--interno">
                                <span>This is a website specializing in providing household appliances and feng shui items</span>
                            </div>
                        </div>
                        <Image src={direita} alt="Imagem fundo" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ChangePass;
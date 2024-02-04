"use client";

import React,  { useRef } from 'react';
import logo from "../../public/ic-logo.png";
import google from "../../public/ic-google.png";
import facebook from "../../public/ic-facebook.png";
import direita from "../../public/ic-background-direita.svg";
import Image from 'next/image';
import "../styles/formlogin.scss";
import axios from 'axios';
import { loginScheme } from '@/utils/ViewForm';
import { useRouter } from 'next/navigation';

const Login = (props) => {
    const userLogin = useRef("");
    const passwordLogin = useRef("");
    const router = useRouter()
    const login = async () => {
        if(userLogin.current.value === ""){
            userLogin.current.focus();
        }else if(passwordLogin.current.value === ""){
            passwordLogin.current.focus();
        }else{
            const dataLogin = {
                user: userLogin.current.value,
                password: passwordLogin.current.value,
            }
            const isValid = await loginScheme.isValid(dataLogin);
            if(isValid === true){
                axios.post("http://localhost:4000/auth/login", dataLogin).then((res) => {
                    if(res.data.error){  
                        alert(res.data.error)
                    }
                    else{
                        sessionStorage.setItem("accessToken", res.data)
                        sessionStorage.setItem("user", userLogin.current.value)
                        axios.get(`http://localhost:4000/account/${sessionStorage.user}`).then((res) => {
                            if(res && res.data){
                                sessionStorage.setItem("avatar", res.data.img)
                            }else{
                                sessionStorage.setItem("avatar", "https://i.pinimg.com/originals/e1/2e/a0/e12ea08b2fd037c957a19aede3e5d3a8.jpg")
                            }
                        })
                        router.push("/");
                        alert("Logged in successfully")
                    }
                })
            }else{
                alert("Something is wrong here, please try again!")
            }
        }
    }
    return (
        <div className='Login'>
            <div className='User'>
                <section className="esquerda">
                    <Image src={logo} alt="Imagem logo" className="imagem__logo" />
                    <h3 className="titulo__login">Login</h3>
                    <span className="subtitulo">Visit LisohAnikey&apos;s platform</span>
                    <form>
                        <section className="caixa__input">
                            <label>User name</label>
                            <input type="text" placeholder="Email" ref={userLogin}/>
                        </section>
                        <section className="caixa__input">
                            <label>Password</label>
                            <input type="password" placeholder="Password" ref={passwordLogin}/>
                        </section>
                    </form>
                    <section className="controle__salvamento">
                        <span className="esqueceu__senha">
                            Forgot password?
                        </span>
                    </section>
                    <section className="controle__acesso">
                        <button type="submit" onClick={() => login()}>Login</button>
                        <button className="botao__registrar" onClick={() => props.template()}>
                            <span className="botao__registrar--texto">Register</span>
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
                                <span>This is a website developed by Anikey, and is an extremely large archive</span>
                            </div>
                        </div>
                        <Image src={direita} alt="Imagem fundo" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login;
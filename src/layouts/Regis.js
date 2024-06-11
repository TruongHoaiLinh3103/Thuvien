"use client";

import React,  { useRef } from 'react';
import logo from "../../public/ic-logo.png";
import google from "../../public/ic-google.png";
import facebook from "../../public/ic-facebook.png";
import direita from "../../public/ic-background-direita.svg";
import Image from 'next/image';
import "../styles/formlogin.scss";
import axios from 'axios';
import { regisScheme } from '@/utils/ViewForm';
import { useRouter } from 'next/navigation';

const Regis = (props) => {
    const userRegis = useRef("");
    const emailRegis = useRef("");
    const passwordRegis = useRef("");
    const confirmPassRegis = useRef("");
    const router = useRouter()
    const regis = async () => {
        if(userRegis.current.value === ""){
            userRegis.current.focus();
        }else if(emailRegis.current.value === ""){
            emailRegis.current.focus();
        }else if(passwordRegis.current.value === ""){
            passwordRegis.current.focus();
        }else if(confirmPassRegis.current.value === ""){
            confirmPassRegis.current.focus();
        }else{
            if(confirmPassRegis.current.value !== passwordRegis.current.value){
                alert("Confirm password is incorrect!");
                confirmPassRegis.current.value = ""
                confirmPassRegis.current.focus();
            }else{
                const dataRegis = {
                    user: userRegis.current.value,
                    email: emailRegis.current.value,
                    password: passwordRegis.current.value,
                }
                const isValid = await regisScheme.isValid(dataRegis);
                if(isValid === true){
                    axios.post("http://localhost:4000/auth", dataRegis)
                    .then((res) => {
                        if(res.data.error){
                            alert(res.data.error)
                        }else{
                            const dataLogin = {
                                user: userRegis.current.value,
                                password: passwordRegis.current.value,
                            }
                            axios.post("http://localhost:4000/auth/login", dataLogin).then((res) => {
                                if(res.data.error){  
                                    alert(res.data.error)
                                }
                                else{
                                    sessionStorage.setItem("accessToken", res.data)
                                    sessionStorage.setItem("user", userRegis.current.value)
                                    sessionStorage.setItem("avatar", "https://i.pinimg.com/originals/e1/2e/a0/e12ea08b2fd037c957a19aede3e5d3a8.jpg")
                                    router.push("/");
                                    alert("Register successfully")
                                }
                            })
                        }
                    })
                }else{
                    alert("Something is wrong here, please try again!")
                }
            }
        }
    }
    return (
        <div className='Login'>
            <div className='User'>
                <section className="esquerda">
                    <Image src={logo} alt="Imagem logo" className="imagem__logo" />
                    <h3 className="titulo__login">Register</h3>
                    <span className="subtitulo">Visit LisohAnikey&apos;s platform</span>
                    <form>
                        <section className="caixa__input">
                            <label>User name</label>
                            <input type="text" placeholder="User name" ref={userRegis}/>
                        </section>
                        <section className="caixa__input">
                            <label>Email</label>
                            <input type="text" placeholder="Email" ref={emailRegis}/>
                        </section>
                        <section className="caixa__input">
                            <label>Password</label>
                            <input type="password" placeholder="Password" ref={passwordRegis}/>
                        </section>
                        <section className="caixa__input">
                            <label>Confirm password</label>
                            <input type="password" placeholder="Confirm password" ref={confirmPassRegis}/>
                        </section>
                    </form>
                    <section className="controle__salvamento">
                        <span className="esqueceu__senha" onClick={() => props.templateTwo()}>
                            Change the password?
                        </span>
                    </section>
                    <section className="controle__acesso">
                        <button type="submit" onClick={() => regis()}>Register</button>
                        <button className="botao__registrar" onClick={() => props.templateOne()}>
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

export default Regis;
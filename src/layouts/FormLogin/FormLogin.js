"use client";

import React,  { useState } from 'react';
import logo from "../../assets/Svg/ic-logo.png";
import google from "../../assets/Svg/ic-google.png";
import facebook from "../../assets/Svg/ic-facebook.png";
import direita from "../../assets/Svg/ic-background-direita.svg";
import Image from 'next/image';
import "../../styles/formlogin.scss";

const FormLogin = () => {
    const [logout, setLogout] = useState(false);
    const checkLog = () => {
        setLogout(!logout);
    }
    return (
        <>
            {!logout ?
            (<div className='Login maxWidth1400px'>
                <div className='User'>
                    <section className="esquerda">
                        <Image src={logo} alt="Imagem logo" className="imagem__logo" />
                        <h3 className="titulo__login">Login</h3>
                        <span className="subtitulo">Visit LightShop's platform to shop</span>
                        <form>
                            <section className="caixa__input">
                                <label>Email</label>
                                <input type="text" placeholder="Email" />
                            </section>
                            <section className="caixa__input">
                                <label>Password</label>
                                <input type="password" placeholder="Password" />
                            </section>
                        </form>
                        <section className="controle__salvamento">
                            <span className="esqueceu__senha">
                                Forgot password?
                            </span>
                        </section>
                        <section className="controle__acesso">
                            <button type="submit">Login</button>
                            <button className="botao__registrar" onClick={() => checkLog()}>
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
                                    <span>This is a website specializing in providing household appliances and feng shui items</span>
                                </div>
                            </div>
                            <Image src={direita} alt="Imagem fundo" />
                        </div>
                    </section>
                </div>
            </div>)
            :
            (<div className='Login maxWidth1400px'>
                <div className='User'>
                    <section className="esquerda">
                        <Image src={logo} alt="Imagem logo" className="imagem__logo" />
                        <h3 className="titulo__login">Register</h3>
                        <span className="subtitulo">Visit LightShop's platform to shop</span>
                        <form>
                            <section className="caixa__input">
                                <label>User name</label>
                                <input type="text" placeholder="User name" />
                            </section>
                            <section className="caixa__input">
                                <label>Email</label>
                                <input type="text" placeholder="Email" />
                            </section>
                            <section className="caixa__input">
                                <label>Password</label>
                                <input type="password" placeholder="Password" />
                            </section>
                            <section className="caixa__input">
                                <label>Confirm password</label>
                                <input type="password" placeholder="Confirm password" />
                            </section>
                        </form>
                        <section className="controle__salvamento">
                            <span className="esqueceu__senha">
                                Change the password?
                            </span>
                        </section>
                        <section className="controle__acesso">
                            <button type="submit">Register</button>
                            <button className="botao__registrar" onClick={() => checkLog()}>
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
            </div>)
            }
        </>
    );
};

export default FormLogin;
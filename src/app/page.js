"use client";

import ProductMenu from "@/layouts/ProductMenu/ProductMenu";
import style from "../styles/page.module.scss";
import Slider from "@/layouts/Slider/Slider";
import Product from "@/layouts/Product/Product";
import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Cassianosch/programador.cs-reels/develop/slider-produtos-simples/assets/data/data.json')
      .then((res) => res.json()).then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
  if (isLoading){return <p>Loading...</p>}
  if (!data){return <p>No profile data</p>}
  return (
    <main className={`${style.main} maxWidth1400px`}>
        <Slider/>
        <ProductMenu/>
        <Product data ={data}/>
    </main>
  )
}
export default Home;

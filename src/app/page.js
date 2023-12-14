"use client";

import ProductMenu from "@/layouts/ProductMenu";
import style from "../styles/page.module.scss";
import Slider from "@/layouts/Slider";
import Product from "@/layouts/Product";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    const fecher = async () => {
      const res = await axios.get('https://zfakeapi.vercel.app/product');
      // https://raw.githubusercontent.com/Cassianosch/programador.cs-reels/develop/slider-produtos-simples/assets/data/data.json
      setData(res.data);
      setLoading(false);
    }
    fecher();
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

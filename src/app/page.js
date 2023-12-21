"use client";

import ProductMenu from "@/layouts/ProductMenu";
import style from "../styles/page.module.scss";
import SliderBanner from "@/layouts/SliderBanner";
import Product from "@/layouts/Product";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/home.scss";
import PageSection from "@/components/PageSection";

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    const fecher = async () => {
      const res = await axios.get('https://zfakeapi.vercel.app/product?_page=1&_limit=10&_sort=id&_order=desc');
      // https://raw.githubusercontent.com/Cassianosch/programador.cs-reels/develop/slider-produtos-simples/assets/data/data.json
      setData(res.data);
      setLoading(false);
    }
    fecher();
  }, [])
  if (isLoading){return(
    <ul className="wave-menu">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  )}
  if (!data){return <p>No profile data</p>}
  return (
    <main className={`${style.main} maxWidth1400px`}>
        <SliderBanner/>
        <ProductMenu/>
        <Product data ={data}/>
        <PageSection/>
    </main>
  )
}
export default Home;

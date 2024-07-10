"use client";

import ProductMenu from "@/layouts/ProductMenu";
import style from "../styles/page.module.scss";
import SliderBanner from "@/layouts/SliderBanner";
import Product from "@/layouts/Product";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/home.scss";
import PageSection from "@/components/PageSection";
import PageHome from "@/components/PageHome";

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    const fecher = async () => {
      const res = await axios.get('https://zfakeapi.vercel.app/product?_page=1&_limit=24&_sort=rating&_order=desc');
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
        <PageHome/>
    </main>
  )
}
export default Home;

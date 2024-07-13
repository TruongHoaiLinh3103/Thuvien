"use client";

import ProductMenu from "@/layouts/ProductMenu";
import style from "../styles/page.module.scss";
import SliderBanner from "@/layouts/SliderBanner";
import PageHome from "@/components/PageHome";

function Home() {
  return (
    <main className={`${style.main} maxWidth1400px`}>
        <SliderBanner/>
        <ProductMenu/>
        <PageHome/>
    </main>
  )
}
export default Home;

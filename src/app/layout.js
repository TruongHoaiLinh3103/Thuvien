"use client";

import { Inter } from 'next/font/google';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })
import "../styles/app.scss";
import { applicationIdJsonone } from '@/story/applicationIdJsonone';
import { Provider } from 'react-redux'
import { store } from '@/redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

// export const metadata = {
//   title: 'LisohAnikey',
//   description: 'Library in Anikey',
//   openGraph: {
//     title: "LisohAnikey",
//     description: "Library in Anikey",
//     type: "website",
//     author: ["Trương Hoài Linh", "Anikey"],
//     images: ["https://i.pinimg.com/originals/9c/5b/16/9c5b16ece475a3257034303b6023c8ee.jpg",]
//   },
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} maxWidth1400px`}>
        <Header/>
        <Provider store={store}>
          {/* <PersistGate loading={null} persistor={store}> */}
            {children}
          {/* </PersistGate> */}
        </Provider>
        <Footer/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(applicationIdJsonone) }}
        />
      </body>
    </html>
  )
}

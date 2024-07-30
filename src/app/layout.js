import { Inter } from 'next/font/google';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })
import "../styles/app.scss";
import { applicationIdJsonone } from '@/story/applicationIdJsonone';
import StoreProvider from './storeprovider';

export const metadata = {
  title: 'Home',
  description: 'Library',
  openGraph: {
    title: "Home",
    description: "Library",
    type: "website",
    author: ["Trương Hoài Linh", "Anikey"],
    images: ["https://i.pinimg.com/originals/ff/f7/8b/fff78bb663fc3ab1e1554c336eee4efc.jpg",]
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} maxWidth1400px`}>
        <StoreProvider>
          <Header/>
          {children}
          <Footer/>
        </StoreProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(applicationIdJsonone) }}
        />
      </body>
    </html>
  )
}

import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
const inter = Inter({ subsets: ['latin'] })
import "../styles/app.scss";
import { applicationIdJsonone } from '@/story/applicationIdJsonone';

export const metadata = {
  title: 'LightShop',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} maxWidth1400px`}>
        <Header/>
        {children}
        <Footer/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(applicationIdJsonone) }}
        />
      </body>
    </html>
  )
}

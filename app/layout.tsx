'use client'
import Layout from '@/shared/layout/Layout';
import '@/styles/globals.css';
import{Kanit} from 'next/font/google'
import localFont from 'next/font/local';


const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-kanit',
  display: 'swap',
})

const gotham = localFont({
  src: [
    {
      path: '../public/fonts/Gotham-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/GothamOffice-Bold.woff2',
      weight: '700',
      style: 'normal',
  
}, {
  path: '../public/fonts/GothamOffice-Regular.woff2',
  weight: '400',
  style: 'normal',  
}],
  variable: '--font-gotham',
  display: 'swap',
})



export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="az" className={`${kanit.variable} ${gotham.variable}`}>
      <body>
      <Layout>
      {children}
      </Layout>
    
     </body>
    </html>
  );
}


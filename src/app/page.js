'use client';
import Head from 'next/head';
import HeroSection from '../components/Hero';
import WaitlistForm from '../components/EmailList.jsx';


export default function HomePage() {
  return (
    <>
    <Head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1CYPPH7D2K"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1CYPPH7D2K');
            `,
          }}
        />
      </Head>
    <main>
      <HeroSection />
      <WaitlistForm/>
    </main>
    </>
  );
}

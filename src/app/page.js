'use client';
import Script from 'next/script';
import WaitlistForm from '../components/EmailList.jsx';
import NewHeroSection from '@/components/NewHero';

export default function HomePage() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1CYPPH7D2K"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1CYPPH7D2K');
        `}
      </Script>
      <main>
        <NewHeroSection />
        <WaitlistForm />
      </main>
    </>
  );
}
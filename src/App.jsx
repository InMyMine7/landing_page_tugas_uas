import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import LandingPage from '@/pages/LandingPage';

function App() {
  return (
    <>
      <Helmet>
        <title>CyberShield Darmajaya - Membangun Generasi Tangguh di Dunia Digital</title>
        <meta name="description" content="Jaga duniamu tetap aman dengan CyberGuard. Solusi keamanan siber kekinian dengan AI, dibuat oleh mahasiswa Teknik Informatika Universitas Darmajaya." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Helmet>
      <LandingPage />
      <Toaster />
    </>
  );
}

export default App;
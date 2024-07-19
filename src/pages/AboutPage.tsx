import React from 'react';
import PdfViewer from '../components/PdfViewer.tsx'; 
import Search from '../components/Search'
import Header from '../components/Header.tsx';

import '../styles/AboutPage.css';

const AboutPage = () => {
  const pdfUrl = 'https://drive.google.com/uc?id=1RmY7qGWzm8DL97lZ3OqaNl8MZ9eNP8Vt';
  

  return (
    <div className="app">

      <main>
          <Header/>
        <section className="pdf-viewer-section">
          <PdfViewer pdfUrl={pdfUrl} />
        </section>
      </main>
    </div>
  );
};

export default AboutPage;

import React from 'react';
import PdfViewer from '../components/PdfViewer.tsx'; 
import Search from '../components/Search'
import Header from '../components/Header.tsx';

import '../styles/AboutPage.css';

const AboutPage = () => {
  const pdfUrl = 'https://drive.google.com/uc?id=1ISU2fiADBW3KbMww6zKo2-CACdHNx32X';
  

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

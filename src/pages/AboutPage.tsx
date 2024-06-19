import React from 'react';
import PdfViewer from '../components/PdfViewer.tsx'; // Replace with your actual path

import '../styles/AboutPage.css';

const AboutPage = () => {
  // Replace 'pdfUrl' with the URL of your actual PDF file
  const pdfUrl = 'https://drive.google.com/uc?id=1jSEKI4bAF3SHEjSUu_Ekhj7YFOOD2A2c';
  

  return (
    <div className="app">
      <header className="header">
        {/* Your header content */}
      </header>

      <main>
        {/* Your main content sections */}

        <section className="pdf-viewer-section">
          <a href = "https://personalportfolio-six-theta.vercel.app/">
            <h2>Go Back Home</h2>
          </a>
          <PdfViewer pdfUrl={pdfUrl} />
        </section>
      </main>
    </div>
  );
};

export default AboutPage;

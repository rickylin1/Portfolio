import React from 'react';
import PdfViewer from '../components/PdfViewer.tsx'; // Replace with your actual path

import '../styles/AboutPage.css';

const AboutPage = () => {
  const pdfUrl = 'https://drive.google.com/uc?id=1ISU2fiADBW3KbMww6zKo2-CACdHNx32X';
  

  return (
    <div className="app">
      <header className="header">
        {/* Your header content */}
      </header>

      <main>
        {/* Your main content sections */}

        <section className="pdf-viewer-section">
          <a href = "https://www.rickylin.us/">
            <h2>Go Back Home</h2>
          </a>
          <PdfViewer pdfUrl={pdfUrl} />
        </section>
      </main>
    </div>
  );
};

export default AboutPage;

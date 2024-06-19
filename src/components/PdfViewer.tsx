import React from 'react';

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  return (
    <div className="pdf-viewer-container">
      <iframe
        title="PDF Viewer"
        src={`https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
        className="pdf-iframe"
        frameBorder="0"
        width="100%"
        height="800px"
      />
    </div>
  );
};

export default PdfViewer;

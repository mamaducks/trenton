import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import sample from "../maintenanceCraft.pdf";

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  
  const { pdf } = props;

  return (
    <Document
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
}

export function Samole() {
    return (
        <>
        <h4>All Pages</h4>
        <div className="all-page-container">
          <AllPages pdf={sample} />
        </div>
  
        <hr />
        </>
    );
}
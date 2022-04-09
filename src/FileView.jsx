import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

export function FileView() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="./math.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// // import './Sample.css';

// const options = {
//   cMapUrl: 'cmaps/',
//   cMapPacked: true,
//   standardFontDataUrl: 'standard_fonts/',
// };

// export function FileView() {
//   const [file, setFile] = useState('./Maintenance-Craft.pdf');
//   const [numPages, setNumPages] = useState(null);

//   function onFileChange(event) {
//     setFile(event.target.files[0]);
//   }

//   function onDocumentLoadSuccess({ numPages: nextNumPages }) {
//     setNumPages(nextNumPages);
//   }

//   return (
//     <div >
//       <header>
//         <h1>react-pdf sample page</h1>
//       </header>
//       <div >
//         <div >
//           <label htmlFor="file">Load from file:</label>{' '}
//           <input onChange={onFileChange} type="file" />
//         </div>
//         <div >
//           <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
//             {Array.from(new Array(numPages), (el, index) => (
//               <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//             ))}
//           </Document>
//         </div>
//       </div>
//     </div>
//   );
// }
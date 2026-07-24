import { pdfjs, Document, Page } from 'react-pdf';
import pdf from "../assets/rahul-tomar-resume.pdf"
import { useState } from 'react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import styles from './CVPage.module.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function PdfViewer() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoaded({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className={styles.viewer}>
      <Document file={pdf} onLoadSuccess={onDocumentLoaded}>
        {numPages &&
          Array.from(new Array(numPages), (_, index) => (
            <div key={index} className={styles.page}>
              <Page pageNumber={index + 1} scale={1.5} />
            </div>
          ))}
      </Document>
    </div>
  );
}
export default function CVPage() {
  return (
    <div className={styles.cv_container}>
      <a className={`${styles.cv_button}`} href={pdf} download>
        Download Resume
      </a>
      <PdfViewer />
    </div>
  );
}

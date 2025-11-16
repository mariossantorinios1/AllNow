"use client";
import { useState } from "react";

export default function PDFMerge() {
  const [files, setFiles] = useState<File[]>([]);
  const [mergedUrl, setMergedUrl] = useState("");

  const loadPDFLib = async () => {
    if (!(window as any).PDFLib) {
      await new Promise<void>((resolve, reject) => {
        const s = document.createElement("script");
        s.src = "https://unpkg.com/pdf-lib/dist/pdf-lib.min.js";
        s.onload = () => resolve();
        s.onerror = () => reject();
        document.body.appendChild(s);
      });
    }
    return (window as any).PDFLib;
  };

  const mergePDFs = async () => {
    if (!files.length) return;
    const PDFLib = await loadPDFLib();
    const { PDFDocument } = PDFLib;

    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      const buffer = await file.arrayBuffer();
      const pdf = await PDFDocument.load(buffer);
      const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      pages.forEach((p) => mergedPdf.addPage(p));
    }

    const mergedBytes = await mergedPdf.save();
    const blob = new Blob([mergedBytes], { type: "application/pdf" });
    setMergedUrl(URL.createObjectURL(blob));
  };

  return (
    <main style={{ padding: 24, background: "#000", minHeight: "100vh", color: "#fff" }}>
      <h1 style={{ textAlign: "center" }}>PDF Merge Tool</h1>
      <p style={{ textAlign: "center", opacity: 0.8 }}>
        Upload multiple PDFs and merge them into one file.
      </p>

      <div style={{ maxWidth: 600, margin: "30px auto", background: "#111", padding: 20, borderRadius: 12 }}>
        <input
          type="file"
          accept="application/pdf"
          multiple
          onChange={(e) => setFiles(e.target.files ? Array.from(e.target.files) : [])}
          style={{ width: "100%", padding: 12, borderRadius: 8, background: "#000", color: "#fff" }}
        />

        <button
          onClick={mergePDFs}
          style={{
            marginTop: 15,
            padding: "10px 16px",
            borderRadius: 8,
            background: "#0070f3",
            border: "none",
            color: "#fff",
            width: "100%",
          }}
        >
          Merge PDFs
        </button>

        {mergedUrl && (
          <div style={{ marginTop: 20, textAlign: "center" }}>
            <a
              href={mergedUrl}
              download="merged.pdf"
              style={{
                display: "inline-block",
                padding: "10px 16px",
                background: "#0f0",
                color: "#000",
                borderRadius: 8,
                fontWeight: "bold",
              }}
            >
              Download Merged PDF
            </a>
          </div>
        )}
      </div>
    </main>
  );
}

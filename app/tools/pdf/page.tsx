"use client";
import { useState, useRef, useEffect } from "react";

export default function PDFTools() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // noop — PDF.js θα φορτωθεί δυναμικά στο handleFile
  }, []);

  const handleFile = async (file: File | null) => {
    if (!file) return;
    setLoading(true);
    setText("");

    // Φορτώνουμε pdfjs από CDN (δεν απαιτεί εγκατάσταση)
    if (!(window as any).pdfjsLib) {
      await new Promise<void>((resolve, reject) => {
        const s = document.createElement("script");
        s.src = "https://unpkg.com/pdfjs-dist/build/pdf.min.js";
        s.onload = () => {
          // set workerSrc αν χρειαστεί (browser fallback)
          try {
            (window as any).pdfjsLib.GlobalWorkerOptions.workerSrc =
              "https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js";
          } catch {}
          resolve();
        };
        s.onerror = () => reject();
        document.body.appendChild(s);
      });
    }

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfjsLib = (window as any).pdfjsLib;
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      const pdf = await loadingTask.promise;
      let fullText = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        // eslint-disable-next-line no-await-in-loop
        const page = await pdf.getPage(i);
        const txtContent = await page.getTextContent();
        const pageText = txtContent.items.map((it: any) => it.str).join(" ");
        fullText += `\n\n--- Page ${i} ---\n\n` + pageText;
      }

      setText(fullText.trim());
    } catch (e) {
      setText("Failed to extract text from PDF.");
    }

    setLoading(false);
  };

  return (
    <main style={{ minHeight: "100vh", padding: 24, background: "#000", color: "#fff" }}>
      <h1 style={{ textAlign: "center" }}>PDF Tools Hub</h1>
      <p style={{ textAlign: "center", opacity: 0.8 }}>
        Upload PDF to extract text (client-side). No files are uploaded to any server.
      </p>

      <div style={{ maxWidth: 900, margin: "24px auto", background: "#111", padding: 18, borderRadius: 12 }}>
        <input
          ref={fileRef}
          type="file"
          accept="application/pdf"
          onChange={(e) => handleFile(e.target.files ? e.target.files[0] : null)}
          style={{ width: "100%", padding: 12, borderRadius: 8, background: "#000", color: "#fff", border: "1px solid #333" }}
        />

        <div style={{ marginTop: 12 }}>
          <button
            onClick={() => {
              if (fileRef.current?.files?.[0]) handleFile(fileRef.current.files[0]);
            }}
            style={{ padding: "10px 16px", background: "#0070f3", border: "none", color: "#fff", borderRadius: 8 }}
            disabled={loading}
          >
            {loading ? "Extracting..." : "Extract Text"}
          </button>
        </div>

        <div style={{ marginTop: 18 }}>
          <h3 style={{ marginBottom: 8 }}>Extracted Text</h3>
          <textarea
            value={text}
            readOnly
            rows={14}
            style={{ width: "100%", padding: 12, borderRadius: 8, background: "#000", color: "#ddd", border: "1px solid #333" }}
          />
        </div>
      </div>
    </main>
  );
}

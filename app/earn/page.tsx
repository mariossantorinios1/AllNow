export default function EarnPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #000, #111)",
        color: "white",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "40px", marginBottom: "30px" }}>
        💸 EverythingNow – Earn Center
      </h1>

      <p style={{ textAlign: "center", marginBottom: "40px", fontSize: "18px" }}>
        Όλοι οι τρόποι για να κερδίσεις χρήματα από το EverythingNow.  
        Σύντομα θα ενεργοποιηθούν 100+ revenue modules.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <Card title="Affiliate Hub" desc="Κέρδισε προμήθειες από προϊόντα & υπηρεσίες." />
        <Card title="AI Tools Marketplace" desc="Πούλα AI εργαλεία και αυτοματισμούς." />
        <Card title="Microjobs" desc="Κάνε μικροδουλειές και πληρώσου άμεσα." />
        <Card title="Dropshipping" desc="Πούλα χωρίς stock. Auto-fulfillment." />
        <Card title="Digital Assets" desc="Πούλα ebooks, templates, φωτογραφίες." />
        <Card title="Subscriptions" desc="Premium πρόσβαση στο EverythingNow AI." />
      </div>
    </main>
  );
}

function Card({ title, desc }) {
  return (
    <div
      style={{
        background: "#1c1c1c",
        padding: "20px",
        borderRadius: "15px",
        border: "1px solid #333",
      }}
    >
      <h2 style={{ marginBottom: "10px", fontSize: "22px" }}>{title}</h2>
      <p style={{ opacity: 0.8 }}>{desc}</p>
      <button
        style={{
          marginTop: "15px",
          padding: "12px 20px",
          borderRadius: "10px",
          border: "none",
          background: "#0070f3",
          color: "white",
          cursor: "pointer",
        }}
      >
        Coming soon
      </button>
    </div>
  );
}

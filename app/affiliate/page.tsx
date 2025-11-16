export default function AffiliatePage() {
  const offers = [
    {
      name: "Amazon Best Deals",
      link: "https://www.amazon.com/best-sellers",
      desc: "Κέρδισε προμήθειες από κάθε αγορά μέσω Amazon.",
    },
    {
      name: "AliExpress Hot Products",
      link: "https://www.aliexpress.com/",
      desc: "Προμήθειες μέχρι 50% από trending προϊόντα.",
    },
    {
      name: "Shopify Trial",
      link: "https://www.shopify.com/",
      desc: "Kερδίζεις όταν άλλοι ανοίγουν e-shop.",
    },
    {
      name: "Bluehost Hosting",
      link: "https://www.bluehost.com/",
      desc: "Υψηλές προμήθειες από hosting plans.",
    },
    {
      name: "Fiverr Freelancers",
      link: "https://www.fiverr.com/",
      desc: "Κέρδισε προμήθειες όταν κάποιος αγοράζει υπηρεσία.",
    },
    {
      name: "Canva Pro",
      link: "https://www.canva.com/",
      desc: "Προμήθεια για κάθε Canva Pro signup.",
    },
  ];

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
        💰 EverythingNow – Affiliate Center
      </h1>

      <p style={{ textAlign: "center", fontSize: "18px", marginBottom: "40px" }}>
        Επιλεγμένα affiliate offers που πληρώνουν πραγματικά χρήματα.  
        Σύντομα θα μπουν 200+ auto-monetized links.
      </p>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {offers.map((o) => (
          <div
            key={o.name}
            style={{
              background: "#1c1c1c",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h2 style={{ fontSize: "24px" }}>{o.name}</h2>
            <p style={{ opacity: 0.7 }}>{o.desc}</p>
            <a
              href={o.link}
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "10px 18px",
                background: "#0070f3",
                borderRadius: "10px",
                color: "white",
                textDecoration: "none",
              }}
            >
              Visit Offer
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

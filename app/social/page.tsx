export default function SocialPage() {
  const links = [
    { name: "Instagram", url: "https://instagram.com", color: "#E1306C" },
    { name: "TikTok", url: "https://tiktok.com", color: "#000000" },
    { name: "YouTube", url: "https://youtube.com", color: "#FF0000" },
    { name: "Facebook", url: "https://facebook.com", color: "#1877F2" },
    { name: "Twitter / X", url: "https://x.com", color: "#1DA1F2" },
    { name: "LinkedIn", url: "https://linkedin.com", color: "#0A66C2" },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #111, #000)",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
        🔗 Social Hub
      </h1>
      <p style={{ opacity: 0.8, marginBottom: "40px" }}>
        Όλα τα social media σε ένα σημείο.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            style={{
              padding: "15px 20px",
              borderRadius: "10px",
              fontSize: "20px",
              fontWeight: "600",
              background: link.color,
              color: "white",
              textDecoration: "none",
            }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </main>
  );
}
